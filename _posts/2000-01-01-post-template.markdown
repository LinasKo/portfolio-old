---
layout: post
modalID: modalTemplate
permalink: /:categories/:slug/
main_title: Post Template
start_date: 1999-12-30
end_date:   2000-01-01
thumb_image_url: assets/test_post/images/1-submarine.png
images:
  - {url: assets/test_post/images/1-submarine.png, caption: "", id: test-image-1}
  - {url: assets/test_post/images/1-submarine.png, caption: "", id: test-image-2}
  - {url: assets/test_post/images/1-submarine.png, caption: "", id: test-image-3}
  - {url: assets/test_post/images/1-submarine.png, caption: "", id: test-image-4}
  - {url: assets/test_post/images/1-submarine.png, caption: "", id: test-image-5}
  - {url: assets/test_post/images/1-submarine.png, caption: "", id: test-image-6}
category: projects
project_title: "Project Template"
thumb_text: A project template to be reused
tech:
  - Jekyll
size: extra-small
collaborators:
  - Person 1
unlisted: true

---

<div class="post-content-markdown">

## Introduction

<details><summary><h2>HEADING1</h2>
  <p>DESCRIPTION1</p>
</summary>

### Goals
### Implementation
### Obstacles
### Results

</details>

## Afterthoughts and Further Plans

| Layer         		|     Description	        					|
|:---------------------:|:---------------------------------------------:|
| Input         		| 32x32x3 RGB image   							|
| Convolution 5x5, k=6  | 1x1 stride, same padding, outputs 28x28x6 	|
| RELU					|												|
| Max pooling	      	| 2x2 stride, outputs 14x14x6 				    |
| Convolution 5x5, k=16 | 1x1 stride, same padding, outputs 10x10x16 	|
| RELU					|												|
| Max pooling	      	| 2x2 stride, outputs 5x5x6 				    |
| Fully connected       | 120 hidden units								|
| RELU					|												|
| Fully connected       | 84 hidden units								|
| RELU					|												|
| Fully connected       | 43 hidden units								|
| Softmax				|             									|
{:.md-table}

text left
{: .text-left}

text center
{: .text-center}

<br>

Code Repository: [GitLab](https://gitlab.com/LinasKo){:target="_blank"}
{: .text-center}

</div>
