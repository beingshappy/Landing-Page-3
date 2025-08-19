
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const PartnerWithMaac = () => {

  const cards = [
    { title: "Established & Trusted Brand", text: "With 25 years of industry leadership, MAAC is a recognized name in AVGC education." },
    { title: "Booming Industry", text: "The AVGC sector is projected to reach $55-70 billion by 2030, creating immense business potential." },
    { title: "Proven Franchise Model", text: "Get end-to-end support, from infrastructure setup to operations management." },
    { title: "High Growth Potential", text: "Expand with increasing demand in animation, VFX, and gaming industries." },
    { title: "Strong Support System", text: "Comprehensive training and marketing assistance for franchise partners." },
    { title: "Established & Trusted Brand", text: "With 25 years of industry leadership, MAAC is a recognized name in AVGC education." },
    { title: "Booming Industry", text: "The AVGC sector is projected to reach $55-70 billion by 2030, creating immense business potential." },
    { title: "Proven Franchise Model", text: "Get end-to-end support, from infrastructure setup to operations management." },
    { title: "High Growth Potential", text: "Expand with increasing demand in animation, VFX, and gaming industries." },
    { title: "Strong Support System", text: "Comprehensive training and marketing assistance for franchise partners." }
  ];

  const [current, setCurrent] = useState(0);
  const cardsPerView = 3; // show 3 cards at once
  const totalSteps = cards.length - cardsPerView + 1;

  const next = () => {
    if (current < totalSteps - 1) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const cards1 = [
    {
      img: "https://www.maacindia.com/assets/bg1-R2BHPoli.webp",
      text: "Investment amount of Rs 35-55 lakhs to invest in infrastructure, software, hardware & staff",
    },
    {
      img: "https://www.maacindia.com/assets/bg2-fn32ldDs.webp",
      text: "Premises/space to run a centre: 1200 square feet & above",
    },
    {
      img: "https://www.maacindia.com/assets/bg2-fn32ldDs.webp",
      text: "Potential to manage daily operations of the MAAC centre",
    },
  ];

  return (
    <>
      <section
        className="partner-section1"

        style={{ backgroundImage: `url('https://www.maacindia.com/assets/hero-DX93PJJH.webp')` }}
      >
        <div className="overlay2">
          <h1>PARTNER WITH MAAC</h1>
        </div>
      </section>

      <section className="avgc-section">
        <div className="avgc-left">
          <h2>
            <span className="highlight">The AVGC Boom –</span><br />
            Your Opportunity to Lead!
          </h2>
          <div className="yellow-box">
            <p>
              The Media & Entertainment industry is evolving rapidly, with India emerging as a
              global hub for animation and VFX production. With government initiatives and
              rising demand, investing in creative education is a smart, future-proof
              business move.
            </p>
            <p>
              The Animation, VFX, and Gaming industry is witnessing unprecedented growth,
              creating a massive demand for skilled professionals. Imagine owning a business
              that not only delivers high returns but also nurtures young creative talent.
              With MAAC's proven franchise model, you get the expertise, resources, and brand
              trust needed to build a thriving education business in one of India’s fastest-growing sectors.
            </p>
            <p>
              This is your opportunity to own a premium training institute backed by a
              trusted industry leader. Partner with MAAC and tap into an ever-growing
              market with limitless potential!
            </p>
          </div>
        </div>

        <div className="avgc-right">
          <img src="https://www.maacindia.com/assets/image1-CBU4L5L9.webp" alt="Cartoon" />
          <img src="https://www.maacindia.com/assets/image2-CLOgs8KQ.webp" alt="Studio" />
        </div>
      </section>
      <section
        className="why-partner"

        style={{ backgroundImage: `url('https://www.maacindia.com/assets/hero-DX93PJJH.webp')` }}
      >
        <div className="overlay3">
          <div className="content1">
            <h2>
              <span className="highlight">Why Partner with MAAC?</span>
            </h2>
            <p>
              Becoming a MAAC franchise means joining a renowned and trusted brand
              in media and entertainment education. With 25 years of industry leadership,
              thousands of success stories, and a globally recognized curriculum,
              MAAC offers a proven franchise model designed for success.
            </p>
            <button className="partner-btn">Fill The Form</button>
          </div>
        </div>
      </section>

      <section className="opportunity">
        <h2 className="title">Your Opportunity to Lead!</h2>

        {/* Controls */}
        <div className="controls">
          <button onClick={prev} className="arrow-btn1"><FaArrowLeft /></button>
          <button onClick={next} className="arrow-btn1"><FaArrowRight /></button>
        </div>

        {/* Slider */}
        <div className="slider-container1">
          <div
            className="slider"
            style={{ transform: `translateX(-${(current * 100) / cardsPerView}%)` }}
          >
            {cards.map((card2, index) => (
              <div className="card2" key={index}>
                <h3>{card2.title}</h3>
                <p>{card2.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${((current + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
        <p className="source">
          Source: <a href="#">The AVGC sector is projected to reach $55-70 billion by 2030</a>
        </p>
      </section>
      <section className="franchisee-section">
        <h2 className="title">What Should a MAAC Franchisee Have?</h2>
        <div className="card-container2">
          {cards1.map((card3, i) => (
            <div className="card3" key={i}>
              <img src={card3.img} alt={`franchisee-${i}`} />
              <p>{card3.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="partner1">
        <div className="partner-left">
          <h2>Who Can Partner with MAAC?</h2>
          <p className="subtitle">MAAC franchise ownership is perfect for:</p>
          <div className="image-wrapper2">
            <img src="https://www.maacindia.com/assets/lImg-SFQqqDbF.webp" alt="Handshake" />

          </div>
        </div>

        <div className="partner-right">
          <div className="cards">
            <div className="card4">
              Entrepreneurs & Business Owners looking for a scalable, high-revenue venture.
            </div>
            <div className="card4">
              Investors interested in the fast-expanding education sector.
            </div>
            <div className="card4">
              Educationists want to diversify into creative training.
            </div>
            <div className="card4">
              Passionate Individuals eager to impact young creative minds.
            </div>
          </div>
          <p className="highlight">
            Seize the Opportunity to Lead in the Booming AVGC Industry!
          </p>
        </div>
      </section>

      <section
        className="start-centre"
        style={{ backgroundImage: `url("https://www.maacindia.com/assets/CTA-CI6m4wRx.webp")` }}
      >
        <div className="start-content">
          <h1>
            Start your own <span>MAAC centre</span> now.
          </h1>
          <p>
            Fill out the form. Our business development team will get in touch
            with you.
          </p>
          <button className="start-btn">Fill The Form</button>
        </div>
      </section>
    </>
  )
}

export default PartnerWithMaac
