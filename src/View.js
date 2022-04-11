import React from "react";

const View = (props) => {
  return (
    <section>
      <h2>This is your input:</h2>
      <div className="view">
        <div className="line">
          <p>First name:</p>
          <p>{props.firstname}</p>
        </div>
        <div className="line">
          <p>Last name:</p>
          <p>{props.lastname}</p>
        </div>
        <div className="line">
          <p>Phone number:</p>
          <p>{props.phone}</p>
        </div>
        <div className="line">
          <p>Message</p>
          <p>{props.message}</p>
        </div>
        <div className="line">
          <p>Role:</p>
          <p>{props.role}</p>
        </div>
      </div>
    </section>
  );
};

export default View;
