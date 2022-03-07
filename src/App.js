import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import SearchBar from "./components/searchbar/SearchBar";

let defaultVideos = JSON.parse(sessionStorage.getItem("defaultVideos")) || null;
let selectedWatch = JSON.parse(sessionStorage.getItem("selectedWatch")) || null;

function App({ youtube }) {
  const [videoItems, setVideoItems] = useState([]);
  const [selectView, setSelectView] = useState(null);

  const selectVideo = (video) => {
    setSelectView(video); // 비디오가 받아 지면  selectView 업데이트
    selectedWatch = video;
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => {
      setVideoItems(videos);
      defaultVideos = videos;
    });
  }, []);

  const clickLogo = () => {
    setVideoItems(defaultVideos);
  };

  useEffect(() => {
    sessionStorage.setItem("defaultVideos", JSON.stringify(defaultVideos));
    sessionStorage.setItem("selectedWatch", JSON.stringify(selectedWatch));
  }, [videoItems, selectView]);

  const search = (searchValueTxt) => {
    setSelectView(null);
    youtube
      .searchResult(searchValueTxt)
      .then((videos) => setVideoItems(videos));
  };

  return (
    <div className="App">
      <SearchBar searchResult={search} clickLogo={clickLogo} />
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
              selectedWatch={selectedWatch}
              selectView={selectView}
              videoItems={videoItems}
              onVideoClick={selectVideo}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
