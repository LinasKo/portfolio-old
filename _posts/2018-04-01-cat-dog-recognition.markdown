---
layout: post
modalID: modalCatDogRecognition
permalink: /:categories/:slug/
main_title:  Cat / Dog Recognition
start_date:   2018-04-01
thumb_image_url: assets/cat-dog-recognition/images/cat.0.jpg
images:
  - {url: assets/cat-dog-recognition/images/test_image_dog.jpg, caption: "An example of a dog from the dataset.", id: dog-example}
  - {url: assets/cat-dog-recognition/images/error.png, caption: "Error plot, when running the 64x64 input size CNN.", id: error-plot}
  - {url: assets/cat-dog-recognition/images/accuracy.png, caption: "Accuracy plot, when running the 64x64 input size CNN.", id: accuracy-plot}
  - {url: assets/cat-dog-recognition/images/cat_obscure.jpg, caption: "An example of a slightly obscure example of a cat in the dataset.", id: cat-obscure}
  - {url: assets/cat-dog-recognition/images/cat.0.jpg, caption: "A picture of my cat, from a small test set that I made for myself.", id: mundis}
  - {url: assets/cat-dog-recognition/images/cat_9171_outlier.jpg, caption: "One of the 3 outliers I found in the given dataset. This is labeled as a cat.", id: outlier-picture}
category: projects
project_title: "GPU-trained Convolutional Neural Network for distinguishing cats from dogs"
thumb_text: A CNN network for distinguishing cats from dogs, inspired by a Kaggle competition
tech:
  - Python
  - Keras
  - Matplotlib
  - Linux
  - Mendeley
size: medium

---

### Previous Work
After finishing my degree in Edinburgh I have continued my studies of Deep Learning on my own in several ways:
{: .text-left}
* I've refreshed my memory of the basics by writing a simple deep neural network in python for classifying MNIST. I'm not 100\% correctness of it right now, so some testing and a writeup is due.
* I've audited a Deep Learning course on Kadenze, learning more about Deep Dream and gaining an intuition of Variational Autoencoders, GANs, RNNs and implementation of Deep Dream.
* I've taken part in a Deep Learning study group at work, revising DNNs, CNNs, learning more about RNNs, Keras, GANs, RL.
* I've attempted to deliberately implement the simplest possible Reinforcement Learning network for the simplest problem I could find, with hopes of gauging the complexity, run time, and generally getting an impression for what RL is. Well, apparently, when Policy Gradient Learning is applied to the CartPole problem, at some point, the resulting score just starts oscillating, without further training. With my self-imposed constraint of not using Q-Learning or Actor-Critic methods, this becomes a fairly interesting problem that I put on hold. Having finished this Cat-Dog recognition project, I think this CartPole Policy Gradient is what I'm now going to return to.
* With the previous RL attempt not producing good results, I wanted to see some Reinforcement Learning in action. I have therefore run Andrej Karpathy's network for a week to see how well it could do in Atari Pong. [Project Link](/portfolio/projects/karpathy-pong/){:target="_blank"}
{: .text-left}

### Project
Now, at some point I realized that since I no longer have access to my university's cluster of servers and only have a 5 year old GPU, I can't really use a large dataset or a complicated network to train my models. Therefore, with a fair bit of help from my dad I have set up a deep learning environment on a server back home in Lithuania.
{: .text-left}

Next, I have decided to try out `Keras`, as I'm already familiar to Python. There have been a few obstacles along the way, mostly involving a memory leak in older version of `Keras` libraries, crashing my training sessions. However, I've now fully completed my goal - I feel like I can use both `Keras` and  `TensorFlow` frameworks equally well and understand the key differences between them.
{: .text-left}

Then what I needed to figure out was how one needs to set up their networks such that the GPU would be used fully. Initially, when training with a very simple CNN I observed that GPU would get around 100% loaded for a moment, but would spend 10x more time idle. Ultimately, significantly deepening the network, increasing the number of CNN filters and increasing the batch size helped.
{: .text-left}

Then for this project I have looked through a handful of papers to better understand how to shape my deep CNN. I've also looked into means of how differently sized images are typically preprocessed, reading on Sparse Networks, but ultimately deciding to just resize to the size I wanted, without regard to the aspect ratio. This is one area to improve in my network.
However, I carried out an analysis on image sizes in the dataset to understand what size of images values would be needed to morph the data the least. I plotted a histogram of image sizes, checked out the median in heights and widths, and even managed to find 3 outliers! For more, check the [Notebook](https://gitlab.com/LinasKo/kaggle-dog-cat-classification/blob/master/notebooks/data_exploration.ipynb){:target="_blank"}.
{: .text-left}

Additionally, I've invested a lot of time in developing a metrics recording suite which I'll hopefully reuse for other projects. Currently it involves accuracy and loss plotting for training and validation, an easy-to-use runtime tracker, recording off the most important hyperparameters, saving of the final model and the best model, plotting of model schema, extracting the summary and plotting results after each epoch as CSV.
{: .text-left}

I am planning to continue working on this project, and here are [my notes for the next step](https://gitlab.com/LinasKo/kaggle-dog-cat-classification/blob/master/results/2018-05-16%2000:05:04%20-%2064x64_deep_cnn/notes.md){:target="_blank"}. Between actually planning my projects, I still need to decide on the format to present them. Currently, even if the website streamlines it a bit, I still feel that it's too erratic.
{: .text-left}

Lastly, it might be worth mentioning my discoveries while working on the project:
{: .text-left}
* [Mendeley](https://www.mendeley.com){:target="_blank"} - They have a desktop app that's fantastic for annotating research papers
*  and [Cookie Cutter Data Science](https://drivendata.github.io/cookiecutter-data-science/){:target="_blank"} -  A very convenient way to structure your deep learning projects.
{: .text-left}

Code Repository: [GitLab](https://gitlab.com/LinasKo/kaggle-dog-cat-classification){:target="_blank"}
{: .text-center}
