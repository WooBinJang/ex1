import { useEffect, useState } from "react";
import SearchBar from "./components/searchbar/SearchBar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function App({ youtube }) {
  const [videoItems, setVideoItems] = useState([]);
  const [selectView, setSelectView] = useState(null);

  const selectVideo = (video) => {
    setSelectView(video); // 비디오가 받아 지면  selectView 업데이트
  };

  const search = (searchValueTxt) => {
    setSelectView(null);
    youtube
      .searchResult(searchValueTxt)
      .then((videos) => setVideoItems(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((video) => setVideoItems(video));
  }, []);
  return (
    <div className="App">
      <SearchBar searchResult={search} />
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
    </div>
  );
}

export default App;
