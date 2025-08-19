import React, { useRef, useState, useEffect } from "react";
import EventVideo from '../../assets/event-video.mp4';
import { FaBookOpen, FaTrophy, FaGlobe, FaBriefcase } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const images = [
  "https://www.maacindia.com/assets/event7-5645Mfh4.webp",
  "https://www.maacindia.com/assets/event2-4yX8DEth.webp",
  "https://www.maacindia.com/assets/event6-U_KxfnT6.webp",
  "https://www.maacindia.com/assets/event5-AdwNrKP8.webp",
  "https://www.maacindia.com/assets/event8-BGVNoDix.webp",
  "https://www.maacindia.com/assets/event4-B-D6l-1K.webp",
];

const images1 = [
  {
    src: "https://www.maacindia.com/assets/w1-J5S6gKIS.png",
    caption: "Work in a realistic studio environment and build confidence."
  },
  {
    src: "https://www.maacindia.com/assets/w2-DQQpUyhk.png",
    caption: "Learn directly from top animation, VFX & gaming professionals."
  },
  {
    src: "https://www.maacindia.com/assets/w3-k2N17y0i.png",
    caption: "Gain hands-on experience with industry-grade tools & tech."
  },
  {
    src: "https://www.maacindia.com/assets/w1-J5S6gKIS.png",
    caption: "Work in a realistic studio environment and build confidence."
  },
  {
    src: "https://www.maacindia.com/assets/w2-DQQpUyhk.png",
    caption: "Learn directly from top animation, VFX & gaming professionals."
  },
  {
    src: "https://www.maacindia.com/assets/w3-k2N17y0i.png",
    caption: "Gain hands-on experience with industry-grade tools & tech."
  }
];

