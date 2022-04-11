import React from "react";

const Form = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          onChange={props.change}
        />
      </div>
      <div>
        <label htmlFor="lastname">Last name </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          onChange={props.change}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input type="tel" name="phone" id="phone" onChange={props.change} />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" onChange={props.change} />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" onChange={props.change} required>
          <option>Select...</option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button onClick={props.submit}>SEND</button>
    </form>
  );
};

export default Form;
