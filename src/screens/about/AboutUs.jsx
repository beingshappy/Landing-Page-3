
import { FaPlay } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";



const AboutUs = () => {

  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update slider when user scrolls
  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const progress = (scrollContainer.scrollLeft / scrollWidth) * 100;
    setScrollProgress(progress);
  };

  // Scroll when slider is moved
  const handleSliderChange = (e) => {
    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    const newScrollLeft = (e.target.value / 100) * scrollWidth;
    scrollContainer.scrollLeft = newScrollLeft;
  };

  useEffect(() => {
    const container = scrollRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section
        className="about-section"
        style={{ backgroundImage: `url('https://www.maacindia.com/assets/whyMaacHeroBg-Ct-T1ILO.jfif')` }}
      >
        <div className="about-overlay">
          <h2>
            ABOUT <br /><span className="highlight">MAYA ACADEMY</span> <br />
            OF ADVANCED CREATIVITY
          </h2>
          <p>
            A Legacy of Excellence in Media & Entertainment Education
          </p>
        </div>
      </section>
      <section className="about-maac">
        <div className="about-text">
          <p>
            Maya Academy of Advanced Creativity (MAAC) is the{" "}
            <span className="highlight">Media & Entertainment</span> education brand of Aptech Ltd.,
            a global leader in education and training since{" "}
            <span className="highlight">1986</span>.
          </p>
          <p>
            With <span className="highlight">38+ years</span> of expertise, Aptech has shaped millions of
            careers across industries. MAAC continues this legacy, offering world-class Animation,
            VFX, Gaming, Filmmaking, and Digital Media training designed to meet industry demands.
          </p>
        </div>

        <div className="about-video">
          <img src="https://www.maacindia.com/assets/about-CX-0M8xa.png" alt="MAAC Video" />
          <div className="play-button">
            <FaPlay />
          </div>
        </div>
      </section>

      <div className="maac-section">
        <h2 className="maac-title">What Makes MAAC Different?</h2>
        <p className="maac-subtitle">
          At MAAC, we don't just teach – we transform careers. Whether you aspire to be an animator,
          VFX artist, game designer, filmmaker, or digital creator, we equip you with the skills,
          tools, and global opportunities to succeed.
        </p>

        {/* Scrollable content */}
        <div className="scroll-container1" ref={scrollRef}>
          <div className="maac-card">
            <img
              src="https://www.maacindia.com/assets/md2-CKp6_oXS.png"
              alt="MAAC Event"
              className="maac-image"
            />
            <div className="maac-content">
              <h3>Hands-on, Project-Based Learning</h3>
              <p>
                Gain real-world experience by working on industry-driven projects, short films, game
                assets, and VFX sequences, preparing you for professional challenges.
              </p>
            </div>


          </div>

          {/* Duplicate to show horizontal scroll works */}
          <div className="maac-card">
            <img
              src="https://www.maacindia.com/assets/md1-CyPaJWlD.png"
              alt="MAAC Event"
              className="maac-image"
            />
            <div className="maac-content">
              <h3>More Opportunities</h3>
              <p>
                Participate in global competitions, interact with industry leaders, and gain exposure
                that will set you apart in the creative world.
              </p>
            </div>
          </div>
          <div className="maac-card">
            <img
              src="https://www.maacindia.com/assets/md3-BdEVT_rN.png"
              alt="MAAC Event"
              className="maac-image"
            />
            <div className="maac-content">
              <h3>Expert-Led Training</h3>
              <p>
                Learn from top professionals, VFX supervisors, animators, and game designers who bring years of industry expertise into the classroom, giving you insider knowledge and career-ready skills.
              </p>
            </div>
          </div>

          <div className="maac-card">
            <img
              src="https://www.maacindia.com/assets/md4-DwmjHoAI.jpeg"
              alt="MAAC Event"
              className="maac-image"
            />
            <div className="maac-content">
              <h3>Placement Assistance</h3>
              <p>
                On successfully completing individual courses and getting access to placement support, portfolio-building guidance, mock interviews, and more.
              </p>
            </div>
          </div>

        </div>

        <p className="maac-disclaimer">
          *Disclaimer: Placement assistance is subject to the candidate’s performance, eligibility,
          and industry requirements.
        </p>

        {/* Yellow square slider */}
        <input
          type="range"
          className="scroll-slider"
          min="0"
          max="100"
          value={scrollProgress}
          onChange={handleSliderChange}
        />
      </div>

      <section className="legacy-section">
        <div className="legacy-content">
          <h2>Be a Part of the MAAC Legacy</h2>
          <p>
            With thousands of successful alumni working in top studios like MPC,
            Prime Focus, Technicolor, DNEG, Ubisoft, and more, your journey to an
            exciting career in AVGC starts here!
          </p>
          <h3>Are you ready to create magic?</h3>
          <button>Explore Our Courses</button>
        </div>

        <div className="legacy-image">
          <img src="https://www.maacindia.com/assets/legacy-Ci69GnN4.png" alt="Handshake illustration" />
        </div>
      </section>
      <section className="virtual-tour">
        <div className="tour-content">
          <h2>Experience MAAC: Virtual Tour</h2>
          <p className="subtitle">Can’t visit in person?</p>
          <p className="description">
            Explore our classrooms, labs, and student workspaces in an interactive 360° virtual tour.
          </p>
        </div>
        <div className="tour-image">
          <img src="https://www.maacindia.com/assets/virtual-BFh5Ip40.png" alt="MAAC Virtual Tour" />
          <div className="play-button">
            <span>▶</span>
          </div>
        </div>
      </section>

      <section
        className="franchise-section"
        style={{ backgroundImage: `url('https://www.maacindia.com/assets/bg-img-BH25ilh2.jfif')` }}
      >
        <div className="overlay3">
          <div className="franchise-content">
            <h1>
              <span className="highlight">Dream Big, Lead Bigger:</span> Build Your MAAC Centre
            </h1>
            <p className="subtitle">
              Start your own MAAC Centre with expert support in operations, branding, and training.
              Join India's leading AVGC education brand and shape the future of creative learning.
            </p>
            <p className="tagline">
              Shape the future of creative education – start your MAAC journey today!
            </p>
            <button className="cta-btn">Become a MAAC Franchise</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
