// import React from 'react'
import swVideo from '../../assets/sw-video.mp4';
import React, { useRef, useState, useEffect } from "react";

const students = [
  { name: "ANJALI KASHYAP", image: "https://www.maacindia.com/assets/p1-mNhqltyk.png", link: "#" },
  { name: "CHHANDOSI MUKHERJEE", image: "https://www.maacindia.com/assets/p5-UatRb7S-.png", link: "#" },
  { name: "ASHAD KHAN", image: "https://www.maacindia.com/assets/p2-BsRJKy8Y.png", link: "#" },
  { name: "DEEPAK KUMAR", image: "https://www.maacindia.com/assets/d1-gyeyxUR4.jpeg", link: "#" },
  { name: "RANJIT DAS", image: "https://www.maacindia.com/assets/diff2-liBLIOEu.png", link: "#" },
  { name: "SURESH KUMAR", image: "https://www.maacindia.com/assets/diff4-C6V1YDqJ.png", link: "#" },
  { name: "SIPRA DAS", image: "https://www.maacindia.com/assets/diff3-CiKGGp4s.png", link: "#" },
];

const images = [
  "https://www.maacindia.com/assets/g10-BL2yc4G8.png",
  "https://www.maacindia.com/assets/g6-CSyPrN2t.png",
  "https://www.maacindia.com/assets/g14-BEGiB8Cb.png",
  "https://www.maacindia.com/assets/g7-CNIVCBF2.png",
];

const successData = [
  {
    img: "https://www.maacindia.com/assets/q1-ho1nf5Dj.png",
    text: "I completed the Compositing & Editing Plus course at MAAC Koramangala online and got placed as a 3D Matte Painting Artist at Technicolor, thanks to their excellent teaching and placement support!",
    name: "Jishnu D Rajan",
    subtext: "Pursued Compositing and Editing Plus course from MAAC"
  },
  {
    img: "https://www.maacindia.com/assets/q2-BQjBr6mA.png",
    text: "I have completed my Graphic Designing course from MAAC Koramangala and have been successfully placed at WarpII as a Graphic Designer. I am very happy and satisfied with the quality of training and learning provided at MAAC.",
    name: "Stuti Verma",
    subtext: "Graphic Design student at MAAC"
  },
  {
    img: "https://www.maacindia.com/assets/q3-D1ylFMI0.png",
    text: "I completed the ADVFX Plus course at MAAC Kanpur and now work as an FX Crowd TD at NYVFXWAALA, contributing to films like Sooryavanshi and Gangubai Kathiawadi.",
    name: "Sriyansh Gupta",
    subtext: "Worked on films"
  },
  {
    img: "https://www.maacindia.com/assets/q4-mUJP8w2B.png",
    text: "I completed the ADVFX Plus course at MAAC Kanpur and now work as an FX Crowd TD at NYVFXWAALA, contributing to films like Sooryavanshi and Gangubai Kathiawadi.",
    name: "Srijaya Gupta",
    subtext: "Worked on films"
  },
  {
    img: "https://www.maacindia.com/assets/q1-ho1nf5Dj.png",
    text: "I completed the ADVFX Plus course at MAAC Kanpur and now work as an FX Crowd TD at NYVFXWAALA, contributing to films like Sooryavanshi and Gangubai Kathiawadi.",
    name: "Sriyansh Gupta",
    subtext: "Worked on films"
  }
];

const alumniData = [
  {
    name: "MANIT KUMAR",
    field: "3D ANIMATION ARTIST",
    salary: "9.9 LPA",
    company: "SUNDEEP GROUPS",
    image: "https://www.maacindia.com/images/home/bigLeague/manit-kumar.jpg",
  },
  {
    name: "PREETHI S",
    field: "3D ANIMATION ARTIST",
    salary: "8.5 LPA",
    company: "LIGHT AND WONDER",
    image: "https://www.maacindia.com/images/home/bigLeague/ritika-singh.jpg",
  },
  {
    name: "SHIVAM GUJRAN",
    field: "3D ANIMATION ARTIST",
    salary: "6.6 LPA",
    company: "OPENCV ORG",
    image: "https://www.maacindia.com/images/home/bigLeague/shivam-gujran.jpg",
  },
  {
    name: 'PREETHIS S',
    role: '3D ANIMATION ARTIST',
    salary: '8.50 L.p.A',
    company: 'LIGHT AND WONDER',
    image: "https://www.maacindia.com/images/home/bigLeague/gazala-yasmin.jpg", // Replace with actual image path
  },

  {
    name: 'Sarza Loha',
    role: '3D ANIMATION ARTIST',
    salary: '8 L.p.A',
    company: 'Tech World',
    image: "https://www.maacindia.com/images/home/bigLeague/manit-kumar.jpg", // Replace with actual image path
  },
];

