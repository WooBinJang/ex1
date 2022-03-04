import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";
const Video = ({ onVideoClick, display, videoItem }) => {
  const container = "container";
  const displayClass = display === "rowlist" ? "list-h" : "list-v";
  return (
    <li className={`${container} ${displayClass}`}>
      <Link to="/watch">
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
      </Link>
    </li>
  );
};

export default Video;
