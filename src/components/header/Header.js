import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <nav className="header">
      <div className="header-image-and-title-container">
        <img className="header-yc-image" src="https://news.ycombinator.com/y18.svg"></img>
        <span className="header-title">Hacker News</span>
      </div>
      <div className="header-links-container">
        <NavLink to="/" activeclassname="active" className="header-link">
          Top Stories
        </NavLink>{" "}
        &nbsp;|
        <NavLink to="/best" activeclassname="active" className="header-link">
          Best Stories
        </NavLink>
        &nbsp;|
        <NavLink to="/new" activeclassname="active" className="header-link">
          New Stories
        </NavLink>
        &nbsp;|
        <NavLink to="/jobs" activeclassname="active" className="header-link">
          Jobs
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
