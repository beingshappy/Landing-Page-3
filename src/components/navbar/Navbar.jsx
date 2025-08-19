// import React, { useState } from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
// import Logo from '../../assets/logo.jpg';
// import EnquireForm from "../../components/enquire-form/EnquireForm";

// const dropdownItems = [
//   /* ...your same dropdownItems here... */
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [show, setShow] = useState(false);

//   const toggleMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//     setOpenDropdown(null);
//   };

//   const handleDropdown = (label) => {
//     setOpenDropdown(openDropdown === label ? null : label);
//   };

//   const handleOpen = () => setShow(true);
//   const handleClose = () => setShow(false);

//   return (
//     <>
//       {/* NAVBAR */}
//       <header className="navbar">
//         <div className="navbar-left">
//           <NavLink to="/">
//             <img src={Logo} alt="MAAC Logo" className="logo" />
//           </NavLink>
//         </div>

//         <nav className={`nav-center ${mobileMenuOpen ? "open" : ""}`}>
//           {/* ...your nav-center code (same as before)... */}
//         </nav>

//         <nav className={`navbar-center ${mobileMenuOpen ? "open" : ""}`}>
//           {/* ...your navbar-center code (same as before)... */}
//         </nav>

//         <div className="navbar-right">
//           <FaPhoneAlt className="phone-icon" />

//           {/* 👉 this opens the modal */}
//           <button className="enquire-btn" onClick={handleOpen}>
//             Enquire Now
//           </button>

//           <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
//         </div>
//       </header>

//       {/* 👉 move the modal OUTSIDE of the navbar */}
//       {show && <EnquireForm onClose={handleClose} />}
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.jpg';
import EnquireForm from "../../components/enquire-form/EnquireForm";

const dropdownItems = [
  {
    label: "Courses",
    path: "/courses",
    subItems: [
      { label: "Animation", path: "/courses/animation" },
      { label: "VFX", path: "/courses/vfx" },
      { label: "Digital Content Creation", path: "/courses/digitalContentCreation" },
      { label: "Game Design", path: "/courses/gameDesign" },
      { label: "Motion Graphics & Broadcast", path: "/courses/MotionGraphicsBroadcast" },
      { label: "Skill Enhancement Courses", path: "/courses/skillEnhancementCourses" },
      { label: "Filmmaking", path: "/courses/filmmaking" },
      { label: "Blended Model of Learning", path: "/courses/blendedModelOfLearning" },
      { label: "Visual Art & Design", path: "/courses/visualArtDesign" },
      { label: "View e-brochure", path: "/courses/viewe-brochure" },
    ],
  },
  {
    label: "Student's World",
    path: "/studentsworld",
    subItems: [
      { label: "Gallery", path: "/studentsworld/gallery" },
      { label: "Testimonials", path: "/studentsworld/testimonials" },
      { label: "Placements", path: "/studentsworld/placements" },
      { label: "FAQs", path: "/studentsworld/faqs" },
    ],
  },
  {
    label: "Events",
    path: "/events",
    subItems: [
      { label: "100 Hours", path: "/events/100Hours" },
      { label: "MAAC Creative League", path: "/events/maacCreativeLeague" },
      { label: "MAAC Klick", path: "/events/maacklick" },
      { label: "MAAC Mainfest", path: "/events/maacMainfest" },
      { label: "National student Meet", path: "/events/nationalstudentmeet" },
      { label: "24FPS", path: "/events/24fps" },
      { label: "BTS(Behind The Screen)", path: "/events/bts" },
      { label: "Deadline", path: "/events/deadline" },
    ],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  const handleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <NavLink to="/">
            <img src={Logo} alt="MAAC Logo" className="logo" />
          </NavLink>
        </div>

        <nav className={`nav-center ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            {dropdownItems.map((item) => (
              <li
                key={item.label}
                className={`dropdown${openDropdown === item.label ? " active" : ""}`}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={item.path}
                  className="nav-link1"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  style={{ cursor: "pointer" }}
                >
                  {item.label} <span>▼</span>
                </NavLink>
                <ul
                  className="dropdown-content"
                  style={{ display: openDropdown === item.label ? "block" : "none" }}
                >
                  {item.subItems.map((sub) => (
                    <li key={sub.label}>
                      <NavLink to={sub.path}>{sub.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <NavLink to="/aboutus" className="nav-link1">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/locatecentre" className="nav-link1">Locate a Centre</NavLink>
            </li>
            <li>
              <NavLink to="/partnerwithmaac" className="nav-link1">Partner with MAAC</NavLink>
            </li>
          </ul>
        </nav>

        <nav className={`navbar-center ${mobileMenuOpen ? "open" : ""}`}>
          {mobileMenuOpen && (
            <AiOutlineClose className="close-icon" onClick={toggleMenu} />
          )}
          <ul>
            <li>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            {dropdownItems.map((item) => (
              <li
                key={item.label}
                className={`dropdown${openDropdown === item.label ? " active" : ""}`}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={item.path}
                  className="nav-link"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  style={{ cursor: "pointer" }}
                >
                  {item.label} <span>▼</span>
                </NavLink>
                <ul
                  className="dropdown-content"
                  style={{ display: openDropdown === item.label ? "block" : "none" }}
                >
                  {item.subItems.map((sub) => (
                    <li key={sub.label}>
                      <NavLink to={sub.path}>{sub.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/locatecentre" className="nav-link">Locate a Centre</NavLink>
            </li>
            <li>
              <NavLink to="/partnerwithmaac" className="nav-link">Partner with MAAC</NavLink>
            </li>
            <li>
              <NavLink to="/contactus" className="nav-link">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link">Blog</NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar-right">
          <FaPhoneAlt className="phone-icon" />
          <button className="enquire-btn" onClick={handleOpen}>Enquire Now</button>
          <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
        </div>
      </header>

      {/* Modal outside header */}
      {show && <EnquireForm onClose={handleClose} />}
    </>
  );
};

export default Navbar;

