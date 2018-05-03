---
layout: post
modalID: modalForgetYouTubeNot
permalink: /:categories/:slug/
main_title:  Forget YouTube Not
start_date:   2018-06-01
end_date:     2018-06-02
thumb_image_url: assets/test_post/images/1-submarine.png
images:
  - {url: assets/test_post/images/1-submarine.png, caption: "Placeholder image.", id: 1-submarine}
  - {url: assets/test_post/images/1-submarine.png, caption: "Placeholder image.", id: 1-submarine}
  - {url: assets/test_post/images/1-submarine.png, caption: "Placeholder image.", id: 1-submarine}
category: projects
project_title: "A YouTube polling server for detecting deleted videos"
thumb_text: A daily poll of given YouTube playlists, detecting which videos were deleted
tech:
  - pythonanywhere
  - Python
  - Firebase
  - MySQL
  - crontab
size: extra-small

---

YouTube is a wonderful source of both entertaining and useful videos, as well as a diverse source of music. Compared with Spotify, YouTube lets one find many more obscure tracks composed by less known artists, as well as less known songs or covers of renowned singers (I estimate that less than 80% of the music I like could be found on Spotify). Due to this variety available, I have created playlists with more than 3000 songs, so I could access them anytime and, most importantly, have a record of both current songs and older songs that I liked in the past. However, YouTube videos tend to be deleted every now and then. I don't mind losing access to a song, but forgetting that it exists in the first place is very annoying. That's why I made this.
{: .text-left}

I have a created a server that essentially retrieves and keeps the `(url, title)` pairs of videos in playlists of mine. The server is hosted on [pythonanywhere](pythonanywhere.com) and uses `Python` as a back-end, `Firebase` to gain access to YouTube API and `MySQL` for storing the inforation. `crobntab` is used to launch the script daily.
{: .text-left}

To use the system, the user must setup a [pythonanywhere](pythonanywhere.com) account, create a database, create the table in it, get their own YouTube API key, and then specify the IDs of the playlists to be polled in a file on the server. Currently, only public playlists can be accessed, as no `OAuth` is set up. Lastly, there are currently no plans to have a front-end for the database, as for my purposes, accessing the results by SQL queries is enough.
{: .text-left}

The aim of the project was to provide me with a log of all videos in my playlists, since I don't have a better way of tracking all of my music. Furthermore, I wanted to investigate [pythonanywhere](pythonanywhere.com), which I knew abotu for 2- years now, but never had the chance to use. Moreover, this was a nice refresher of my SQL knowledge. Ultimately, the project achieved all the goals I have set for it, while also taking me less than 6h to code up from scratch, with minimum background knowledge.
{: .text-left}

Code Repository: [Gitlab](https://gitlab.com/LinasKo/forget-youtube-not)
{: .text-center}