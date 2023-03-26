import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Social from "../Social";

const Contact = () => (
  <>
    <div className="container">
      <div className="tokyo_tm_contact">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <h3>Get In Touch</h3>
            </div>
          </div>
        </div>
        <div className="contact-text">
          If you have any questions or comments, please feel free to contact me
          at email or on social media.
        </div>
        <Social />
      </div>
    </div>
  </>
);

export default Contact;