const Events = () => {

  const doubledImages = [...images, ...images];

  const items = [
    "Animation, VFX and multimedia students - both MAAC students and others.",
    "Studios and industry professionals, from India and overseas.",
    "Anyone with talent and passion for animation, gaming, VFX, web & graphic designing and media and entertainment."
  ];

  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollEl = scrollRef.current;
      const scrollProgress =
        scrollEl.scrollLeft / (scrollEl.scrollWidth - scrollEl.clientWidth);
      setProgress(scrollProgress * 100);
    };

    const scrollEl = scrollRef.current;
    scrollEl.addEventListener("scroll", handleScroll);

    return () => {
      scrollEl.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Progress bar for "What's in It for You?" section
  const whatsScrollRef = useRef(null);
  const [whatsProgress, setWhatsProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = whatsScrollRef.current;
      if (!el) return;
      const percent = (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
      setWhatsProgress(percent);
    };
    const el = whatsScrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <section className="event-hero">
        {/* Background video */}
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={EventVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>

        <div className="events-content">
          <h1>MAAC EVENTS!</h1>
          <p>
            At MAAC, our dedicated team works tirelessly throughout the year to
            organize exciting events across various locations, bringing together
            students, alumni, and faculty.
          </p>
        </div>
      </section>



      <div className="filmstrip-wrapper">
        <div className="scroll-track">
          {doubledImages.map((src, index) => (
            <div key={index} className="frame">
              <img src={src} alt={`Event ${index + 1}`} />

            </div>

          ))}

        </div>
      </div>

      <section className="why-attend">
        <div className="why-left">
          <h2>Why Attend MAAC Events?</h2>
          <p>
            At MAAC, we don't just teach - we transform careers. Whether you aspire
            to be an animator, VFX artist, game designer, filmmaker, or digital
            creator, we equip you with the skills, tools, and global opportunities
            to succeed.
          </p>
        </div>

        <div className="why-right">
          <div className="card-e">
            <FaBookOpen className="icon" />
            <h3>Hands-on Learning</h3>
            <p>
              Gain industry insights through live projects, competitions, and
              expert-led sessions.
            </p>
          </div>
          <div className="card-e">
            <FaTrophy className="icon" />
            <h3>Showcase Your Talent</h3>
            <p>
              Participate in national-level competitions and get recognized for
              your skills.
            </p>
          </div>
          <div className="card-e">
            <FaGlobe className="icon" />
            <h3>Network with the Best</h3>
            <p>
              Connect with professionals from top studios and production houses.
            </p>
          </div>
          <div className="card-e">
            <FaBriefcase className="icon" />
            <h3>Get Job-Ready</h3>
            <p>
              Gain practical knowledge and mentorship to build a successful career
              in the industry.
            </p>
          </div>
        </div>
      </section>

      <section className="event-section2">
        <div className="event-content2">
          <h2 className="event-title2">
            Signature MAAC Events You Can Be a Part Of!
          </h2>
          <hr className="event-divider" />

          <div className="event-info">
            <div className="event-left">
              <img
                src="https://www.maacindia.com/assets/i1-C_JjXJnR.png"
                alt="24FPS Logo"
                className="event-logo"
              />
              <h3>100 Hours – The Ultimate Creative Marathon</h3>
              <p>
                Push your limits! Create a 3D-animated short film or a 1-minute mobile film in just 100 hours! Work non-stop, collaborate with teammates, and experience the thrill of filmmaking under real-world deadlines.
              </p>
              <button className="read-more-btn">Read More</button>
            </div>

            <div className="event-right">
              <div className="image-wrapper1">
                <img src="https://www.maacindia.com/assets/h2-RcpduVkv.png" alt="Event" />
                <div className="hover-arrow">
                  <FaArrowRight />
                </div>
              </div>
            </div>

          </div>
        </div>
        <hr className="event-divider" />
        {/* //2nd part */}
        {/* <hr className="event-divider" /> */}

        <div className="event-info">
          <div className="event-left">
            <img
              src="https://www.maacindia.com/assets/i2-O6d3j8ch.png"
              alt="24FPS Logo"
              className="event-logo"
            />
            <h3>24FPS International Animation Awards</h3>
            <p>
              A globally recognized event where students compete with the best
              in the animation and VFX industry. This is your chance to impress
              industry leaders and make a mark in the creative world!
            </p>
            <button className="read-more-btn">Read More</button>
          </div>

          <div className="event-right">
            <div className="image-wrapper1">
              <img src="https://www.maacindia.com/assets/h1-DFHTRenr.png" alt="Event" />
              <div className="hover-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>

        </div>
        <hr className="event-divider" />
        {/* //3nd part */}
        <div className="event-info">
          <div className="event-left">
            <img
              src="https://www.maacindia.com/assets/i3-DnRzLaST.png"
              alt="24FPS Logo"
              className="event-logo"
            />
            <h3>MAAC Manifest</h3>
            <p>
              We celebrate YOU! MAAC Manifest is where we honor our students and alumni for their outstanding contributions to the animation and VFX industry. Get recognized for your talent and be inspired by industry leaders!
            </p>
            <button className="read-more-btn">Read More</button>
          </div>

          <div className="event-right">
            <div className="image-wrapper1">
              <img src="https://www.maacindia.com/assets/h3-DqeVJqmR.png" alt="Event" />
              <div className="hover-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>

        </div>
        <hr className="event-divider" />
        {/* //4nd part */}
        <div className="event-info">
          <div className="event-left">
            <img
              src="https://www.maacindia.com/assets/i4-2wSQ6rQ_.png"
              alt="24FPS Logo"
              className="event-logo"
            />
            <h3>National Students' Meet (NSM)</h3>
            <p>
              A dream event for every MAAC student! Meet like-minded artists from across India, participate in creative workshops, panel discussions, and exclusive hands-on training sessions with industry pros.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>

          <div className="event-right">
            <div className="image-wrapper1">
              <img src="https://www.maacindia.com/assets/h4-C86WuGj0.png" alt="Event" />
              <div className="hover-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>

        </div>
        <hr className="event-divider" />
        {/* //5th part */}
        <div className="event-info">
          <div className="event-left">
            <img
              src="https://www.maacindia.com/assets/i5-CJXQAjBh.png"
              alt="24FPS Logo"
              className="event-logo"
            />
            <h3>MAAC Creative League (MCL)</h3>
            <p>
              Compete in one of the most exciting design and animation challenges at MAAC! Unleash your creativity, showcase your talent, and win exciting prizes as you go head-to-head with the best in the field.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>

          <div className="event-right">
            <div className="image-wrapper1">
              <img src="https://www.maacindia.com/assets/h5-BbUzpcaw.png" alt="Event" />
              <div className="hover-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>

        </div>
        <hr className="event-divider" />
        {/* //6th part */}
        <div className="event-info">
          <div className="event-left">
            <img
              src="https://www.maacindia.com/assets/i6-BBFYZ5Xv.png"
              alt="24FPS Logo"
              className="event-logo"
            />
            <h3>MAAC Klick – Nature & Wildlife Photography Expeditions</h3>
            <p>
              Step outside the classroom and capture breathtaking moments! Travel to stunning locations like Coorg, Ranthambore, and Sariska National Park, and learn the art of professional photography in real-world environments.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>

          <div className="event-right">
            <div className="image-wrapper1">
              <img src="https://www.maacindia.com/assets/h6-Ci8oUjVw.png" alt="Event" />
              <div className="hover-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>

        </div>
      </section >

      <section className="attend-events">

        <div className="heading">
          <h2 className="title">Who Can Attend MAAC Events?</h2>
          <p className="subtitle">
            The different events at MAAC cater to different audience types. Some of them include:
          </p>
        </div>

        <div className="attend-list">
          {items.map((text, index) => (
            <div className="attend-item" key={index}>
              <div className="attend-number">{index + 1}</div>
              <div className="attend-text">{text}</div>
              <div className="attend-icon">
                <FaCheck />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="whats-section">
        <div className="whats-left">
          <h2>What's in It for You?</h2>
          <p>Your Creative Journey Starts Here</p>
          <button className="join-btn">Join Now</button>
        </div>

        <div className="whats-right">
          <div className="image-scroll" ref={scrollRef}>
            {images1.map((img, index) => (
              <div className="image-card" key={index}>
                <img src={img.src} alt={`Slide ${index + 1}`} />
                <p>{img.caption}</p>
              </div>
            ))}
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </section>

 
    </>
  )
}

export default Events
