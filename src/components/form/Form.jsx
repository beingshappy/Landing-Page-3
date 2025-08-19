import React from 'react';
import FormImg from "../../assets/form-img.png"; // src/components/form/Form.jsx


const FormSection = () => {
  return (
    <div className="form-wrapper">
      <h1 className="form-title">Start Your MAAC Journey</h1>
      <p className="form-subtitle">
        Reach out to us today and take the first step toward your creative journey with MAAC.
      </p>

      <form className="form-grid">
        <div className="form-left">
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label>Mobile Number *</label>
            <input type="text" placeholder="Mobile Number" />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Email" />
          </div>
        </div>

        <div className="-formright">
          <div className="form-group">
            <label>Select Course Interested In *</label>
            <select>
              <option>Select Course</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select State *</label>
            <select>
              <option>Select State</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Centre *</label>
            <select>
              <option>Select Centre</option>
            </select>
          </div>
        </div>
        <div className="privacy">
          <p className="privacy-note">
            By clicking on Submit, you agree to our <a href="#">Privacy Policy</a>
          </p>

          <button className="submit-btn" type="submit">Get in Touch</button>
        </div>
        <div className="form-img">
          <img src={FormImg} alt="lo" className='form-logo' />
        </div>
      </form>
    </div>
  );
};

export default FormSection;
