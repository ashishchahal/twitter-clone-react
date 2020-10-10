import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import "../Styles/Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1314836882405031936"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ReheSamay"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/ashish"}
          options={{ text: "#this is awesome", via: "AshishGajan" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
