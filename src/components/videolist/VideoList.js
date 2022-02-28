import React from "react";
import Video from "../video/Video";
import "./VideoList.css";

const VideoList = (props) => {
  return (
    <ul className="videolist">
      {props.videoItems.map((videoItem) => (
        <Video
          videoItem={videoItem}
          key={videoItem.etag}
          onVideoClick={props.onVideoClick}
          display={props.display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
