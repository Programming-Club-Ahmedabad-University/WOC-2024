import React from "react";
import "./Contact_Us.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form>
          <input placeholder="Full Name" />
          <label>
            <input placeholder="E-mail" /> 
          </label>
          <label>
          <textarea placeholder="Message" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
