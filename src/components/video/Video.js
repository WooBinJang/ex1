import React from "react";
import "./Video.css";
const Video = (props) => {
  const container = "container";
  const displayClass = props.display === "rowlist" ? "list-h" : "list-v";
  return (
    <li className={`${container} ${displayClass}`}>
      <div
        className="video"
        onClick={() => {
          props.onVideoClick(props.videoItem);
        }}
      >
        <img
          className="thumbanail"
          src={props.videoItem.snippet.thumbnails.medium.url}
          alt="video thumbanail"
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
