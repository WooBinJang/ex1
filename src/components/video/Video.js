import React from "react";
import "./Video.css";
const Video = (props) => {
  return (
    <li className="videoContainer">
      <div className="video">
        <img
          className="thuming"
          src={props.videoItem.snippet.thumbnails.medium.url}
          alt="video thumnail"
        />
        <div className="titledate">
          <p className="title"></p>
          <p className="channelTitle">{props.videoItem.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default Video;
