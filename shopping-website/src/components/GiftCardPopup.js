import React from 'react';
import '../styles/GiftCardPopup.css';

function GiftCardPopup({ onClose }) {
  return (
    <div className="gift-card-popup">
      <div className="popup-content">
        <p>Gift Card Availed!</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default GiftCardPopup;