const data = [
  {
    id: 1,
    img: "https://www.maacindia.com/assets/d1-BFafQLPq.jpeg",
    text: "Movies like Avatar: The Way of Water, Doctor Strange, and The Lion King have all been brought to life with stunning VFX work done by Indian studios"
  },
  {
    id: 2,
    img: "https://www.maacindia.com/assets/d2-D_QzWoq-.jpeg",
    text: "Automobile giants like BMW, Tesla, and Mercedes use 3D animation to design, test, and market their latest car models before they hit the roads."
  },
  {
    id: 3,
    img: "https://www.maacindia.com/assets/d3-sroLGb1l.jpeg",
    text: "Medical professionals use 3D animation to practice complex surgeries, helping them save lives with precision and confidence."
  },
  {
    id: 4,
    img: "https://www.maacindia.com/assets/d1-BFafQLPq.jpeg",
    text: "Movies like Avatar: The Way of Water, Doctor Strange, and The Lion King have all been brought to life with stunning VFX work done by Indian studios"
  },
  {
    id: 5,
    img: "https://www.maacindia.com/assets/d2-D_QzWoq-.jpeg",
    text: "Automobile giants like BMW, Tesla, and Mercedes use 3D animation to design, test, and market their latest car models before they hit the roads."
  },
  {
    id: 6,
    img: "https://www.maacindia.com/assets/d3-sroLGb1l.jpeg",
    text: "Medical professionals use 3D animation to practice complex surgeries, helping them save lives with precision and confidence."
  }
];

