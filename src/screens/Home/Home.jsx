import React, { useState, useEffect, useRef } from "react";



const mainImages = [
  'https://www.maacindia.com/assets/b8-l3CGxX3-.webp',
  'https://www.maacindia.com/assets/b7-0Ucse4Zs.webp',
  'https://www.maacindia.com/assets/b6-BN9wDz_d.webp',
  'https://www.maacindia.com/assets/b2-m1HPBPLm.webp',

];

const slidesData = [
  {
    image: 'https://www.maacindia.com/assets/b7-0Ucse4Zs.webp',
    heading: 'Students projects will guide and inspire',
    content: 'MAACs animation training powers yet another blockbuster',
  },
  {
    image: 'https://www.maacindia.com/assets/b6-BN9wDz_d.webp',
    heading: 'Best animated frames award at the 100+ BIF',
    content: 'MAACs animation training powers yet another blockbuster',
  },
  {
    image: 'https://www.maacindia.com/assets/b9-Ddi6Y492.webp',
    heading: 'Future history can a power tool',
    content: 'MAACs animation training powers yet another blockbuster',
  },
  {
    image: 'https://www.maacindia.com/assets/b2-m1HPBPLm.webp',
    heading: 'Fueling dreams building careers',
    content: 'MAACs animation training powers yet another blockbuster',
  },

];


const cardsData = [

  {
    title: "Transformstive Educational Events",
    image: "https://www.maacindia.com/images/home/whyChooseMaac/maac-animation-training-institute-students.jpg",
    content:
      "From exclusive workshops to high-impact masterclasses, MAAC’s events empower you to hone your skills and build a portfolio that stands out in the industry.",
  },
  {
    title: "Learn from Industry Game Changers",
    image: "https://www.maacindia.com/images/home/whyChooseMaac/image2.webp",
    content:
      "From exclusive workshops to high-impact masterclasses, MAAC’s events empower you to hone your skills and build a portfolio that stands out in the industry.",
  },
  {
    title: "Exclusive Industry Exposure",
    image: "https://www.maacindia.com/images/home/whyChooseMaac/image3.webp",
    content:
      "Get unmatched opportunities to connect with industry leaders and gain real-world exposure.",
  },
  {
    title: "Placement Support",
    image: "https://www.maacindia.com/images/home/whyChooseMaac/image3.webp",
    content:
      "We guide you in creating impactful resumes, portfolios, and prepare you for interviews.",
  },
  {
    title: "Portfolio that speaks volumes",
    image: "https://www.maacindia.com/images/home/whyChooseMaac/image5.webp",
    content:
      "Showcase your creativity through an industry-ready portfolio that gets noticed.",
  },
  {
    title: "Industry-Grade Facilities",
    image: "https://www.maacindia.com/images/home/whyChooseMaac/image6.webp",
    content:
      "Learn with top-notch facilities, software, and equipment matching industry standards.",
  },
  {
    title: "Courses Build For Future",
    image: "https://www.maacindia.com/images/home/whyChooseMaac/image7.webp",
    content:
      "Our curriculum is designed to prepare you for the demands of the creative industry of tomorrow.",
  },
];

const courses = [
  {
    title: "3D Animation",
    description: "Master the art of storytelling through high-quality animation and industry-standard techniques",
    img: "https://www.maacindia.com/assets/c1-xa9qRaVJ.webp"
  },
  {
    title: "Digital Content Creation",
    description: "Become a Digital Content Creator, Social Media Influencer, Video Producer, or YouTube Content Creator",
    img: "https://www.maacindia.com/assets/c2-lNFF0LTZ.webp"
  },
  {
    title: "Game Design",
    description: "Gain expertise in game design, asset creation, and real-time rendering for multiple platforms",
    img: "https://www.maacindia.com/assets/c3-DDaN8G1C.webp"
  },
  {
    title: "VFX Courses",
    description: "Develop high-end visual effects skills for film, television, and OTT platforms",
    img: "https://www.maacindia.com/assets/c4-Bsp-YrjV.webp"
  },
  {
    title: "Motion Graphics & Broadcast Design",
    description: "Explore motion graphics, advertising, and digital media production",
    img: "https://www.maacindia.com/assets/c5-D38BLeqs.webp"
  },
  {
    title: "Skill Enhancement Courses",
    description: "Fast-track your career with short-term courses in animation, VFX, and game design",
    img: "https://www.maacindia.com/assets/c6-C0xjQx6H.webp"
  }
];
// PlacementsSection
const companiesRow1 = [
  "RED CHILLIES",
  "SOLD OUT",
  "LIMINAL STUDIO",
  "AMAZON",
  "VISTAPRINT",
  "ACCENTURE",
  "STRINGS INFINITY",
  "FOLKS VFX",
  "CIMPRESS INDIA"
];

