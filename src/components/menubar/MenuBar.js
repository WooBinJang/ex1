import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div className="menubar-area">
      <Link to="/">
        <button className="menu-btn">
          <i className="fa-solid fa-house"></i>홈
        </button>
      </Link>
      <Link to="/">
        <button className="menu-btn">
          <i className="fa-solid fa-fire"></i>인기
        </button>
      </Link>
      <Link to="/">
        <button className="menu-btn">
          <i className="fa-solid fa-globe"></i>탐색
        </button>
      </Link>
      <Link to="/">
        <button className="menu-btn">
          <i className="fa-brands fa-youtube"></i>구독
        </button>
      </Link>
      <Link to="/">
        <button className="menu-btn">
          <i className="fa-solid fa-box"></i>보관함
        </button>
      </Link>
    </div>
  );
};

export default MenuBar;
