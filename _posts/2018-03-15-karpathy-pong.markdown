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

In 2013 Andrej Karpathy provided a description of Policy Gradient learning for Atari Pong in his blog. I have studied the approach, coded my version of it in TensorFlow and attempted to apply it to the [Cart Pole problem] in AI Gym, with little success. The moving average of the reward just fluctuated back and forth in a regular, sine wave-like patten, not making any gains beyond a certain point, way below the goal. From this standpoint, this project serves the purpose of letting me see a working reinforcement learning project in action. I want to see the reward change, I want to observe the gradual convergence or the lack of it, I want to understand how long it will take to converge with the basic methods.
{: .text-left}

Furthermore, we have a deep learning reading group at work, for which we will be doing group projects. As an intro to Reinforced Learning to our group, we have decided to use this example. I am therefore also running it as a way to show basic results to the team, and keep up the motivation.
{: .text-left}
