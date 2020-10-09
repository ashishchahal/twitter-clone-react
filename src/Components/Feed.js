import React from "react";
import "../Styles/Feed.css";
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
    </div>
  );
}

export default Feed;
