---
layout: post
modalID: karpathyPong
permalink: /:categories/:slug/
main_title: Policy Gradient learning for Atari Pong
start_date:   2018-03-12
end_date:     2018-04-05
thumb_image_url: assets/post_assets/karpathy-pong/videos/trained-pong.gif
images:
  - {
    url: "assets/post_assets/karpathy-pong/videos/trained-pong.gif",
    caption: "The visualisation of the Atari Pong game being played during training. For simplicity, the agent (right) can move up or down, but not sit idle.",
    id: "game-visualization"
  }
  - {
    url: "assets/post_assets/karpathy-pong/images/compressed/live-training-reports-slack.png",
    caption: "Live reporting of the run, on Slack. I've hacked up a very simple bot, allowing to post and update messages directly from the training script.",
    id: "live-training-reports-slack"
  }
  - {
    url: "assets/post_assets/karpathy-pong/images/compressed/pong-training.png",
    caption: "The outputs seen as the neural network is being trained. 1 is given for a scored point and -1 for every point the default AI scored. In total, 21 points are scored in one epoch.",
    id: "pong-training"
  }
category: projects
project_title: "A trial run of A. Karpathy's Policy Gradient learning"
thumb_text: "A trial run of Policy Gradient learning for Atari Pong, created by Andrej Karpathy."
tech:
  - Reinforcement Learning
  - Slack API
  - Python
  - Numpy
size: extra-small

---

<div class="post-content-markdown">

In 2013 Andrej Karpathy provided a description of Policy Gradient learning for Atari Pong in his blog. I have studied the approach, coded up my version of it in TensorFlow and attempted to apply it to the Cart Pole problem in AI Gym, with little success. The moving average of the reward just fluctuated back and forth in a regular, sine wave-like patten, not making any gains beyond a certain point, way below the goal. From this standpoint, this project serves the purpose of letting me see a working reinforcement learning project in action. I want to see the reward change, I want to observe the gradual convergence or the lack of it, I want to understand how long it will take to converge with the basic methods. Therefore, I have decided to perform a training run of Karpathy's Policy Gradient training to observe the results it gives.
{: .text-left}

I ran the training code irregularly on my laptop, leaving it to train while I was at work. The training was run for approximately 16 days, reaching epoch 27065. Each epoch consists of one game, which is played until 21 points are scored, cumulatively, by both sides. Each point for the agent increases its reward by 1.0 and each point scored by the default AI decreases the agent's reward by 1.0. After training for the given duration, the agent obtains an average of -1.96 points (running average over approximately 1500 games). This means that the agent became almost as good as the default AI.
{: .text-left}

Now that I have completed this project, I am planning to go back to some of my earlier Deep Learning projects - Cat / Dog recognition with Convolutional Neural Networks or Cart Pole learning with Policy Gradients.
{: .text-left}

Furthermore, we have a deep learning reading group at work, for which we will be doing group projects. Karpathy's Atari learning was used as the first starting example from which we are planning to build up out knowledge. There are multiple paths to pursue from this point and the work done here will hopefully help us decide on the next steps.
{: .text-left}

Original post in [Andrej Karpathy blog](http://karpathy.github.io/2016/05/31/rl/){:target="_blank"}
{: .text-center}

</div>
