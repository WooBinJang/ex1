import React from "react";
import "../App.css";
import VideoList from "../components/videolist/VideoList";
import VideoView from "../components/videoview/VideoView";

const Watch = ({ selectView, videoItems, onVideoClick }) => {
  return (
    <div className="content">
      <div className="view">
        <VideoView video={selectView} />
      </div>
      <div className="list">
        <VideoList
          videoItems={videoItems}
          onVideoClick={onVideoClick}
          display="rowlist"
        />
      </div>
    </div>
  );
};

export default Watch;
