---
layout: post
modalID: modalUdacityCarndCapstone
permalink: /:categories/:slug/
main_title: Programming a Self-Driving Car
start_date: 2019-04-28
<!-- end_date:   2019-05-08 -->
end_date: present
thumb_image_url: assets/udacity-carnd-capstone/images/compressed/udacity-carla-cropped.png
images:
  - {url: assets/udacity-carnd-capstone/images/compressed/udacity-carla-cropped.png, caption: "The car that the code will be tested on.", id: udacity-carla}
  - {url: assets/udacity-carnd-capstone/videos/stops-near-red.gif, caption: "The car stops after detecting a red light.", id: stops-near-red}
  - {url: assets/udacity-carnd-capstone/videos/car-resets-trajectory.gif, caption: "After a manual turn with Drive-By-Wire system off, the car resets to its initial trajectory.", id: car-resets-trajectory}
category: projects
project_title: "Programming a Self-Driving Car"
thumb_text: Programming a Self-driving car with traffic light detection
tech:
  - Deep Learning
  - Computer Vision
  - ROS
  - Tensorflow
  - Autoware
  - Python
  - C++
size: medium
unlisted: false

---

# Introduction
This is the final project of the Udacity Self-Driving Car Engineer Nanodegree. It is the first group project in the course, and involves writing code for both a simulated, and a real car.

## Objective
We were given a simulation of a car on a straight road and traffic lights. The car needed to follow a predefined path, while observing the traffic lights and stopping / slowing down if necessary. The car cannot drive faster than the speed limit, cannot accelerate faster than 10 m/s<sup>2</sup>, and cannot reach a jerk higher than 10 m/s<sup>3</sup>.

Through `ROS`, we can obtain messages with the car's pose, the poses of all waypoints on the road, the locations of all stopping lines near traffic lights and the poses and states of all traffic lights (for testing). We can also obtain raw images data from a camera on the front of the vehicle. Lastly, we can obtain current velocity of the car, as a boolean flag for whether the car's Drive-By-Wire system is enabled.

As the car is driving forward on the track, we needed to detect the color of the traffic light and slow down to stop at the stop line if needed. This mostly involved working on three components: the traffic light detector (detects traffic light state and location), the waypoint updater (sets the velocities for each of the given waypoints, slowing the car down near the light), and the Drive-by-Wire node (converts a list of waypoints with velocities to throttle, steering and brake strength).

Lastly, to help us, we were given the code for the DBW node, as well as the waypoint updater. Thereby, the most creative part of the project was the traffic light detector.

# Methods
As you can probably tell already, the project felt a little small for a team of 5. However, it provided a unique opportunity to work closely and inclusively with people from around the world. I believe, we managed to be efficient, even though it took some time for the team dynamics to be sorted out.

Fairly early on we spotted that the provided Udacity workspaces were not powerful enough to run the code we were given, even without traffic light detection (using traffic light states from the simulator via ROS directly). If the system couldn't keep up, the car would start swerving left and right with increasing amplitude, ultimately steering off the road. It was a known issue to Udacity, and they advised reducing the publishing rate, tweaking with the simulator C++ / `Autoware` code, or only looking for lights when near their known locations. It took us many attempts at using the provided workspace, VMs, considering docker, native installs, as well as three traffic light recognition models, most of the Udacity's suggested methods and a fair bit of debugging, until we managed to achieve the goal. And still, we could only do it one one machine, with a sufficiently powerful GPU.

I contributed, first of all, by attempting to figure out everyone's preferences, and splitting the task into pieces. To be fair, it is not fully clear to me how useful that was, as team dynamics then were still a bit sporadic, but I hope that others found it helpful. I then worked on different parts of the system:
* Initial implementation of the waypoint updater, returning simulated traffic light data from ROS, rather than traffic lights, so that further work could be parallelized
* Integration of some of the parts we developed + merge conflict resolution
* Implementation of a part of the logic behind traffic light classification frequency reduction
* Exploration of simulator and `Autoware` code for possibilities of optimization (Udacity's suggestion to change the code here was not correct, as far as I can tell)
* Testing, as I was the only one able to run it properly
* Test result video creation
* Preparation of the final solutions file (git LFS, zipping, etc)

Ultimately, I'm happy that my main worry was addressed - as far as I can tell, in a small project such as this, everyone was able to contribute and felt happy about both their, and each other's efforts.

# Outcome
At the time of writing, the project is in review. It will be run on both a simulation, and an actual self-driving car in the US. The updated results shall be published here, and probably in the repository as well.

<div class="post-content-markdown">

<br>

Code Repository: [GitHub](https://github.com/RichGit101/xPace_team/tree/tl_detection){:target="_blank"}
{: .text-center}

Full Run: [YouTube](https://www.youtube.com/watch?v=EZ2Q9PFU_iQ){:target="_blank"}
{: .text-center}

DBW Testing Run: [YouTube](https://www.youtube.com/watch?v=UgObFBJXs1o){:target="_blank"}
{: .text-center}

</div>