const companiesRow2 = [
  "RED CHILLIES",
  "SOLD OUT",
  "LIMINAL STUDIO",
  "AMAZON",
  "VISTAPRINT",
  "ACCENTURE",
  "STRINGS INFINITY",
  "FOLKS VFX",
  "CIMPRESS INDIA",
  "RED CHILLIES"
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


const students = [
  { name: "ANJALI KASHYAP", image: "https://www.maacindia.com/assets/p1-mNhqltyk.png", link: "#" },
  { name: "CHHANDOSI MUKHERJEE", image: "https://www.maacindia.com/assets/p5-UatRb7S-.png", link: "#" },
  { name: "ASHAD KHAN", image: "https://www.maacindia.com/assets/p2-BsRJKy8Y.png", link: "#" },
  { name: "DEEPAK KUMAR", image: "https://www.maacindia.com/assets/d1-gyeyxUR4.jpeg", link: "#" },
  { name: "RANJIT DAS", image: "https://www.maacindia.com/assets/diff2-liBLIOEu.png", link: "#" },
  { name: "SURESH KUMAR", image: "https://www.maacindia.com/assets/diff4-C6V1YDqJ.png", link: "#" },
  { name: "SIPRA DAS", image: "https://www.maacindia.com/assets/diff3-CiKGGp4s.png", link: "#" },
];

const events = [
  {
    name: "MCL",
    image: "https://www.maacindia.com/assets/event1-CvZ0ivBK.webp",
    link: "#",
  },
  {
    name: "24FPS",
    image: "https://www.maacindia.com/assets/event2-4yX8DEth.webp",
    link: "#",
  },
  {
    name: "NSM",
    image: "https://www.maacindia.com/assets/event6-U_KxfnT6.webp",
    link: "#",
  },
  {
    name: "MAAC Manifest",
    image: "https://www.maacindia.com/assets/event5-AdwNrKP8.webp",
    link: "#",
  },

  {
    name: "MAAC Manifest",
    image: "https://www.maacindia.com/assets/event7-5645Mfh4.webp",
    link: "#",
  },
];
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    const slideDuration = 4000;
    const progressIntervalDuration = 30;
    const totalSteps = slideDuration / progressIntervalDuration;
    let step = 0;

    const progressInterval = setInterval(() => {
      step += 1;
      setProgressBarWidth((step / totalSteps) * 100);

      if (step >= totalSteps) {
        step = 0;
        setProgressBarWidth(0);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
      }
    }, progressIntervalDuration);

    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.firstChild?.offsetWidth || 1; // each card width
      const gap = parseInt(getComputedStyle(container).gap) || 0;
      const totalWidth = cardWidth + gap;

      const index = Math.round(container.scrollLeft / totalWidth);
      setActiveDot(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const [activeDot, setActiveDot] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setActiveDot(index);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    container.scrollTo({
      left: container.offsetWidth * index,
      behavior: "smooth",
    });
  };

  // const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Update slider when user scrolls
  useEffect(() => {
    const container1 = scrollRef.current;
    const handleScroll = () => {
      const maxScroll = container1.scrollWidth - container1.clientWidth;
      const scrollPercent = (container1.scrollLeft / maxScroll) * 100;
      setProgress(scrollPercent);
    };
    container1.addEventListener("scroll", handleScroll);
    return () => container1.removeEventListener("scroll", handleScroll);
  }, []);

  // Move scroll when slider changes
  const handleSliderChange = (value) => {
    const container1 = scrollRef.current;
    const maxScroll = container1.scrollWidth - container1.clientWidth;
    container1.scrollLeft = (value / 100) * maxScroll;
    setProgress(value);
  };



  const [sliderValue, setSliderValue] = useState(0);
  const eventScrollRef = useRef(null); // ✅ declare the ref

  // Sync slider position with scroll
  useEffect(() => {
    const container = eventScrollRef.current;

    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const percent = (container.scrollLeft / maxScroll) * 101;
      setSliderValue(percent);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // When slider moves, scroll container
  const handleSliderChanges = (e) => {
    const value = parseFloat(e.target.value);
    setSliderValue(value);
    const container = eventScrollRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    container.scrollLeft = (value / 101) * maxScroll;
  };



  return (
    <>
      <div className="slider-container">
        <div className="main-content">
          <div
            className="main-image-container"
            style={{ backgroundImage: `url(${mainImages[currentSlide]})` }}
          >
            <div className="overlay-text">
              <h2>{slidesData[currentSlide].heading}</h2>
              <p>{slidesData[currentSlide].content}</p>
            </div>
            <div className="sub-slides-container">
              {slidesData.map((slide, index) => (
                <div
                  key={index}
                  className={`sub-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img src={slide.image} alt={slide.heading} />
                  <p>{slide.heading}</p>
                </div>
              ))}
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progressBarWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      { /* ...Creative Careers ... */}

      <div className="career-section">
        <div className="career-header">
          <h1>Creative Careers That Click - Think MAAC.</h1>
          <h3>Empower Your Future with Skills That Matter</h3>
          <p>
            Train in animation, VFX, gaming, and digital content creation with
            expert-led courses that prepare you for real industry success.
          </p>
        </div>

        <div className="career-cards">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`career-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="card-title">
                <span>{card.title}</span>
              </div>
              {activeIndex === index && (
                <div className="card-content">
                  <img src={card.image} alt={card.title} />
                  <p>{card.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      { /* ...courses-section ... */}
      <section className="courses-section">
        <div className="courses-header">
          <h2>MAAC Courses</h2>
          <p>Find the Right Fit for Your Future</p>
          <p>Get globally recognized training through MESC and NSDC - and build skills that set you apart.</p>
        </div>
        <div className="courses-btn">
          <button type="button">Pick Your Courses</button>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.img} alt={course.title} />
              <div className="card-overlay">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-scroll-container" ref={scrollRef}>
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.img} alt={course.title} />
              <div className="card-overlay">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button>View Details</button>
              </div>
            </div>
          ))}
        </div>

        <div className="scroll-dots">
          {courses.map((_, index) => (
            <span key={index} className={`dot ${activeDot === index ? "active" : ""}`}></span>
          ))}
        </div>
      </section>

      {/* contact-section.... */}

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

      {/* placements-section */}

      <section className="placements-section">
        <div className="placements-header">
          <div className="header">
            <h2>
              MAAC Placements: <span>Your Launchpad to the Industry</span>
            </h2>
            <p className="subtitle">
              You don't just train here - you get ready to lead.
            </p>
            <p className="description">
              You get hired because you're ready from Day 1, with real skills and
              industry-driven training.
            </p>
          </div>
          <div className="employer-btn">
            <button >Meet Your Future Employers</button>
          </div>
        </div>

        {/* Scrolling Rows */}
        <div className="scroll-container">
          <div className="scroll-row left">
            {companiesRow1.concat(companiesRow1).map((name, index) => (
              <div className="company-card" key={index}>
                {name}
              </div>
            ))}
          </div>
          <div className="scroll-row right">
            {companiesRow2.concat(companiesRow2).map((name, index) => (
              <div className="company-card" key={index}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
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
      {/* Students' Work Section */}
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
      {/* maac-events-section */}

      <section className="maac-events-section">
        <div className="header">
          <h2>MAAC Events: Celebrating Creativity and Innovation</h2>
          <p>Create. Compete. Level Up.</p>
          <p>
            Every MAAC event is a chance to challenge yourself and build
            industry-ready confidence.
          </p>
          <button className="cta-btn">Experience the Buzz</button>
        </div>

        <div className="cards-container1" ref={eventScrollRef}>
          {events.map((event, idx) => (
            <a href={event.link} key={idx} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.name} />
                <div className="hover-overlay">
                  <span>{event.name}</span>
                </div>
              </div>
              <div className="bg">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAAEkCAYAAAChV80EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAwoSURBVHgB7d09cxxVusDxM5IobLkEBIrkkmVHIrqR9wOY6EYiI/FmJCbbiIybOPMN7mZ2QmYnZPjm+ANYCRuhSIVVq8gRLouqxZrZ5+wOWyzFel76nJH98PtVSQNlzUzP6T5/dc+LelTC3t7etwXgLbdWAJIQNCANQQPSEDQgDUED0hA0IA1BA9IQNCANQQPSEDQgDUED0tgojUwmkxfx9TD+87Asbmdtbe2zellWYDweP42L/4+vv5bFHYxGo4/ia6usQCzr/Ribo7h8scj14jpbcZ1bcflxWY3T+HoY93lUFrfy9R/392jRMZ06WNWY/l7mVCznrXicH7eYU6P6rcGH00/jAX16cnJyWga4du3a/9VYlI5i4B49e/bsXhlgd3d3J5bzq95RixX9yfHx8TKB+JdY1jvTDbun05cvX37y/PnzZQLxD3VMYzm/LJ0nYGynD2I7vV8GiGWtUbtb+moyp2Ju1+U8KB3Fcj6O5fyiDNBqTjU55Kx7EUMHvrp8+fL/1N9KpZ/ToTGr6mOd/ubsJsb066Exq2JZH8TF09JRnXhDYlbVMY3bGTQpZonbPxwasypu43FdP6WjVnPq0qVL93rPqfhqMaZN5lSToNUVXBo4Ojp6EYX+rnQy3S1uYnNz81Hp6Pz8vOXtPymdxEZ41GLiVXE79dCqyW39ltir+qY0ErfVbUyrlnMq1lGzx/1rcdvftVr/LeZUi6A13QAjOt026NJwWeuGUjpaX19vdvtLPlc0lw6//Zd5XnMuSz6/1/22fkPTORDx7bn+m41DiznlVU5IrucvtDeNoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoAFpCBqQhqABaQgakIagAWkIGpCGoPG7MR6PV3IuVS7O4KBNJpOmG8loNHqvdNLytut5BEtH5+fnLce127J2ODfp1dLJxsZGy3Houf53tre3m41rrKMPSz/NxmF/f3/wYx4ctLpBx+S+WRqYnmz0VunnoOGG0uQx/yfr6+vNTrjc80zfsb72W8X9xo0b+6VvKN6KMa3efffdlnNqv3RSTwzeak6dnZ0NnvtNDjnrWaRbbNQxOJ+Xjmp8Nzc3B59FfHqW765nI49lvb2zszN4Q7x+/fqd0vls5LGsfx66UdfrxyHhn0tfN2M8Bq+3CG89E3nXs5HH3uTnLebUdDvtuof+Js2pUf22t7f3bRmunvm6nkF5mXMKXo0HUzeQrns9P6vnEowV8SCW94eyoNhz+kNc73aHQ63/ZKmzdMd41sPr22VFY1oGrP9Y1hruP5bO4f2Fpce07u3E9nOnrIY5taCWQQO4UF7lBNIQNCANQQPSEDQgDUED0tgoA8RLrafx0vA38Z+HcXn66tWrFwVgcfV9aPVtG/VtJvUN0Eu9hWfZt23U98d8cXJyclgAGtvd3T1Y5k3BCx9yRsgev3z58hMxA3qJvtQ3P386mUy+WeR6C+2hxR08iDu6XwBWJPp0t8z5UbO599BqKcUMWLXvv//+i/rRqnl+dq6gxY29iK//LQAXIPrzp3l+bq6gjUajr2PvbJkPyAIMNu3Pw1k/N1fQ4rmzRwXgAsWrno9n/sysH4iYHdo7Ay7a8fFxfR7ttS2aGbQ43JzryTiA3mIH6+nr/n1m0OLJuO8KwBsgDjtfu4M1zyGnjzMBb4RZPZoZtCiioAFvBX9tA0hD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUhD0IA0ZgZtPB5vFYC3wMygra2tCRrwpth53T/ODNpoNPqwALwBYgfr6mv/vcwQQdsvAG+AyWTy2h7N86LAze3tbYedwIXa3d3dmbWDNdernJcvX/5jAbhAcbj52cyfKXOIKt6udSwAF2Dan4NZPzdv0LaijncLwAWI/nw518+V+d28du3a5wVghfb29urO1FxHiOv12wcffDDz2LSKPbX/ev/999975513/nJ2dva3AtBJfTEyvu5Fd/573uss/NGn+nzalStXvopj2pnHswDLqH2pnYne3FrkeqP6LXbpvi3LOZ1MJk/iTg/H4/EP9f8LwILOz8+31tfXP5y+LeOgPm9fljA0aABvDH9tA0hD0IA0BA1IQ9CANAQNSGOjNDKZTF7ES63319bWDl+9evVi3uttbGxsjcfj+i7g+imElXxeNO7vaSzno7g8KovZievVl5Xrh/W7L2sd0/h6GPd5tMiy1jGNdVBf9j6I635cVuM0lvFB3Pd3i6z/8s9x3Jl+8HhV6//ruL8ny6z/ssIx/Xn9x5g+WWZOxXU/W9Wf//p5TsXX6UWu/1Zv26gb86cnJyeD3oc2/YhD1zfs1kkXy3m/DDD9MyZfLftemXnFSv7k+Ph40Un3b2JZ78zzVwqGiIlzdHZ29unz588X2ZD/zf7+/taPP/74Ze8J2Gj935z3s4UDvDVzKtb/o2fPnt0rA7SaU00OOWPg7w8d+OrSpUv36m+l0s/p0I25qo+1/uYsfT0cGrMqlvVBXDwtHcVY/GlIzKqjo6O6NzJoUswS2+lho/Vf30j+denobZpTQ2NW1cdaj/DKQIODVgcrFuZxaaBu1HFxWDqpu8Wlkc3NzUelo59++qnJmE49KZ1MI9HkEyI1FKXjp01ir+qb0kg9ZC0dtZxTMUebPe5fazmnIr6DH/PgoEVVm9Y/Bv+H0k+zyTKNbzfr6+vNbj82uq7L2thfSydLPGe2ktv6DU2jHvHtuodWGmkxp7zKCcm9Zb/QBhE0IA1BA9IQNCANQQPSEDQgDUED0hA0IA1BA9IQNCANQQPSEDQgDUED0hA0IA1BA9IQNCANQQPSEDQgDUED0hA0fjfG43HX0w5y8Vqc9Wlre3u72YYyGo3eK520vO16HsHS0fn5ecvJ121ZO5yb9GrpZGNjo+U49Fz/O43n1Ieln2bjUM/NWgZqcdanrcuXLzc5Oez0ZKO3Sj8HDTeUm6Wj9fX1j0ojPc/0XU8MvLOz02r91zHtGYq3YkyrmFNN5sH0F2+3bTXW/0et5tTZ2dngx9zkkDNW7t2heyx1UGJwPi8d1fhubm4OPov4NLxdlzXG9E6LUFy/fv1O6RuJuudzd+hGXce0bkelr5sxHoPX/40bN+qZyLuejbxuXy2OAurtdNiL/uXtb125cmXwXJiu/8HrZlS/7e3tfVuGq+fne7jM+QrjgezHoevH9bd9WYG4r6Ppmc8XOqdgLOd7dRnjMd7uuZH8yuMlz9J9NZa3Trque5K/cFrP9l2WOE9j7I3+YdVjGl9P4j4XOgdsXf9xUfciusbsF05jO32y5ImCr8Z43l7VnCpLrv/Wc6pl0AAulFc5gTQEDUhD0IA0BA1IQ9CANAQNSEPQgDQEDUjj7z4IsyZZDauoAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=" alt="" />
              </div>


            </a>
          ))}
        </div>

        <div className="slider-wrapper1">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChanges}
            className="custom-slider1"
          />
        </div>
      </section>
      <section className="partner-section">
        <div className="partner-text">
          <h2>MAAC: Your Trusted Training Partner</h2>
          <p>
            Proudly partnered with MESC & NSDC under the Skill India Mission, we offer nationally
            recognized, industry-relevant training. Get certified, gain real skills, and build a
            future-ready career in Animation, VFX, Gaming, and more!
          </p>
          <button className="partner-btn">Explore Certified Courses</button>
        </div>

        <div className="partner-logos">
          <div className="logo-card">
            <img
              src="https://www.maacindia.com/assets/tp1-By5o3sGW.png"
              alt="Skill India"
            />
          </div>
          <div className="logo-card">
            <img
              src="https://www.maacindia.com/assets/tp3-B4VXKwjX.png"
              alt="NSDC"
            />
          </div>
        </div>
      </section>



    </>
  );
};

export default Home;