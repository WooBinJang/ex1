import React from "react";
import { Link } from "react-router-dom";
import { numberComma, publishDate } from "../../common/common";
import "./Video.css";
const Video = ({ onVideoClick, display, videoItem, search }) => {
  const container = "container";
  const displayClass = display === "rowlist" ? "list-h" : "list-v";
  return (
    <li className={`${container} ${displayClass} ${search ? "search" : ""}`}>
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
          <div className="metadata">
            <div className="channelImg">
              <img
                src={videoItem.snippet.thumbnails.default.url}
                alt=" thumbanail"
                className="channekImg"
              />
            </div>

            <div className="titledate">
              <p className="title">{videoItem.snippet.title}</p>
              <p className="channelTitle">{videoItem.snippet.channelTitle}</p>
            </div>
          </div>
          <div className="metadata-bottom">
            {!search && (
              <p className="commentCount">
                댓글 {numberComma(videoItem.statistics.commentCount)}개
              </p>
            )}

            <p className="publishedAt">
              {publishDate(videoItem.snippet.publishedAt)}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Video;
