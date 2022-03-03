import React, { useRef } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchResult }) => {
  const inputRef = useRef();

  const serachFnc = () => {
    const value = inputRef.current.value;
    searchResult(value);
  };
  //공통함수
  const inputClick = () => {
    serachFnc();
  };
  // 클릭시 함수 실행
  const inputEnter = (e) => {
    if (e.key === "Enter") {
      serachFnc();
    }
  };
  // 엔터키 입력시  함수 실행
  return (
    <div className="searchArea">
      <div className="logoarea">
        <button className="btn-leftmenu">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h1>
          <img className="logoImg" src="/images/logo.png" alt="youtube" />
        </h1>
      </div>
      <div className="searchInputArea">
        <input
          className="searchInput"
          type="search"
          placeholder="검색"
          onKeyPress={inputEnter}
          ref={inputRef}
        />
        <button className="searchBtn" onClick={inputClick}>
          <img src="/images/searchicon.png" alt="search" />
        </button>
        <button className="micbtn">
          <i className="fa-solid fa-microphone"></i>
        </button>
      </div>
      <div className="topMenuArea">
        <button className="btn-rightmenu">
          <i className="fa-solid fa-table-cells"></i>
        </button>
        <button className="btn-rightmenu">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <button className="btn-rightmenu">
          <i className="fa-solid fa-user"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
