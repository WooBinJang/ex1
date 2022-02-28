import { useEffect, useState } from "react";
import SearchBar from "./components/searchbar/SearchBar";
import VideoList from "./components/videolist/VideoList";
import VideoView from "./components/videoview/VideoView";
import "./App.css";

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems, setVideoItems] = useState([]);
  const [selectView, setSelectView] = useState(null);
  const selectVideo = (video) => {
    setSelectView(video); // 비디오가 받아 지면  selectView 업데이트
  };
  const search = (searchValueTxt) => {
    setSelectView(null);
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchValueTxt}&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideoItems(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideoItems(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="App">
      <SearchBar searchResult={search} />

      <div className="content">
        {selectView && (
          <div className="view">
            <VideoView video={selectView} />
          </div>
        )}
        <div className="list">
          <VideoList
            videoItems={videoItems}
            onVideoClick={selectVideo}
            display={selectView ? "rowlist" : "collist"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
