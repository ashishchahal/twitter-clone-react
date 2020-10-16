import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "../Styles/TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="data:image/jpeg;base64,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" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional: Enter a image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
