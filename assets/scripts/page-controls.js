// Videos play for 1 second at most
video = jQuery('video').get()[0];

video.addEventListener('loadeddata', function() {
    video.play();
});

video.addEventListener('pause', function() {
    video.play();
});
