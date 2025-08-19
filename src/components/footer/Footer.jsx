import React from "react";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo-section">
                    <img src={Logo} alt="MAAC Logo" className="logo" />
                    <p>
                        Join MAAC and embark on a journey that will unlock your true
                        potential, inspire creativity, and empower you to lead in a world of
                        limitless possibilities.
                    </p>



                </div>

                <div className="footer-links">
                    <div className="footer-line">
                        <NavLink>Courses</NavLink>
                        <NavLink>Placement Opportunities</NavLink>
                        <NavLink>About Us</NavLink>
                        <NavLink>Contact Us</NavLink>
                    </div>
                    <div className="footer-line">
                        <NavLink>Blog</NavLink>
                        <NavLink>Disclaimer</NavLink>
                        <NavLink>FAQ</NavLink>
                        <NavLink>Sitemap</NavLink>
                    </div>
                    <div className="footer-line">
                        <NavLink>Student Enquiry</NavLink>
                        <NavLink>Privacy Policy</NavLink>
                        <NavLink>Profanity Policy</NavLink>
                        <NavLink>Verify Your Certificate</NavLink>
                        <NavLink>Laptop Scheme Terms</NavLink>
                    </div>
                </div>

                <div className="feedback-section">
                    <h3>Did you find the information you were looking for?</h3>
                    <div className="feedback-buttons">
                        <button className="yes-btn">Yes</button>
                        <button className="no-btn">No</button>
                    </div>
                </div>
            </div>
        
                <div className="footer-content">

                    <div className="footer-left">
                        <p>
                            Follow us for Updates, inspiration,and student stories
                        </p>
                        <div className="social-icons">
                            <NavLink><FaFacebookF /></NavLink>
                            <NavLink><FaTwitter /></NavLink>
                            <NavLink><FaInstagram /></NavLink>
                            <NavLink><FaYoutube /></NavLink>
                            <NavLink><FaLinkedinIn /></NavLink>
                        </div>

                    </div>

                    <div className="footer-bottom">
                        <img src="https://www.maacindia.com/assets/stamp-D6G7kzVd.png" alt="Official Seal" className="seal" />
                    </div>
                    <div className="footer-right">
                        <p>
                            Reach Us at
                            <NavLink to="#">1-800-209-6222</NavLink>
                            |
                            <NavLink to="#">info@maac.com</NavLink>

                        </p>
                    </div>
                </div>

                <p className="copy-right">Copyright © 2025 Aptech Ltd. All rights reserved.</p>
            </footer>
            );
};

            export default Footer;
