---
layout: post
modalID: modalTrafficSignClassification
permalink: /:categories/:slug/
main_title: Traffic Sign Classification
start_date: 2018-08-29
end_date:   2018-09-10
thumb_image_url: assets/post_assets/udacity-traffic-sign-classification/images/compressed/sample_signs.png
images:
  - {
    url: "assets/post_assets/udacity-traffic-sign-classification/images/compressed/unsample_signs.png",
    caption: "A sample of the dataset. This has shown me that there are more than one image of the same sign and prompted me to shuffle the results before visualisation, to make sure a diverse enough sample is available.",
    id: "unsample_signs"
  }
  - {
    url: "assets/post_assets/udacity-traffic-sign-classification/images/compressed/sample_signs.png",
    caption: "A shuffle sample of the dataset.",
    id: "sample_signs"
  }
  - {
    url: "assets/post_assets/udacity-traffic-sign-classification/images/compressed/my_signs.png",
    caption: "The signs I found online, used to validate the network",
    id: "my_signs"
  }
category: projects
project_title: "Traffic Sign Classification"
thumb_text: German Traffic Sign Classification
tech:
  - Deep Learning
  - Computer Vision
  - TensorFlow
  - Python
  - Numpy
size: small

---

<div class="post-content-markdown">

The project aimed to introduce TensorFlow and Deep Learning to those new to it.
Given a dataset of German traffic signs, we had to train a classifier them with at least 93% accuracy.

At this point I want to immediately mention the [writeup for this project](https://github.com/LinasKo/CarND-Advanced-Lane-Lines/blob/master/writeup.md). If you wish to find out what I've done in more depth, feel free to have a look.

## Data

We were given a set of 50000 images, depicting 43 different classes of German traffic signs, with each image of size 32x32.

I have performed initial data analysis by visualising the dataset and making sure it's varied enough.

## Methods

I found that the LeNet architecture shown to us during the lectures and the first one I attempted for this task, provided good results already. The only addition I made was changing the weight initialization metjod to Xavier-Glorot. The architecture was as follows:

| Layer             |     Description                   |
|:---------------------:|:---------------------------------------------:|
| Input             | 32x32x3 RGB image                 |
| Convolution 5x5, k=6  | 1x1 stride, same padding, outputs 28x28x6   |
| RELU          |                       |
| Max pooling         | 2x2 stride, outputs 14x14x6             |
| Convolution 5x5, k=16 | 1x1 stride, same padding, outputs 10x10x16  |
| RELU          |                       |
| Max pooling         | 2x2 stride, outputs 5x5x6             |
| Fully connected       | 120 hidden units                |
| RELU          |                       |
| Fully connected       | 84 hidden units               |
| RELU          |                       |
| Fully connected       | 43 hidden units               |
| Softmax       |                               |
{:.md-table}

## Results

On my first run of the network, I have managed to achieve the desired accuracy and happily decided to dedicate the time saved to the next project. 😊

<br>

Code Repository: [GitHub](https://github.com/LinasKo/CarND-Traffic-Sign-Classifier-Project){:target="_blank"}
{: .text-center}

Main Notebook: [Jupyter](https://github.com/LinasKo/CarND-Traffic-Sign-Classifier-Project/blob/master/notebooks/Traffic_Sign_Classifier.ipynb){:target="_blank"}
{: .text-center}

Writeup: [writeup.md](https://github.com/LinasKo/CarND-Traffic-Sign-Classifier-Project/blob/master/writeup.md){:target="_blank"}
{: .text-center}

</div>
