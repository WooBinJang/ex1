import React from "react";
import "./Video.css";
const Video = ({ onVideoClick, display, videoItem }) => {
  const container = "container";
  const displayClass = display === "rowlist" ? "list-h" : "list-v";
  return (
    <li className={`${container} ${displayClass}`}>
      <div
        className="video"
        onClick={() => {
          onVideoClick(videoItem);
        }}
      >
        <img
          className="thumbanail"
          src={videoItem.snippet.thumbnails.medium.url}
          alt="video thumbanail"
        />
        <div className="titledate">
          <p className="title"></p>
          <p className="channelTitle">{videoItem.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default Video;
