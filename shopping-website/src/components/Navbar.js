import React from "react";
import {
  FaTruck,
  FaUndo,
  FaGift,
  FaDownload,
  FaMapMarkerAlt,
  FaQuestionCircle,
} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left-section">
        <span className="nav-item">
          <FaTruck />
          <span className="nav-text">Free Shipping</span>
        </span>
        <span className="nav-item">
          <FaUndo />
          <span className="nav-text">Return to Store</span>
        </span>
        <span className="nav-item">
          <FaGift />
          <span className="nav-text">Online Gift Card</span>
        </span>
      </div>
      <div className="right-section">
        <span className="nav-item">
          <FaDownload />
          <span className="nav-text">Download Our App</span>
        </span>
        <span className="nav-item">
          <FaMapMarkerAlt />
          <span className="nav-text">Store Locator</span>
        </span>
        <span className="nav-item">
          <FaQuestionCircle />
          <span className="nav-text">Help</span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
