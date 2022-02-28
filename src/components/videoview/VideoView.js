import React from "react";
import "./VideoView.css";

const VideoView = (props) => {
  return (
    <div className="viewbox">
      <div className="playVideoBox">
        <iframe
          title="비디오플레이어"
          type="text/html"
          className="videoframe"
          src={`http://www.youtube.com/embed/${props.video.id}`}
        ></iframe>
      </div>
      <div className="txtcontainer">
        <h2>{props.video.snippet.title}</h2>
        <h3>{props.video.snippet.channelTitle}</h3>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoView;
