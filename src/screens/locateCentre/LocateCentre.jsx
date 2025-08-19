import React, { useRef, useState, useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineSms } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";

const LocateCentre = () => {

  const initialCities = [
    { name: "Bangalore", img: "https://www.maacindia.com/src/assets/locateACenter/bangalore.png" },
    { name: "Chennai", img: "https://www.maacindia.com/src/assets/locateACenter/chennai.png" },
    { name: "Hyderabad", img: "https://www.maacindia.com/src/assets/locateACenter/hyderabad.png" },
    { name: "Kolkata", img: "https://www.maacindia.com/src/assets/locateACenter/kolkata.png" },
    { name: "Mumbai", img: "https://www.maacindia.com/src/assets/locateACenter/mumbai.png" },
    { name: "New Delhi", img: "https://www.maacindia.com/src/assets/locateACenter/new-delhi.png" },
    { name: "Pune", img: "https://www.maacindia.com/src/assets/locateACenter/pune.png" },
  ];

  const moreCities = [
    { name: "Jaipur", img: "https://www.maacindia.com/src/assets/locateACenter/pune.png" },
    { name: "Ahmedabad", img: "https://www.maacindia.com/src/assets/locateACenter/pune.png" },
    { name: "Lucknow", img: "https://www.maacindia.com/src/assets/locateACenter/pune.png" },
    { name: "Patna", img: "https://www.maacindia.com/src/assets/locateACenter/pune.png" },
  ];


  const centres = [
    {
      name: "GUWAHATI - CHANDMARI",
      address: "Eureka Tower, 2nd Floor, Opp. All India Radio, Near Chandmari Flyover, U-turn Road, Guwahati, Assam, 781003",
      phone: "8473845406",
    },
    {
      name: "BANGALORE - MALLESHWARAM",
      address: "Swetha Mansion, No 483, 2nd Floor, 5th Cross, Sampige Road, Malleshwaram, Bangalore, Karnataka, 560003",
      phone: "8971958675 / 8971958597",
    },
    {
      name: "GUWAHATI - PANBAZAR",
      address: "2nd Floor, Above Bookland Book Shop, Opp. Central Bank Of India, Jasawanta Road, Panbazar, Guwahati, Assam, 781001",
      phone: "9859835245 / 8471941347",
    },
    {
      name: "GUNTUR - ARUNDELPET",
      address: "Door No. 6-11-32/a, 1st Floor, Above Icemagic, 11/1, Arundelpet, Guntur, Andhra Pradesh, 522002",
      phone: "9620479896",
    },
    {
      name: "DELHI NCR - FARIDABAD-SECTOR 29",
      address: "Scf-52 Second Floor, Above Icici Direct, Sector 29, Huda Market, Faridabad, Haryana, 121008",
      phone: "8473845406",
    },
    {
      name: "NAGPUR - DHARAMPETH",
      address: "1st Floor, 358, Shivhare Bhavan, Tanga Stand, Near Children Traffic Park, Vip Square, Dharampeth, Nagpur, Maharashtra, 440010",
      phone: "8971958675 / 8971958597",
    },
    {
      name: "HOWRAH - GT ROAD",
      address: "545/2, G.t. Road, 5th Floor, Sari Mall, Howrah Maidan-bangabasi, Howrah, West Bengal, 711101",
      phone: "9859835245 / 8471941347",
    },
    {
      name: "DELHI - KAMLA NAGAR",
      address: "41-a, Kamla Nagar, Above Andhra Bank, Near Shakti Nagar Chowk, New Delhi, Delhi, 110007",
      phone: "9620479896",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const displayedCities = showMore ? [...initialCities, ...moreCities] : initialCities;
  return (
    <>
      <section className="locate-centre">
        <div className="overlay1">
          <h1 className="title1">LOCATE A MAAC CENTRE</h1>

          <div className="search-box">
            <h2>Find the Best MAAC Centre Near You</h2>
            <div className="dropdowns">
              <div className="dropdown">
                <label>Select State</label>
                <select>
                  <option value="">Select State</option>
                  <option value="odisha">Odisha</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>

              <div className="dropdown">
                <label>Select City</label>
                <select>
                  <option value="">Select City</option>
                  <option value="bhubaneswar">Bhubaneswar</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-cities1">
        <div className="popular-cities">
          <h2>Popular Cities</h2>
          <div className={`cities-grid ${showMore ? "expanded" : ""}`}>
            {displayedCities.map((city, index) => (
              <div className="city-card" key={index}>
                <img src={city.img} alt={city.name} />
                <span>{city.name}</span>
              </div>
            ))}
          </div>

          <button className="toggle-btn" onClick={() => setShowMore(!showMore)}>
            {showMore ? "View Less" : "+ Other Cities"}
          </button>
        </div>
      </section>

      <section className="centres">
        {centres.map((centre, index) => (
          <div className="centre-card" key={index}>
            <div className="card-header">
              <h3>{centre.name}</h3>
              <span className="location-icon"><IoLocationSharp /></span>
            </div>

            <p><strong>Address:</strong><br />{centre.address}</p>
            <p><strong>Phone No-</strong><br />{centre.phone}</p>

            <div className="card-actions">
              <button className="sms-btn"><MdOutlineSms /> SMS Me</button>
              <button className="admission-btn"><LuNotebookPen />
                Admission Enquiry</button>
            </div>

            <button className="more-btn">Know More About This Centre</button>
          </div>
        ))}
      </section>
    </>
  )
}

export default LocateCentre
