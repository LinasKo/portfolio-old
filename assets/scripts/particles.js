/*!
 * A lightweight, dependency-free and responsive javascript plugin for particle backgrounds.
 *
 * @author Marc Bruederlin <hello@marcbruederlin.com>
 * @version 2.2.3
 * @license MIT
 * @see https://github.com/marcbruederlin/particles.js
 */

/* exported Particles */
var Particles = (function(window, document) {
    function particleCompareFunc(p1, p2) {
        if (p1.x < p2.x) {
            return -1;
        } else if (p1.x > p2.x) {
            return 1;
        } else if (p1.y < p2.y) {
            return -1;
        } else if (p1.y > p2.y) {
            return 1;
        }

        return 0;
    }

    /**
     * Represents the plugin.
     *
     * @constructor
     */
    var Plugin = (function() {
        function Plugin() {
            this.defaults = {
                responsive: null,
                selector: null,
                maxParticles: 100,
                sizeVariations: 3,
                showParticles: true,
                speed: 0.5,
                color: '#000000',
                minDistance: 120,
                connectParticles: false,
            };

            this.element = null;
            this.context = null;
            this.ratio = null;
            this.breakpoints = [];
            this.activeBreakpoint = null;
            this.breakpointSettings = [];
            this.originalSettings = null;
            this.storage = [];
            this.usingPolyfill = false;
        }

        return Plugin;
    }());

    /**
     * Public mehtod to initialize the plugin with user settings.
     *
     * @public
     * @param {object} settings
     */
    Plugin.prototype.init = function(settings) {
        this.options = this._extend(this.defaults, settings);
        this.originalSettings = JSON.parse(JSON.stringify(this.options));

        this._animate = this._animate.bind(this);

        this._initializeCanvas();
        this._initializeEvents();
        this._registerBreakpoints();
        this._checkResponsive();
        this._initializeStorage();
        this._animate();

        return this;
    };

    /**
     * Public method to destroy the plugin.
     *
     * @public
     */
    Plugin.prototype.destroy = function() {
        this.storage = [];
        this.element.remove();

        window.removeEventListener('resize', this.listener, false);
        window.clearTimeout(this._animation);
        cancelAnimationFrame(this._animation);
    };

    /**
     * Setup the canvas element.
     *
     * @private
     */
    Plugin.prototype._initializeCanvas = function() {
        if (!this.options.selector) {
            console.warn('particles.js: No selector specified! Check https://github.com/marcbruederlin/particles.js#options');
            return false;
        }

        this.element = document.querySelector(this.options.selector);
        this.context = this.element.getContext('2d');

        const devicePixelRatio = window.devicePixelRatio || 1;
        const backingStoreRatio = this.context.webkitBackingStorePixelRatio || this.context.mozBackingStorePixelRatio || this.context.msBackingStorePixelRatio ||
            this.context.oBackingStorePixelRatio || this.context.backingStorePixelRatio || 1;

        this.ratio = devicePixelRatio / backingStoreRatio;
        this.element.width = (this.element.offsetParent) ? this.element.offsetParent.clientWidth * this.ratio : this.element.clientWidth * this.ratio;

        if (this.element.offsetParent && this.element.offsetParent.nodeName === 'BODY') {
            this.element.height = window.innerHeight * this.ratio;
        } else {
            this.element.height = (this.element.offsetParent) ? this.element.offsetParent.clientHeight * this.ratio : this.element.clientHeight * this.ratio;
        }
        this.element.style.width = '100%';
        this.element.style.height = '100%';

        this.context.scale(this.ratio, this.ratio);
    };

    /**
     * Register event listeners.
     *
     * @private
     */
    Plugin.prototype._initializeEvents = function() {
        this.listener = function() {
            this._resize();
        }.bind(this);
        window.addEventListener('resize', this.listener, false);
    };

    /**
     * Initialize the particle storage.
     *
     * @private
     */
    Plugin.prototype._initializeStorage = function() {
        this.storage = [];
        for (var i = this.options.maxParticles; i--;) {
            this.storage.push(new Particle(this.context, this.options));
        }
    };

    /**
     * Register responsive breakpoints if the user declared some.
     *
     * @private
     */
    Plugin.prototype._registerBreakpoints = function() {
        const responsiveSettings = this.options.responsive || null;

        if (typeof responsiveSettings === 'object' && responsiveSettings !== null && responsiveSettings.length) {
            for (var breakpoint in responsiveSettings) {
                var l = this.breakpoints.length - 1;
                var currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    while (l >= 0) {
                        if (this.breakpoints[l] && this.breakpoints[l] === currentBreakpoint) {
                            this.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    this.breakpoints.push(currentBreakpoint);
                    this.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].options;
                }
            }

            this.breakpoints.sort(function(a, b) {
                return b - a;
            });
        }
    };

    /**
     * Check if a breakpoint is active and load the breakpoints options.
     *
     * @private
     */
    Plugin.prototype._checkResponsive = function() {
        var targetBreakpoint = false;

        if (this.options.responsive && this.options.responsive.length && this.options.responsive !== null) {
            targetBreakpoint = null;

            for (var breakpoint in this.breakpoints) {
                if (this.breakpoints.hasOwnProperty(breakpoint)) {
                    if (window.innerWidth <= this.breakpoints[breakpoint]) {
                        targetBreakpoint = this.breakpoints[breakpoint];
                    }
                }
            }

            if (targetBreakpoint !== null) {
                this.activeBreakpoint = targetBreakpoint;
                this.options = this._extend(this.options, this.breakpointSettings[targetBreakpoint]);
            } else {
                if (this.activeBreakpoint !== null) {
                    this.activeBreakpoint = null;
                    targetBreakpoint = null;

                    this.options = this._extend(this.options, this.originalSettings);
                }
            }
        }
    };

    /**
     * Rebuild the storage and update the canvas.
     *
     * @private
     */
    Plugin.prototype._refresh = function() {
        this._initializeStorage();
        this._drawPlugin();
    };

    /**
     * Kick off various things on window resize.
     *
     * @private
     */
    Plugin.prototype._resize = function() {
        this.element.width = (this.element.offsetParent) ? this.element.offsetParent.clientWidth * this.ratio : this.element.clientWidth * this.ratio;

        if (this.element.offsetParent && this.element.offsetParent.nodeName === 'BODY') {
            this.element.height = window.innerHeight * this.ratio;
        } else {
            this.element.height = (this.element.offsetParent) ? this.element.offsetParent.clientHeight * this.ratio : this.element.clientHeight * this.ratio;
        }

        this.context.scale(this.ratio, this.ratio);

        clearTimeout(this.windowDelay);

        this.windowDelay = window.setTimeout(function() {
            this._checkResponsive();
            this._refresh();
        }, 50);
    };

    /**
     * Animates the plugin particles by calling the draw method.
     *
     * @private
     */
    Plugin.prototype._animate = function() {
        this._drawPlugin();
        this._animation = window.requestAnimFrame(this._animate);
    };

    /**
     * Restarts the particles animation by calling _animate.
     *
     * @public
     */
    Plugin.prototype.resumeAnimation = function() {
        if (!this._animation) {
            this._animate();
        }
    };

    /**
     * Pauses/stops the particle animation.
     *
     * @public
     */
    Plugin.prototype.pauseAnimation = function() {
        if (!this._animation) {
            return;
        }

        if (this.usingPolyfill) {
            window.clearTimeout(this._animation);
        } else {
            var cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame;
            cancelAnimationFrame(this._animation);
        }

        this._animation = null;
    };

    /**
     * Draws the plugin particles.
     *
     * @private
     */
    Plugin.prototype._drawPlugin = function() {
        const parentWidth = (this.element.offsetParent) ? this.element.offsetParent.clientWidth : this.element.clientWidth;

        var parentHeight;
        if (this.element.offsetParent && this.element.offsetParent.nodeName === 'BODY') {
            parentHeight = window.innerHeight;
        } else {
            parentHeight = (this.element.offsetParent) ? this.element.offsetParent.clientHeight : this.element.clientHeight;
        }

        this.context.clearRect(0, 0, this.element.width, this.element.height);

        // TODO: can optimize drawing by sorting particles by color before drawing
        for (var i = this.storage.length; i--;) {
            var particle = this.storage[i];

            if (this.options.showParticles) {
                particle._drawParticle();
            }

            particle._updateCoordinates(parentWidth, parentHeight);
        }

        if (this.options.connectParticles) {
            this.storage.sort(particleCompareFunc);
            this._drawEdges();
        }
    };

    /**
     * Updates the edges.
     *
     * @private
     */
    Plugin.prototype._drawEdges = function() {
        for (var i = 0; i < this.storage.length; i++) {
            const p1 = this.storage[i];

            this.context.beginPath();
            for (var j = i + 1; j < this.storage.length; j++) {
                const p2 = this.storage[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (Math.abs(dx) > this.options.minDistance) {
                    break;
                }

                if (distance <= this.options.minDistance) {
                    this._drawLine(p1, p2, (1.2 - distance / this.options.minDistance));
                }
            }
            this.context.stroke();
        }
    };

    /**
     * Draws an edge between two points.
     *
     * @private
     * @param {Particle} p1
     * @param {Particle} p2
     * @param {number} opacity
     */
    Plugin.prototype._drawLine = function(p1, p2, opacity) {
        if (p1.color === p2.color) {
            this.context.strokeStyle = this._addHexOpacity(p1.color, opacity);
        } else {
            const gradient = this.context.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, this._addHexOpacity(p1.color, opacity));
            gradient.addColorStop(1, this._addHexOpacity(p2.color, opacity));
            this.context.strokeStyle = gradient;
        }
        this.context.moveTo(p1.x, p1.y);
        this.context.lineTo(p2.x, p2.y);
    };

    /**
     * Merges the keys of two objects.
     *
     * @private
     * @param {object} source
     * @param {object} obj
     */
    Plugin.prototype._extend = function(source, obj) {
        Object.keys(obj).forEach(function(key) {
            source[key] = obj[key];
        });

        return source;
    };

    /**
     * Converts floating point opacity to hex and appends to color
     *
     * @param  {string} hexColor
     * @param  {float}  opacity
     * @return {string}
     */
    Plugin.prototype._addHexOpacity = function(hexColor, opacity) {
        opacity = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity;
        return hexColor + Math.floor(opacity * 255).toString(16);
    }

    /**
     * Represents a single particle.
     *
     * @constructor
     * @param {object} context
     * @param {object} options
     */
    var Particle = function(context, options) {
        this.context = context;
        this.options = options;

        const canvas = document.querySelector(options.selector);
        this.x = (canvas.offsetParent) ? Math.random() * canvas.offsetParent.clientWidth : Math.random() * canvas.clientWidth;

        if (canvas.offsetParent && canvas.offsetParent.nodeName === 'BODY') {
            this.y = Math.random() * window.innerHeight;
        } else {
            this.y = (canvas.offsetParent) ? Math.random() * canvas.offsetParent.clientHeight : Math.random() * canvas.clientHeight;
        }

        this.vx = Math.random() * options.speed * 2 - options.speed;
        this.vy = Math.random() * options.speed * 2 - options.speed;
        this.radius = Math.random() * Math.random() * options.sizeVariations;
        this.color = (options.color instanceof Array) ? options.color[Math.floor(Math.random() * options.color.length)] : options.color;
    };

    /**
     * The particles draw function (renders the circle).
     *
     * @private
     */
    Particle.prototype._drawParticle = function() {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.context.fillStyle = this.color;
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.context.fill();
    };

    /**
     * This updates the particles coordinates.
     *
     * @private
     * @param parentWidth
     * @param parentHeight
     */
    Particle.prototype._updateCoordinates = function(parentWidth, parentHeight)
    {
        var x = this.x + this.vx;
        var y = this.y + this.vy;
        var radius = this.radius;

        if (x + radius > parentWidth) {
            x = radius;
        } else if (x - radius < 0) {
            x = parentWidth - radius;
        }

        if (y + radius > parentHeight) {
            y = radius;
        } else if (y - radius < 0) {
            y = parentHeight - radius;
        }

        this.x = x;
        this.y = y;
    };

    /**
     * A polyfill for requestAnimFrame.
     *
     * @return {function}
     */
    window.requestAnimFrame = (function() {
        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
        if (requestAnimationFrame) {
            return requestAnimationFrame;
        }

        this._usingPolyfill = true;

        return function(callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    })();

    return new Plugin();

})(window, document);

(function() {
    if (typeof define === 'function' && define.amd) {
        define('Particles', function() {
            return Particles;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Particles;
    } else {
        window.Particles = Particles;
    }
})();
