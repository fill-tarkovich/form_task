import React from "react";

const Popup = (props) => {
  return (
    <div className="popup_body">
      <div className="popup_box">
        <button className="popup_button" onClick={props.submit}>
          x
        </button>
        <h3>Your inputs:</h3>
        <div className="info">
          <div>
            <p>First name:</p>
            <p>{props.firstname}</p>
          </div>
          <div>
            <p>Last name:</p>
            <p>{props.lastname}</p>
          </div>
          <div>
            <p>Phone number:</p>
            <p>{props.phone}</p>
          </div>
          <div>
            <p>Role:</p>
            <p>{props.role}</p>
          </div>
          <div>
            <p>Message:</p>
            <p>{props.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
