import React from "react";
import "../Styles/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweetBox */}
      <TweetBox />
      {/* posts */}
      <Post
        text="Suno jor se duniya valon... I am a Damon fangirl 😍"
        image="https://img.bumppy.com/bumppy/2018/08/8.-10-Quotes-by-the-Famous-Vampire-Damon-Salvatore-that-Refresh-Your-TVD-Days..jpg"
      />
      <Post
        image="https://31.media.tumblr.com/026142e534378d2b4e63462e527564af/tumblr_mui8mvatkw1qacuhyo1_500.gif"
        text="👅"
      />
      <Post
        text="You are next 🙈"
        image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
      />

      <Post />
      <Post />
    </div>
  );
}

export default Feed;
