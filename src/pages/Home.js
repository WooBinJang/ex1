import React from "react";
import "../App.css";
import MenuBar from "../components/menubar/MenuBar";
import VideoList from "../components/videolist/VideoList";
import VideoView from "../components/videoview/VideoView";

const Home = ({ selectView, videoItems, onVideoClick }) => {
  return (
    <div className="contents-wrap">
      <div className="sidebar">
        <MenuBar />
      </div>
      <div className="content">
        {selectView && (
          <div className="view">
            <VideoView video={selectView} />
          </div>
        )}
        <div className="list">
          <VideoList
            videoItems={videoItems}
            onVideoClick={onVideoClick}
            display={selectView ? "rowlist" : "collist"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
