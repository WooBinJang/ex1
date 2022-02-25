import { useEffect, useState } from "react";
import SearchBar from "./components/searchbar/SearchBar";
import VideoList from "./components/videolist/VideoList";

function App() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems, setVideoItems] = useState([]);

  const search = (searchValueTxt) => {
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
      <VideoList videoItems={videoItems} />
    </div>
  );
}

export default App;
