import React from "react";

const View = (props) => {
  return (
    <section>
      <h2>This is your input:</h2>
      <div className="view">
        <div className="line">
          <p>First name</p>
        </div>
        <div className="line">
          <p>Last name</p>
          <p></p>
        </div>
        <div className="line">
          <p>Phone number</p>
          <p></p>
        </div>
        <div className="line">
          <p>Message</p>
          <p></p>
        </div>
        <div className="line">
          <p>Role</p>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default View;
