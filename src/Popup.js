import React from "react";

const Popup = (props) => {
  const closePopupHandler = () => {};
  return (
    <div className="popup_body hidden">
      <div className="popup_box">
        <button className="popup_button" onClick={closePopupHandler}>
          x
        </button>
        <h3>Your inputs:</h3>
        <div className="info">
          <div>
            <p>First name:</p>
            <p></p>
          </div>
          <div>
            <p>Last name:</p>
            <p></p>
          </div>
          <div>
            <p>Phone number:</p>
            <p></p>
          </div>
          <div>
            <p>Role:</p>
            <p></p>
          </div>
          <div>
            <p>Message</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
