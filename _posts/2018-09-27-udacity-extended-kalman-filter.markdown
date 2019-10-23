---
layout: post
modalID: modalExtendedKalmanFilter
permalink: /:categories/:slug/
main_title: Extended Kalman Filter
start_date: 2018-09-25
# end_date:   2018-09-27
thumb_image_url: assets/udacity-extended-kalman-filter/images/compressed/dataset_2_ekf_zoom.png
images:

  - {url: assets/udacity-extended-kalman-filter/images/compressed/dataset_2_ekf_zoom.png, caption: "A zoom-in to a moment of estimating the path in the second dataset. Red and blue circles are lidar and radar data, and the green triangles are the EKF-estimated path.", id: dataset_2_ekf_zoom}

  - {url: assets/udacity-extended-kalman-filter/images/compressed/dataset_1.png, caption: "The first dataset, without EKF path estimation. Red and blue circles are lidar and radar data.", id: dataset_1}

  - {url: assets/udacity-extended-kalman-filter/images/compressed/dataset_2_ekf.png, caption: "The second dataset with EKF path estimations. Red and blue circles are lidar and radar data, and the green triangles are the EKF-estimated path.", id: dataset_2_ekf}

category: projects
project_title: "Extended Kalman Filter for position estimation"
thumb_text: Extended Kalman Filter for position estimation
tech:
  - Computer Vision
  - C++
  - Eigen
size: small

---

<div class="post-content-markdown">

The project required to estimate the position of a moving object given noisy Lidar and Radar measurements. It was a part of the Self-Driving Car Engineer Nanodegree in Udacity.

This was a fill-in-the-gaps style task, with a part of the C++ code already given. The tasks involved such tasks as filling in the Jacobian calculation functions, converting from Cartesian to Polar coordinates and allocating the necessary data structures.

Ultimately, I managed to obtain the results that were expected.

<br>

Code Repository: [GitHub](https://github.com/LinasKo/CarND-Extended-Kalman-Filter-Project){:target="_blank"}
{: .text-center}

</div>
