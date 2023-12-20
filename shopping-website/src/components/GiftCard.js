import React, { useState } from "react";
import GiftCardPopup from "./GiftCardPopup";
import "../styles/GiftCard.css";

function GiftCard() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleGiftCardClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="gift-card">
      <h2>Gift Card</h2>
      <hr className="style" />
      <div className="content" onClick={handleGiftCardClick}>
        <h2>Extra 10% OFF</h2>
        <img
          src="https://res.cloudinary.com/dzcrtuhn5/image/upload/v1703006360/gift-card_xh6sek.jpg"
          alt="Gift Card"
        />
      </div>
      {showPopup && <GiftCardPopup onClose={handlePopupClose} />}
    </div>
  );
}

export default GiftCard;
