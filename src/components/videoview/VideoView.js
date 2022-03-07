import React from "react";
import "./VideoView.css";

const VideoView = ({ video }) => {
  return (
    <div className="viewbox">
      <div className="playVideoBox">
        <iframe
          title="비디오플레이어"
          type="text/html"
          className="videoframe"
          src={`http://www.youtube.com/embed/${video.id}`}
        ></iframe>
      </div>
      <div className="txtcontainer">
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <p className="videoview-des">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoView;
