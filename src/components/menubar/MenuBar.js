import React from "react";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div className="menubar-area">
      <button className="menu-btn">
        <i class="fa-solid fa-house"></i>홈
      </button>
      <button className="menu-btn">
        <i class="fa-solid fa-fire"></i>인기
      </button>
      <button className="menu-btn">
        <i className="fa-solid fa-globe"></i>탐색
      </button>
      <button className="menu-btn">
        <i className="fa-brands fa-youtube"></i>구독
      </button>
      <button className="menu-btn">
        <i className="fa-solid fa-box"></i>보관함
      </button>
    </div>
  );
};

export default MenuBar;
