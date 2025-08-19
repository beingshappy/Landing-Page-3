import React from 'react'

const ContactUs = () => {
  return (
    <>
      <section
        className="get-in-touch"
        style={{ backgroundImage: `url("https://www.maacindia.com/assets/hero-CD0fR3gq.jpeg")` }}
      >
        <div className="touch-content">
          <h1>GET IN TOUCH</h1>
          <p>
            Interested to join MAAC? FILL THE FORM
            <br />
            We will get in touch with you for course and admission related details.
          </p>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side */}
          <div className="contact-left">
            <h2>Get in Touch to Get Ahead</h2>
            <p>
              You're one step away from turning passion into a profession - reach
              us today.
            </p>
            <div className="contact-image-wrapper">
              <img
                src="https://www.maacindia.com/images/home/young-learners-with-laptop.jpg" // Replace with your image URL
                alt="Students"
              />
            </div>
          </div>

          <div className="contact-form">
            <form>
              <label>Full Name *</label>
              <input type="text" placeholder="Full Name" />

              <label>Mobile Number *</label>
              <input type="text" placeholder="Mobile Number" />

              <label>Email *</label>
              <input type="email" placeholder="Email" />

              <label>Select Course Interested In *</label>
              <select>
                <option>Select Course</option>
                <option>Animation</option>
                <option>VFX</option>
              </select>

              <label>Select State *</label>
              <select>
                <option>Select State</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
              </select>

              <label>Select Centre *</label>
              <select>
                <option>Select Centre</option>
                <option>Centre 1</option>
                <option>Centre 2</option>
              </select>

              <p className="privacy-text">
                By clicking on Submit, you agree to our{" "}
                <a href="#">Privacy Policy</a>
              </p>
              <button type="submit">Get in Touch</button>
            </form>
          </div>
        </div>
      </section>

      <section className="job-section">
        <div className="job-container">
          {/* Left Content */}
          <div className="job-content">
            <h2>
              Job Opportunities At <span>MAAC</span>
            </h2>
            <p>
              MAAC believes in recruiting friendly, committed competent, dynamic,
              and well-versed faculty at its centre. It is only a team of great
              staff including faculty and counsellors who can make students
              job-ready.
            </p>
            <p>
              Want to be a part of the MAAC team? Please email your resume at{" "}
              <a href="mailto:careers@aptech.ac.in">careers@aptech.ac.in</a> by
              mentioning the <strong>‘Position Applied for’</strong> in the email
              subject line.
            </p>
          </div>

          {/* Right Image */}
          <div className="job-image">
            <img src="https://www.maacindia.com/assets/c2-BQWfVNTU.png" alt="Job Opportunities" />
          </div>
        </div>
      </section>

      <section className="care-section">
        <div className="care-container">
          {/* Left image with blocks */}
          <div className="care-image">
            <div className="block block-red"></div>
            <div className="block block-yellow"></div>
            <div className="block block-maroon"></div>
            <img src="https://www.maacindia.com/assets/c4-BFvv2eru.png" alt="Customer Care" />
          </div>

          {/* Right content */}
          <div className="care-content">
            <h2>Customer care</h2>
            <p>
              Contact our customer care representative in case of
              complaints/grievances.
            </p>
            <hr />
            <a href="#">Submit Your Complaint</a>
            <p>
              We’ll review your complaint/grievance and work with you to resolve
              the issue at the earliest.
            </p>
            <hr />
            <a href="#">Profanity Policy</a>
          </div>
        </div>
      </section>

      <section className="centre-section">
        {/* Left Content */}
        <div className="centre-content">
          <h2>
            Find a <span>MAAC Centre</span> Near You
          </h2>
          <p>
            With over <span>130+ center</span> across India, there’s always a MAAC
            center closer than you think. Step into a world of creativity and
            career opportunities near you.
          </p>
          <button className="locate-btn">Locate Now</button>
        </div>

        {/* Right Image */}
        <div className="centre-image-wrapper">
          <div className="yellow-block"></div>
          <div className="red-block"></div>
          <img src="https://www.maacindia.com/assets/c1-wJo5ZzXc.png" alt="MAAC Centre" className="centre-img" />
        </div>
      </section>

      <section className="franchisee">
        <div className="franchisee-left">
          <img src="https://www.maacindia.com/assets/c3-BDG773mq.png" alt="Franchisee Opportunity" />
        </div>

        <div className="franchisee-right">
          <h2>Become A Franchisee</h2>
          <p>Looking for a franchisee opportunity with MAAC?</p>
          <hr />
          <p>You can also call us at</p>
          <a href="tel:18002096222" className="phone">
            1-800-209-6222 (Toll Free)
          </a>
          <p>Mon - Sat</p>
          <span className="time">10 AM - 8 PM</span>
          <p>
            Fill the form and our Franchising Manager will get in touch with you.
          </p>
        </div>
      </section>
      <footer className="footer-info">
        <p>
          Maya Academy of Advanced Cinematics Registered Office Address: Aptech
          House, A-65, MIDC, Marol, Andheri (E), Mumbai - 400093 Maharashtra,
          India, Tel: <a href="tel:02268282300">022-68282300</a>
        </p>
      </footer>

    </>
  )
}

export default ContactUs
