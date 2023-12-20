import React from "react";
import "../styles/ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="glass-background">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <hr className="style" />

          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 @clothStore. All rights reserved.</p>
      </div>
    </div>
  );
}

export default ContactUs;
