---
layout: post
modalID: karpathyPong
permalink: /:categories/:slug/
main_title: Policy Gradient learning for Atari Pong
start_date:   2016-01-15
category: projects
project_title: "A trial run of A. Karpathy's Policy Gradient learning for Atari Pong"
thumb_text: "A trial run of Policy Gradient learning for Atari Pong, created by Andrej Karpathy."
tech:
  - Python
  - Numpy
size: trivial

---

In 2013 Andrej Karpathy provided a description of Policy Gradient learning for Atari Pong in his blog. I have studied the approach, coded my version of it in TensorFlow and attempted to apply it to the [Cart Pole problem] in AI Gym, with little success. The moving average of the reward just fluctuated back and forth in a regular, sine wave-like patten, not making any gains beyond a certain point, way below the goal. From this standpoint, this project serves the purpose of letting me see a working reinforcement learning project in action. I want to see the reward change, I want to observe the gradual convergence or the lack of it, I want to understand how long it will take to converge with the basic methods.
{: .text-left}

Furthermore, we have a deep learning reading group at work, for which we will be doing group projects. As an intro to Reinforced Learning to our group, we have decided to use this example. I am therefore also running it as a way to show basic results to the team, and keep up the motivation. 
{: .text-left}
