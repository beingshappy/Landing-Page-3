import React from "react";
import { IoMdClose } from "react-icons/io";

const EnquireForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-icon1" onClick={onClose}>
          <IoMdClose />
        </button>

        <h2 className="modal-title">STUDENT ENQUIRY</h2>
        <p className="modal-text">
          Reach out to us today and take the first step toward your creative journey with MAAC.
        </p>

        <div className="form-row">
          <input type="text" placeholder="Full Name *" />
          <input type="text" placeholder="Phone Number *" />
        </div>

        <div className="form-row">
          <input type="email" placeholder="Email *" />
          <select defaultValue="">
            <option value="" disabled>Select Course</option>
          </select>
        </div>

        <div className="form-row">
          <select defaultValue="">
            <option value="" disabled>Select State</option>
          </select>
          <select defaultValue="">
            <option value="" disabled>Select Centre</option>
          </select>
        </div>

        <p className="privacy-text">
          By clicking on Submit, you agree to our <a href="/">Privacy Policy</a>.
        </p>

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default EnquireForm;
