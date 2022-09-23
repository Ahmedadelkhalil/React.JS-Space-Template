import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <div>
          <label>Your Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" />
        </div>
        <div>
          <label>Details</label>
          <textarea rows="6" placeholder="Type a short message here ..." />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
