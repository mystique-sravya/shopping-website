import React from "react";

import "../styles/ShopByDegree.css";

function ShopByDegree() {
  return (
    <div className="shop-by-degree">
      <h2>Shop by Degree</h2>
      <hr className="style" />
      <div className="cards-container">
        <div className="collection-card">
          <img
            src="https://res.cloudinary.com/dzcrtuhn5/image/upload/v1703006361/summer_h7vok7.jpg"
            alt="Summer Collection"
          />
          <p>Summer Collection</p>
        </div>
        <div className="collection-card">
          <img
            src="https://res.cloudinary.com/dzcrtuhn5/image/upload/v1703006361/rainy_ukvbkh.jpg"
            alt="Summer Collection"
          />
          <p>Rainy Collection</p>
        </div>
        <div className="collection-card">
          <img
            src="https://res.cloudinary.com/dzcrtuhn5/image/upload/v1703006361/winter_ucceey.jpg"
            alt="Summer Collection"
          />
          <p>Winter Collection</p>
        </div>
        <div className="collection-card">
          <img
            src="https://res.cloudinary.com/dzcrtuhn5/image/upload/v1703006360/heavy-winter_dfurlv.jpg"
            alt="Summer Collection"
          />
          <p>Heavy Winter Collection</p>
        </div>
      </div>
    </div>
  );
}

export default ShopByDegree;
