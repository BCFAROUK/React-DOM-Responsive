import React from "react";
import "../../compenents/contact/contact.css";

const Contact = () => {
  return (
    <div className="container-contact">
      <div className="contact-form">
        <h1>Contact us!</h1>

        <input type="text" placeholder="First Name" />

        <input type="text" placeholder="Last Name" />

        <input type="email" placeholder="your@email.com" required />

        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          className="form-message"
        ></textarea>

        <button>
          {" "}
          <i className="fa fa-paper-plane "> SEND </i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
