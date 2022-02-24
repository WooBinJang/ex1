import React from "react";

const Video = (props) => {
  return <li>{props.videoItem.snippet.channelTitle}</li>;
};

export default Video;