const StudentsWorld = () => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Update slider as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      const scrollPercent =
        (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
      setProgress(scrollPercent);
    };
    const currentRef = scrollRef.current;
    currentRef.addEventListener("scroll", handleScroll);
    return () => currentRef.removeEventListener("scroll", handleScroll);
  }, []);

  // Slider controls scroll
  const handleSliderChange = (value) => {
    const el = scrollRef.current;
    const newScrollLeft =
      (value / 100) * (el.scrollWidth - el.clientWidth);
    el.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    setProgress(value);
  };
  //............start section........
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevIndex =
    (currentIndex - 1 + images.length) % images.length;
  const nextIndex =
    (currentIndex + 1) % images.length;

  const successScrollRef = useRef(null);

  const handleScroll = (e) => {
    const container = successScrollRef.current;
    const scrollPercentage =
      (container.scrollLeft / (container.scrollWidth - container.clientWidth)) * 100;
    document.getElementById("scrollTracker").value = scrollPercentage;
  };

  const handleTrackerChange = (e) => {
    const container = scrollRef.current;
    const newScrollLeft =
      ((container.scrollWidth - container.clientWidth) * e.target.value) / 100;
    container.scrollLeft = newScrollLeft;
  };

  const alumniScrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const scrollToIndex = (index) => {
    const scrollAmount = alumniScrollRef.current.clientWidth * index;
    alumniScrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    setActiveDot(index);
  };

  const handleScroll1 = () => {
    const index = Math.round(
      alumniScrollRef.current.scrollLeft / alumniScrollRef.current.clientWidth
    );
    setActiveDot(index);
  };
  const studentScrollRef = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = studentScrollRef.current;
      const percent =
        (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
      setScrollPercent(percent);
    };

    const el = scrollRef.current;
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollbarChange = (e) => {
    const el = studentScrollRef.current;
    const percent = e.target.value;
    el.scrollLeft = (percent / 100) * (el.scrollWidth - el.clientWidth);
  };

  const didYouKnowScrollRef = useRef(null);
  const [didYouKnowPercent, setDidYouKnowPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = didYouKnowScrollRef.current;
      const percent = (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
      setDidYouKnowPercent(percent);
    };
    const el = didYouKnowScrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleDidYouKnowScrollbarChange = (e) => {
    const el = didYouKnowScrollRef.current;
    const percent = e.target.value;
    el.scrollLeft = (percent / 100) * (el.scrollWidth - el.clientWidth);
    setDidYouKnowPercent(percent);
  };

  return (
    <>
      <section className="cct-section">
        {/* Background video */}
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={swVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="cct-overlay">
          <div className="cct-content">
            <h1>
              CREATE, CONNECT & THRIVE
            </h1>
            <h2>
              <span className="highlight">AT MAAC</span>
            </h2>
            <p>
              Your journey to the Media & Entertainment industry starts here.
              At MAAC, you don't just learn – you create, connect, and thrive
              in a world full of possibilities.
            </p>
          </div>
        </div>
      </section>

      <section className="life-at-maac">
        <h2 className="title">Life At MAAC</h2>

        <div className="life-container">
          {/* Left Column */}
          <div className="left-column">
            <div className="card1">
              <img src="https://www.maacindia.com/assets/lam1-B7mr2opA.png" alt="Train with Industry Experts" />
              <div className="card-text">
                <h3>Train with Industry Experts & In-Demand Software.</h3>
                <p>Master the tools and techniques used by top studios, guided by industry pros.</p>
              </div>
            </div>

            <div className="card1">
              <img src="https://www.maacindia.com/assets/lam3-B6ljU-jE.png" alt="Industry Masterclasses" />
              <div className="card-text">
                <h3>Industry Masterclasses</h3>
                <p>Learn from top experts and gain real-world insights.</p>
              </div>
            </div>

            <div className="card1">
              <img src="https://www.maacindia.com/assets/lam5-DuLmuqNw.jpeg" alt="Fun Activities" />
              <div className="card-text">
                <h3>Fun Activities & Celebrations</h3>
                <p>Engage in cultural events, competitions, and celebrations.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <div className="card1">
              <img src="https://www.maacindia.com/assets/lam2-CVg__8jO.jpeg" alt="Student Competitions" />
              <div className="card-text">
                <h3>Student Competitions & Challenges</h3>
                <p>Showcase your skills and shine with award-winning projects.</p>
              </div>
            </div>

            <div className="card1">
              <img src="https://www.maacindia.com/assets/lam4-CeD1kcmQ.jpeg" alt="Workshops & Seminars" />
              <div className="card-text">
                <h3>Workshops & Seminars</h3>
                <p>Stay ahead with hands-on training in the latest tools & techniques.</p>
              </div>
            </div>

            <div className="card1">
              <img src="https://www.maacindia.com/assets/lam6-ClSgKL1o.jpeg" alt="Networking Events" />
              <div className="card-text">
                <h3>Networking Events</h3>
                <p>Meet industry leaders and build your professional network.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="life-container1">
          <div className="card1">
            <img src="https://www.maacindia.com/assets/lam1-B7mr2opA.png" alt="Train with Industry Experts" />
            <div className="card-text">
              <h3>Train with Industry Experts & In-Demand Software.</h3>
              <p>Master the tools and techniques used by top studios, guided by industry pros.</p>
            </div>
          </div>

          <div className="card1">
            <img src="https://www.maacindia.com/assets/lam3-B6ljU-jE.png" alt="Industry Masterclasses" />
            <div className="card-text">
              <h3>Industry Masterclasses</h3>
              <p>Learn from top experts and gain real-world insights.</p>
            </div>
          </div>

          <div className="card1">
            <img src="https://www.maacindia.com/assets/lam5-DuLmuqNw.jpeg" alt="Fun Activities" />
            <div className="card-text">
              <h3>Fun Activities & Celebrations</h3>
              <p>Engage in cultural events, competitions, and celebrations.</p>
            </div>
          </div>

          <div className="card1">
            <img src="https://www.maacindia.com/assets/lam2-CVg__8jO.jpeg" alt="Student Competitions" />
            <div className="card-text">
              <h3>Student Competitions & Challenges</h3>
              <p>Showcase your skills and shine with award-winning projects.</p>
            </div>
          </div>

          <div className="card1">
            <img src="https://www.maacindia.com/assets/lam4-CeD1kcmQ.jpeg" alt="Workshops & Seminars" />
            <div className="card-text">
              <h3>Workshops & Seminars</h3>
              <p>Stay ahead with hands-on training in the latest tools & techniques.</p>
            </div>
          </div>

          <div className="card1">
            <img src="https://www.maacindia.com/assets/lam6-ClSgKL1o.jpeg" alt="Networking Events" />
            <div className="card-text">
              <h3>Networking Events</h3>
              <p>Meet industry leaders and build your professional network.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="students-work-section">
        <div className="header-text">
          <div className="header">
            <h2>MAAC Students' Work</h2>
            <p>
              Creativity speaks louder than words. See how MAAC students are raising
              the bar with projects that blend skill, vision, and real-world training.
            </p>
          </div>
          <div className="magic-btn">
            <button >See Magic in Action</button>
          </div>
        </div>

        <div className="cards-container" ref={scrollRef}>
          {students.map((student, idx) => (
            <div className="card" key={idx}>
              <img src={student.image} alt={student.name} />
              <div className="card-footer">
                <span>{student.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Styled Slider */}
        <div className="slider-wrapper">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => handleSliderChange(Number(e.target.value))}
            className="custom-slider"
          />
        </div>
      </section>
      <section className="maac-life-section">
        <h2 className="slider-title">A Glimpse into the MAAC Life</h2>
        <div className="slider-container1">
          {/* Left Preview */}
          <div className="side-image">
            <img src={images[prevIndex]} alt="Previous" />
            <button className="arrow-btn left" onClick={handlePrev}>
              &#8592;
            </button>
          </div>

          {/* Main Image */}
          <div className="main-image">
            <img src={images[currentIndex]} alt="Main" />
          </div>

          {/* Right Preview */}
          <div className="side-image">
            <img src={images[nextIndex]} alt="Next" />
            <button className="arrow-btn right" onClick={handleNext}>
              &#8594;
            </button>
          </div>
        </div>
      </section>

      <div className="success-stories">
        <h2 className="title">Real Stories. Real Impact</h2>
        <p className="subtitle">
          Every student's journey at MAAC is a story of growth, discovery, and transformation
        </p>
        <p className="subtitle-small">
          Hear directly from those who've walked this path and turned their dreams into reality
        </p>

        <div
          className="cards-container1"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {successData.map((item, index) => (
            <div className="story-card" key={index}>
              <img src={item.img} alt={item.name} className="avatar" />
              <p className="story-text">❝ {item.text} ❞</p>
              <h3 className="story-name">{item.name}</h3>
              <p className="story-subtext">{item.subtext}</p>
            </div>
          ))}
        </div>

        <input
          type="range"
          id="scrollTracker"
          className="scroll-bar"
          min="0"
          max="100"
          step="1"
          defaultValue="0"
          onChange={handleTrackerChange}
        />

      </div>
      <div className="alumni-section">
        <div className="alumni-content">
          <div className="alumni-text">
            <h1>From MAAC to the Big Leagues</h1>
            <p>
              MAAC alumni are making waves in top gaming studios, production houses,
              and VFX giants – and you could be next.
            </p>
            <button>Meet the Game-Changers</button>
          </div>

          <div className="alumni-scroll" ref={scrollRef}>
            {alumniData.map((person, index) => (
              <div className="alumni-card" key={index}>
                <img src={person.image} alt={person.name} />
                <div className="alumni-info">
                  <h3>{person.name}</h3>
                  <p>Field: {person.field}</p>
                  <p>Salary: {person.salary}</p>
                  <p>Company: {person.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-dots">
          {alumniData.map((_, index) => (
            <span
              key={index}
              className={activeDot === index ? "dot active" : "dot"}
              onClick={() => scrollToIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <section className="did-you-know">
        <h2>Did You Know?</h2>
        <div className="cards-container2" ref={didYouKnowScrollRef}>
          {data.map((item) => (
            <div key={item.id} className="card2">
              <div className="image-wrapper">
                <img src={item.img} alt="" />
              </div>
              <div className="card-number">{item.id}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="scrollbar-wrapper">
          <input
            type="range"
            className="custom-scrollbar"
            min="0"
            max="100"
            value={didYouKnowPercent}
            onChange={handleDidYouKnowScrollbarChange}
          />
        </div>
      </section>

      <section className="hero-section2">
        <div className="hero-content2">
          <h1>
            Wish to join the AVGC industry and build a creative career?
          </h1>
          <button>Enquire Now</button>
        </div>
      </section>




    </>
  )
}

export default StudentsWorld
