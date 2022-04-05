import React from "react";

const Form = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="firstname">First name</label>
        <input type="text" id="firstname" on />
      </div>
      <div>
        <label htmlFor="lastname">Last name </label>
        <input type="text" id="lastname" />
      </div>
      <div>
        <label htmlFor="phonenumber">Phone number</label>
        <input type="tel" id="phonenumber" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message"></textarea>
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select id="role">
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
          <option value="Student">Other</option>
        </select>
      </div>
      <button>SEND</button>
    </form>
  );
};

export default Form;
