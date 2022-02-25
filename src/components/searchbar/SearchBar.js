import React, { useRef } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const inputRef = useRef();

  const serachFnc = () => {
    const value = inputRef.current.value;
    props.searchResult(value);
  };

  const inputClick = () => {
    serachFnc();
  };

  const inputEnter = (e) => {
    if (e.key === "Enter") {
      serachFnc();
    }
  };
  return (
    <div className="searchArea">
      <div className="logoarea">
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
      </div>
      <div className="topMenuArea">
        <button className="gridMenuBtn">
          <img src="/images/gridmenuicon.png" alt="topmenu button" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
