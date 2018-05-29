---
layout: post
modalID: modalCrab
permalink: /:categories/:slug/
main_title:  Honours Project - Augmenting a Robotic Model of Fiddler Crab Interaction
start_date:   2016-09-01
end_date:     2017-04-06
thumb_image_url: assets/crab/images/crab_robot.jpg
images:
  - {url: assets/crab/images/crab_robot.jpg, caption: "The Crab Robot. Motors of the omnidirectional wheels are powered by the Arduino board. Images from the two-sided fisheye camera are processed by the FitPC with Linux Mint (green box). In the middle, connected with the rainbow cable, you can see a small Inertial Measurement Unit (IMU).", id: crab_robot}
  - {url: assets/crab/images/masked_ommatidia_view.png, caption: "View from the Crab Robot, with crab ommatidia filter and robot's self-masking applied. Ommatidia are clusters of photosensitive cells in an eye of arthropods. Crab eyes allow them to see in high resolution along the horizon, but with a low resolution above and below it. The filter was created by Theodoros Stouraitis and Evripidis Gkanias", id: masked_ommatidia_view}
  - {url: assets/crab/images/overhead_view.png, caption: "The Crab Robot, as viewed through the overhead tracking tool. I have attached colored sheets to the robot to be able to detect its orientation. Centroids of the detected sheets and the calculated orientation of the robot are displayed.", id: overhead_view}
  - {url: assets/crab/images/fast_features.png, caption: "Tracking of FAST features as the camera is slowly rotated to the right. Here, roll, pitch and yaw are not yet correlated with actual orientation.", id: fast_features}
  - {url: assets/crab/images/filtered_view.png, caption: "The crab view with object detection filter applied. Pink was chosen as the color for significant objects. Both the burrow (pink sheets of paper below the horizon), and the predator (pink object above the horizon) would be highlighted.", id: filtered_view}
  - {url: assets/crab/images/color_picker_example.png, caption: "Example of a color picker in action. The regions with colors between min and max are detected, with the min and max values saved upon user input.", id: color_picker_example}
category: projects
course_name: Honours Project
project_title: Augmenting a Robotic Model of Fiddler Crab Interaction
thumb_text: Improvements to Localization system of a robotic crab using Optical Flow
collaborators:
tech:
  - Python
  - OpenCV
  - Numpy
  - Linux
size: extra-large

---

<div class="post-content-markdown">

The robotic model of a fiddler crab is a four-wheeled vehicle, capable of omnidirectional movement, foraging behavior, predator detection, evasion, and retreat to the burrow. It uses a two-sided fisheye camera (RICOH THETA S) and a specific crab-eye filter, specifically chosen and designed to mimic the visual system of the crab.
{: .text-left}

As my final project in University of Edinburgh, I looked for ways to improve the system by introducing new features, related to modeling the real crabs and improving the reliability of the current system. The list of contributions I made is as follows:
{: .text-left}

* Improved the foraging behavior of the robot. For as much as the path integration allows it, the robot attempts to orient itself towards its burrow. Furthermore, the foraging behavior no longer relies on random walk and more closely matches the behavior of crabs in nature.
* Developed several tools for the system:
  *  Color picking tool allows to pick and store color information of color ranges. The values are integrated into the object detection framework, allowing quick predator and burrow color tweaking. Code Repository: [GitLab](https://gitlab.com/LinasKo/camera_color_picker){:target="_blank"}
  * Self-masking tool masks the crab from itself, preventing it from mistaking colors of its chassis and wires for the burrow. This replaced the previous ad-hoc solution, where the crab was covered with post-it notes and paper.
  * Designed and implemented an overhead tracker of the robot, based on visual markers, on the robot. It was used to gather and correlate observed robot rotation with optical flow data from the robot. If needed, additional data such as robot’s rotation, estimated by the path integration system, can be tracked and analyzed.
* Experiments were performed with an elevated stationary object, used as a reference, aimed to help the robot estimate its rotation. Results have shown that with the crab eye filter, the robot is incapable of detecting even a bright A4 sheet, 2.20 meters away from it.
* I have found and corrected two bugs in the previously developed robot’s system, that impacted the way movement trajectory was calculated.
* Implemented, but did not achieve success of rotation and translation recovery, based on optical flow and Essential Matrix decomposition. I believe this is due to the errors introduced when dewarping a fisheye image.
* Measured the correlation between observed optical flow and pure rotations of the robot. The relation is (surprisingly) linear. However, the function is location specific, meaning that without translation tracking or additional optimization, the usage of first-principles-based optical flow does not improve the path integration system.
{: .text-left}

Ultimately, the project explored different way that the path integration system could be improved, focusing on optical flow. Auxiliary tools that were developed in the process open up new ways of interacting with the robot, as well as covering some weaker points of the previous system.
{: .text-left}

Report: [Google Drive](https://drive.google.com/open?id=1rj-FLRGEFZqU6gGy-3McNmzT2M3d3hOd){:target="_blank"}
{: .text-center}
If you would like to take a look at the code, please contact me.
{: .text-center}

</div>
