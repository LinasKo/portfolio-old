---
layout: post
modalID: modalUdacityCarndPidControl
permalink: /:categories/:slug/
main_title: PID Control
start_date: 2019-04-06
<!-- end_date:   2019-04-11 -->
thumb_image_url: assets/post_assets/udacity-pid-control/videos/gif/calibrating-PID.gif
images:
  - {
    url: "assets/post_assets/udacity-pid-control/videos/gif/calibrating-PID.gif",
    caption: "PID controller being calibrated. You can see the car being reset as it drives off the track and the lateral error becomes too large. Full video: https://www.youtube.com/watch?v=lqNxq_D42Hc.",
    id: "calibrating-pid"
  }
  - {
    url: "assets/post_assets/udacity-pid-control/images/compressed/car-stuck.png",
    caption: "Car stuck on the side of the road near the start, on one of the first Twiddle iterations. This is why early termination with forced high error is needed when speed approaches 0.",
    id: "car-stuck"
  }
  - {
    url: "assets/post_assets/udacity-pid-control/videos/gif/calibrated-PID.gif",
    caption: "Fully calibrated PID control of the car. Full video: https://www.youtube.com/watch?v=fgGJAvOK36g.",
    id: "calibrated-pid"
  }
category: projects
project_title: "PID Control and calibration using Twiddle"
thumb_text: PID control and PID parameter calibration using Twiddle algorithm for a simulated vehicle.
tech:
  - Control
  - C++
size: small
unlisted: false

---

<div class="post-content-markdown">

## Introduction

The project was to implement a PID controller to drive a car in a simulation, given lateral error. An easy one, given that I've done PID tuning in university, and I've seen the lecture videos in previous Udacity courses 3 times already. Parameter tuning was done using `Twiddle`, employing an error not using the lateral error directly, but one that is inversely proportional to runtime. To make this work, I also had to:
* Find a message that resets the car's position in the simulator
* Implement warmup time, for when the car is just starting its course, to let the speed stabilize before Twiddle is activated
* Early termination, if the car is stuck (speed is small) and when the car veers off the road (absolute lateral error is too high)
* Use `spdlog` for logging, to improve development / debugging speed

<details><summary><h2>What is PID control?</h2>
  <p>How you can minimze an error of a process over time using PID Control</p>
</summary>

PID control (Proportional Integral Derivative) - is a process regulation method that, given an error, regulates an output such that over time, subsequent errors are minimized. The generated output is a sum of three components:

* The proportional component is simply the weighted error at the current time step. It regulates how strongly the controller will respond to the value of the error. (e.g. if error is high, steer by a similarly high amount)
* The integral component is a weighted historical measure of the error, computed by summing all the past errors. It helps when we need to correct a steady state error, that always impacts the error by a constant amount. (e.g. one wing of a plane is slightly differently shaped, making the plane always drift to the right a bit)
* The derivative component attempts to react to error's rate of change. It is computed by finding the difference in speeds, divided by the time difference, and multiplied by a weight factor.
I don't know how popular it is, but it's certainly possible to also use coefficients representing higher order derivatives. For example, there could be a component that reacts to acceleration and jerk of the error, in addition to the derivative component here.

To use the PID control, the weights for each of these components needs to be set. The next section will explain how I did it.

</details>

<details><summary><h2>Twiddle in Theory</h2>
  <p>A simple to understand and implement hill climbing algorithm</p>
</summary>

Twiddle is an algorithm that I used to tune the parameters. It attempts to minimize and error by trying out different parameters and loosely following the gradient, leading to the smallest error. Yes, it's very prone to local minima, but for simple PID tuning, it works well.

At every iteration of Twiddle we will be given coefficient values, as well as the error resulting from those. Twiddle will then devise its own coefficients, that will be used to increase or decrease the value of the given coefficients. Those are then returned to compute the new error metric, that is again returned to twiddle. If it was lower, the twiddle coefficient value increases, and if it's higher, the values decreases. It allows twiddle to gain momentum when it's going in the right direction and is successfully minimizing the error, but quickly decrease if it's going the wrong way.

</details>

<details><summary><h2>Twiddle Implementation</h2>
  <p>The specifics of my Twiddle implementation</p>
</summary>

The above is commonly known - the creative step was applying Twiddle to this particular problem. First, it's always important to let the car run a bit without passing the params to twiddle, as it starts off slowly, and we want to help it correct itself over time.

Then, it's important to pass the right error measure to twiddle. Initially I tried passing a multiple of `(carError / carSpeed)` as the error, so that runs that end in the car crashed at rock at some point would produce a high value. This simply resulted in poor results that didn't lead to much. Next, I attempted to grant the car a longer grace period initially, and start applying twiddle only at later stages of the run. This took way too much time, and I found that coefficients learned at the start of the journey would sometimes not apply later. Then, a fairly simple solution came to mind - I'll have a `high_number - run_time` as the error passed to twiddle. This produced very good results, but was very slow, as failure cases were not terminated early. So that's what I solved next - I would reset the run and pass a high error when the car went too far off centre or reached a speed of 0 (got stuck).

Another trick, was that I set the initial twiddle coefficients to a reasonable values of `0.1`.

As with deep learning, good initialization speeds the algorithm up. Lastly, I let the car run on the track, until it either ran for a long time, or the twiddle coefficients got too small.

And - that's it. I let the car run, and maybe 10-15 minutes later it came up with PID coefficients of `0.152734, 0, 0.820703` that let it circle the track with the initially speed, without stepping out of the lines. Of course, there's lots of room for improvement, particularly if using higher speeds, but at this point, I know a decent result can be achieved, know how to do it, and would rather get on to the final project :)

</details>

<br>

Code Repository: [GitHub](https://github.com/LinasKo/CarND-PID-Control-Project){:target="_blank"}
{: .text-center}

Twiddle calibration: [YouTube](https://www.youtube.com/watch?v=lqNxq_D42Hc){:target="_blank"}
{: .text-center}

Calibrated PID Control: [YouTube](https://www.youtube.com/watch?v=fgGJAvOK36g){:target="_blank"}
{: .text-center}

</div>
