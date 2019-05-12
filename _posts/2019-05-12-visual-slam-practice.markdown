---
layout: post
modalID: modalVisualSlamPractice
permalink: /:categories/:slug/
main_title: Visual SLAM Practice (In Progress)
start_date: 2018-12-02
<!-- end_date:   2019-05-12 -->
end_date: present
thumb_image_url: assets/visual-slam-practice/images/plotting-2.png
images:
- {url: assets/visual-slam-practice/images/plotting-1.png, caption: "The pointcloud soon after start. You can make out the green trees and blue sky", id: plotting-1}
- {url: assets/visual-slam-practice/images/camera-0.png, caption: "The camera feed, with optical flow visualised.", id: camera-0}
- {url: assets/visual-slam-practice/images/plotting-2.png, caption: "The pointcloud after 20-30 steps. See how the blue car trajectory is straight, but seems to go perpendicularly to the point cloud. There's an issue either with how I display points, or how I triangulate. Also, I should probably cull the points that are far away from the car.", id: plotting-2}
category: projects
project_title: "Visual SLAM Practice (In Progress)"
thumb_text: An implementation of visual SLAM
tech:
  - Localisation
  - SLAM
  - g2o
  - pangolin
  - Python
size: extra-large
unlisted: false

---

# Introduction
Ever since I did AI Class 2011 back in high school, I wanted to implement SLAM. I even tried to make a Lego NXT robot map the environment using a single ultrasonic sensor back then. I have approached this goal, but sadly, did not succeed, during my honours project. This is my next attempt.

A secondary goal is to learn how to use Bundle Optimizers. I want to figure out how much it improves the trajectory, or if it can't work without one at all. For now, I'm using `g2o`.

I want to make a car build a map and localise itself using either monocular or binocular vision. For this, I'm attempting to use ORB features and descriptors, triangulate 3D points and poses, then use `g2o` to refine the locations, and finally, plot everything in 3D.

Currently I have the plotting `g2o` and (`pangolin`) ready, but cannot test it, because of issues with 3D point triangulation.
I hope to find the time to work on this project more in the near future.

Disclaimer: This is heavily inspired by [George Hotz's Live SLAM coding session](https://www.youtube.com/watch?v=7Hlb8YX2-W8). I am using his code and thinking as reference.

<div class="post-content-markdown">

<br>

Code Repository: [GitLab](https://gitlab.com/LinasKo/visual-slam-practice){:target="_blank"}
{: .text-center}

</div>
