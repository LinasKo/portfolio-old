---
layout: post
modalID: modalBehaviouralCloning
permalink: /:categories/:slug/
main_title: Behavioural Cloning to Drive a Simulated Vehicle
start_date: 2018-09-16
end_date:   2018-10-13
thumb_image_url: assets/udacity-behavioural-cloning/images/final_submission.gif
images:

  - {url: assets/udacity-behavioural-cloning/images/left_img.jpg, caption: "An example image from the left camera, used for model training.", id: left_img}

  - {url: assets/udacity-behavioural-cloning/images/final_submission.gif, caption: "A snapshot of the final submission video, showing a feed of the front camera as the car is driving through the course autonomously.", id: final_submission}

  - {url: assets/udacity-behavioural-cloning/images/right_img.jpg, caption: "An example image from the right camera, used for model training.", id: right_img}

category: projects
project_title: "Behavioural Cloning to Drive a Simulated Vehicle"
thumb_text: Behavioural Cloning to drive a simulated vehicle on a racetrack
tech:
  - Deep Learning
  - Computer Vision
  - Keras
  - Python
  - Numpy
size: medium

---

<div class="post-content-markdown">

A part of the Udacity Self-Driving Car Nanodegree, the project introduced Behavioural Cloning as means of completing an objective. In this case, I had to teach a simulated vehicle to make a lap around a racetrack, without driving onto the lane side markers.

## Data

The simulated vehicle had 3 cameras that it uses to see the world. One at the front, one slightly on the left, and one slightly on the right. A dataset of images from these cameras was gathered for us initially and could be used for training, but, as I later found out, was insufficient to make the car drive robustly.

We were encouraged to use the simulator, drive the car, and record the data ourselves, which proved to be necessary. After a few days of attempting to train on the original data I realized that it has flaws such as:
* The car veering off to the side of the road
* An insufficient coverage of the racetrack

I have then gathered 2 laps of driving data, controlling the car with my mouse. I augmented the set with 2 runs through the riskier segments.

## Model

I have once again decided to use the LeNet model. It was easy to set up, and easy to make modifications on, if I wished so.

As input, I used images from all three cameras, but applied an offset to the steering command labels of images from the left and the right cameras. This eliminated the need to collect data of the car straightening out or recovering from bad turns.

I ended up using the following network architecture for the training:
* A cropping layer to crop 50 pixels from the top and 20 from the bottom of each image. Effectively, this reduces the image dimensions (x, y) from (320, 160) to (250, 160).
* A normalization layer that squeezes all values to the range [-0.5, 0.5].
* A convolutional layer with 32 filters of shape 3x3 and a stride of 1.
* A 2x2 max-pooling layer.
* A convolutional layer with 32 filters of shape 3x3 and a stride of 1.
* A 2x2 max-pooling layer.
* A densely connected layer with 150 hidden units.
* A final densely connected layer with one unit for the output.

## Conclusion

Ultimately, with data from 2 laps and 2 segments of each difficult section, I have managed to use the simple LeNet architecture to make the car drive on the track fairly stably, without going over the sides. The availability of side camera data is a godsend - it let me not worry too much about gathering data of car recovering, and just rely on training on the side images with an offset, effectively steering the car back towards the center.

<br>

Code Repository: [GitHub](https://github.com/LinasKo/CarND-Behavioral-Cloning-P3){:target="_blank"}
{: .text-center}

Main Project File: [GitHub](https://github.com/LinasKo/CarND-Behavioral-Cloning-P3/blob/master/src/model.py){:target="_blank"}
{: .text-center}

Writeup: [writeup.md](https://github.com/LinasKo/CarND-Behavioral-Cloning-P3/blob/master/writeup.md){:target="_blank"}
{: .text-center}

</div>
