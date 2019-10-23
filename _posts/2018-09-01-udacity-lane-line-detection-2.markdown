---
layout: post
modalID: modalUdacityLaneLineDetection2
permalink: /:categories/:slug/
main_title: Lane Line Detection - Advanced
start_date: 2018-07-28
end_date:   2018-09-13
thumb_image_url: assets/udacity-lane-line-detection-2/videos/final_project_video.gif
images:

  - {url: assets/udacity-lane-line-detection-2/videos/final_project_video.gif, caption: "A fragment of the final submission video", id: final_project_video}

  - {url: assets/udacity-lane-line-detection-2/videos/challenge_video.gif, caption: "A clip of the challenge video", id: challenge_video}

  - {url: assets/udacity-lane-line-detection-2/images/compressed/line_curvature_example.png, caption: "An visual example of the sliding window algorithm, used to find the pixels belonging to each lane line. Here, polynomial functions were also fit to the lines, estimating the curvature.", id: line_curvature_example}

  - {url: assets/udacity-lane-line-detection-2/videos/best edge threshold sob25_m30-_L_d-09 closed harder_challenge_video.gif, caption: "The final threshold applied to the harder challenge video. Observe that the lane lines can be seen even with all the noise in the system.", id: thresh_harder_challenge_video}

  - {url: assets/udacity-lane-line-detection-2/videos/best edge threshold sob25_m30-_L_d-09 closed challenge_video.gif, caption: "The final threshold applied to the challenge video. Observe the line in the middle of the road, separating the two types of asphalt used in the road.", id: thresh_challenge_video}

  - {url: assets/udacity-lane-line-detection-2/images/compressed/Variance-based line selection.png, caption: "Variance-based line correction. The green dot on the blue line is placed based not on the width at that point, but on a fixed distance from the green point on the right line", id: variance-based-line-selection}

category: projects
project_title: "Advanced lane line detection"
thumb_text: Advanced lane line detection in a video
tech:
  - Computer vision
  - OpenCV
  - Python
  - Numpy
size: large

---

<div class="post-content-markdown">

The project served as a practical exercise of lane line detection as part of the Self-Driving Car Engineer Nanodegree in Udacity. Compared to the basic lane line detection project, this provided both more complicated input videos, and with higher detection precision requirements.

At this point I want to immediately mention the [writeup for this project](https://github.com/LinasKo/CarND-Advanced-Lane-Lines/blob/master/writeup.md). If you wish to find out what I've done in more depth, feel free to have a look.

## Data

Once again, I was given three videos:
* project_video.mp4 (50s) - a video with a car doing a left turn gradually, but without many visual complications.
* challenge_video.mp4 (16s, optional) - a video featuring an over-road bridge and particularly challenging due to two different textured asphalt types used, with a split going directly in the middle of the current lane. Here, the weather conditions are also different as the sky is overcast, effectively reducing the contrast of the road.
* harder_challenge_video.mp4 (47s, optional) - a very challenging video of a car going through a forest. As far as sunny days go, this is as challenging as it gets: there are significant light reflections on the glass, the car performs very sharp turns, the strong light and dark shadows intertwine, and the lane lines are often completely covered with leaves.

I ended up fighting the data for over a month, but did not manage to achieve good results on any of the challenge videos. Also, I would go as far as saying that the challenge video in the forest is easier to work with, compared to the other challenge video, primarily due to similar light conditions.

## Methods

While I experimented with many different setups and parameters, I ended up using the following pipeline:
* Correct camera distortion (coefficients precomputed)
* Extract saturation channel
* Extract edges where saturation > 150, store in `s_thresh`
* Extract the red channel
* Apply a 25x25 Sobel kernel to the red channel find image derivatives along X and Y axes.
* Use the derivatives to filter out edges where the magnitude is less than 30 (out of a maximum of 255), store result in `max_thresh`
* Use the derivatives to pick edges with direction between 0.8 and 1.2 radians, storing it in `dir_thresh`
* Compute the fused threshold `grad_or_color` = (`max_thresh` AND `dir_thresh`) OR `s_thresh`
* Perform a morphological close with an elliptical kernel of size 3x3 to fill in gaps between edges.
* Mask the hood of the vehicle (manually set area)
* Perform perspective transform to obtain a top-down view of the lane
* Find points belonging to both lane lines by using a sliding window approach
* Fit polynomial functions to the result
* Compute historical variance of the x coordinate of each line, given a fix coordinate y.
* Discard the more chaotic line for this time period and instead use the other one as ground truth, projecting the other one based on the first one.
* Compute the curvature of the road given the line directions
* Draw the lines, as well as area between them. Undo the perspective transform to get the lane plot.
* Draw the curvature of the road and the approximate distance of the vehicle to the center of the road, satisfying the last requirements.

## Results

Ultimately, the project satisfied the requirements given to us, as we were only meant to apply the project to the first video. However, I did not mange to achieve my goal of applying it to the challenge videos as well.

## General Discussion


* As mentioned in the thresholding section, some videos / days will just be more bleak, meaning the lane lines will have lower contrast compared to the road. Histogram normalization doesn't always work as it often does not create that much difference in the contrasts between the road and the lines.
* Especially with that older road in challenge video, the road is sometimes of a similar color than the lines.
* Cracks in the road often confuse the edge detection algorithm. The challenge video has a long crack immediately to the right of the right line that confuses my algorithm significantly. Couple that with the bleakness of the white lines and you have a hard time with introducing two-step verification of the line.
* Generally, fusion of several thresholding methods and the line detection methods is hard, if you want it to work for the general case.
* Light and shadows are difficult to cope with in the harder challenge video.
* The strong turn at the end of the challenge video was the hardest challenge. My algorithm could deal with 50% of the road, and kind of bounce about in the rest, but when that turn came, it would always go crazy.
* I think it'd be worth to have separate detectors / parameters to detect yellow and white lines. But then again - how do you fuse them right?
* If I recall correctly, shadows make the lines lose saturation (e.g. under the bridge in challenge video). Given that saturation is one of the better channels for detecting the lines, it seems that there should be a fallback plan.
* When finding curvature, computing the variance of the lines to figure out which one is more stable was a good idea. It's probably possible to use that and estimate / verify the other line during line detection as well.
* Blob detection for filtering out the road by area might prove to be very useful. We know that lines won't take most of the space in the video.
* Merging the line into a shape and computing elongation / width / smoothness of the edges might be a decent way to verify correctness of the detection.
* Dashed lines should definitely have their own class when detecting them.
* CLAHE can be used for something here. I still can't put a finger on it though - it just made things worse for me. Especially in the harder challenge map where it revealed ALL the cracks in the road.
* There must be a way to nicely fill in the gaps between the two edges of a line. I still don't know a good way and I don't trust morphological closing or dilution since it magnifies all the other noise in the image.

Code Repository: [GitHub](https://github.com/LinasKo/CarND-Advanced-Lane-Lines){:target="_blank"}
{: .text-center}
Main Notebook: [Jupyter](https://github.com/LinasKo/CarND-Advanced-Lane-Lines/blob/master/notebooks/Final%20Notebook.ipynb){:target="_blank"}
{: .text-center}

</div>
