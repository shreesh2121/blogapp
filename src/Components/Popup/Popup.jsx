import React, { useState } from "react";
import './Popup.css';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
      <button className="close-button" onClick={closePopup}>X</button>

        <h1>Welcome to Our Website</h1>
        <p>This is a sample popup. Click the button to close it.</p>
        <button onClick={closePopup}>Create Blog </button>
      </div>
    </div>
  );
};

export default Popup;
