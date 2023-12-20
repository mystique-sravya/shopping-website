import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#">RankSpecial</a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <a href="#" className="desktop-item">
              Categories
            </a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">
              Mega Menu
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_jm6KbcXlwr4CNcZXoG1jFAkbeqLK5Ia3Mw&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="row">
                  <header>Women</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Top Wear</a>
                    </li>
                    <li>
                      <a href="#">Bottom Wear</a>
                    </li>
                    <li>
                      <a href="#">Ethnic wear</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Men Wear</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Top Wear</a>
                    </li>
                    <li>
                      <a href="#">Bottom Wear</a>
                    </li>
                    <li>
                      <a href="#">Ethnic wear</a>
                    </li>
                    <li>
                      <a href="#">Sports wear</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Kids</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">Age between 1-4</a>
                    </li>
                    <li>
                      <a href="#">Age between 4-8</a>
                    </li>
                    <li>
                      <a href="#">Age between 8-12</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};

export default Header;
