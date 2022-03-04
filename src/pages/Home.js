import React from "react";
import "../App.css";
import MenuBar from "../components/menubar/MenuBar";
import VideoList from "../components/videolist/VideoList";

const Home = ({ selectView, videoItems, onVideoClick }) => {
  return (
    <div className="contents-wrap">
      <div className="sidebar">
        <MenuBar />
      </div>
      <div className="content">
        <div className="list">
          <VideoList
            videoItems={videoItems}
            onVideoClick={onVideoClick}
            display="collist"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
