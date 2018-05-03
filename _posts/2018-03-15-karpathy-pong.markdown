---
layout: post
modalID: karpathyPong
permalink: /:categories/:slug/
main_title: Policy Gradient learning for Atari Pong
start_date:   2016-01-15
thumb_image_url: assets/karpathy-pong/images/trained-pong.gif
images:
  - {url: assets/karpathy-pong/images/trained-pong.gif, caption: "The visualisation of the Atari Pong game being played during training. For simplicity, the agent (right) can move up or down, but not sit idle.", id: game-visualisation}
  - {url: assets/karpathy-pong/images/live-training-reports-slack.png, caption: "Live reporting of the run, on Slack. I've hacked up a very simple bot, allowing to post and update messages directly from the training script.", id: live-training-reports-slack}
  - {url: assets/karpathy-pong/images/pong-training.png, caption: "The outputs seen as the neural network is being trained. 1 is given for a scored point and -1 for every point the default AI scored. In total, 21 points are scored in one epoch.", id: pong-training}
category: projects
project_title: "A trial run of A. Karpathy's Policy Gradient learning for Atari Pong"
thumb_text: "A trial run of Policy Gradient learning for Atari Pong, created by Andrej Karpathy."
tech:
  - Python
  - Numpy
size: extra-small

---

In 2013 Andrej Karpathy described a Policy Gradient learning algorithm in his blog, that can be used to train an agent to play Pong. I have previously studied the approach, coded my version of it in TensorFlow and attempted to apply it to the Cart Pole problem in AI Gym, with little success. The moving average of the reward just fluctuated back and forth in a regular, sine wave-like patten.
{: .text-left}

I have decided to perform a training run of Karpathy's Policy Gradient training to observe the results it gives. This also gives an idea for how long simple Reinforcement Learning  methods take, and how large the fluctuations in results are. Ultimately, I wanted to see Reinforcement Learning in action.
{: .text-left}

I ran the training code irregularly on my laptop, leaving it to train while I was at work. The training was run for approximately 16 days, reaching epoch 27065. Each epoch consists of one game, which is played until 21 points are scored, cumulatively, by both sides. Each point for the agent increases its reward by 1.0 and each point scored by the default AI decreases the agent's reward by 1.0. After training for the given duration, the agent obtains an average of -1.96 points (running average over approximately 1500 games). This means that the agent became almost as good as the default AI.
{: .text-left}

Now that I have completed this project, I am planning to go bac to some of my earlier Deep Learning priojects - Cat / Dog recognition with Convolutional Neural Networks, Cart Pole learning with Policy Gradients or a group project of our deep learning study group ----- to be continued



Furthermore, we have a deep learning reading group at work, for which we will be doing group projects. As an intro to Reinforced Learning to our group, we have decided to use this example. I am therefore also running it as a way to show basic results to the team, and keep up the motivation.
{: .text-left}
