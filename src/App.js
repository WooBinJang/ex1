import { useEffect, useState } from "react";

import SearchBar from "./components/searchbar/SearchBar";
import VideoList from "./components/videolist/VideoList";
import VideoView from "./components/videoview/VideoView";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

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
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${searchValueTxt}&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then(
        (result) =>
          result.items.map((item) => ({ ...item, id: item.id.videoId }))
        // { ...item, id: item.id.videoId } => item 객체를 풀어 id라는 키값에  item.id.videoId 값 덮어씌우기
      )
      .then((items) => {
        setVideoItems(items);
        console.log(items);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&type=video&chart=mostPopular&maxResults=30&regionCode=KR&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideoItems(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="App">
      <SearchBar searchResult={search} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectView={selectView}
                videoItems={videoItems}
                onVideoClick={selectVideo}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                selectView={selectView}
                videoItems={videoItems}
                onVideoClick={selectVideo}
              />
            }
          />
          <Route
            path="/watch"
            element={
              <Watch
                selectView={selectView}
                videoItems={videoItems}
                onVideoClick={selectVideo}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
