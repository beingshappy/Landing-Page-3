import React from 'react'
import bgVideo from '../../assets/courses-video.mp4';
import { FaBookOpen } from "react-icons/fa";
const Courses = () => {
  return (
    <>
      <section className="courses-section1">
        {/* Background video */}
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        {/* <div className="overlay"></div> */}

        {/* Content */}
        <div className="courses-content">
          <h1>COURSES AT MAAC</h1>
          <p>
            Step into the world of Animation, VFX, Gaming, Filmmaking, and Digital Media with MAAC.
            Here, you don't just learn at MAAC – you create, innovate, and become job-ready for exciting
            career opportunities.
          </p>
        </div>
      </section>
      <section className="courses-info">
        <div className="courses-text">
          <h2>Our Courses</h2>
          <p>
            Our industry-aligned courses equip you with cutting-edge skills, real-world experience,
            and hands-on training using the latest tools and technologies. Whether you aim to become
            an animator, VFX artist, game developer, or digital designer, we help you turn your passion
            into a profession.
          </p>
        </div>

        <div className="courses-image">
          <div className="tag">Master Your Craft</div>
          <img src="https://www.maacindia.com/assets/subhero-CecB6sFU.jpeg" alt="Students Learning" />
        </div>
      </section>
      <section className="courses-section2">
        <h2 className="section-title">Explore Our Courses</h2>
        <div className="courses-container1">
          <div className="explore-card">
            {/* Left: Video */}
            <div className="video-part">
              <video src="https://www.maacindia.com/assets/e1-Dn7yZ1Ut.mp4" autoPlay muted loop playsInline />
            </div>

            {/* Right: Content */}
            <div className="content-part">
              <h3 className="course-title">3D Animation</h3>
              <p className="course-description">
                Master the art of storytelling through high-quality animation,
                modeling, texturing, lighting, and rigging. Work on real-world
                projects and build your portfolio.
              </p>
              <p className="future-roles">
                <strong>Your Future Roles:</strong> <br />
                <span>
                  3D Animator, Character Designer, Rigging Artist, Lighting Artist,
                  Game Asset Artist, Environment Artist.
                </span>
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>

          {/* revers card */}
          <div className="explore-card">
            {/* Left: Video */}
            <div className="content-part">
              <h3 className="course-title">Digital Content Creation</h3>
              <p className="course-description">
                Become a digital content pro! Learn graphic design, animation, video production, and web design to create compelling digital media.

              </p>
              <p className="future-roles">
                <strong>Your Future Roles:</strong> <br />
                <span>
                  Graphic Designer, Video Producer, Social Media Designer, UI/UX Designer, Motion Graphics Artist, Content Strategist.
                </span>
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
            {/* Right: Content */}
            <div className="video-part">
              <video src="https://www.maacindia.com/assets/e2-BLaB4stJ.mp4" autoPlay muted loop playsInline />
            </div>
          </div>

          <div className="explore-card">
            {/* Left: Video */}
            <div className="video-part">
              <video src="https://www.maacindia.com/assets/e3-gmklBUk_.mp4" autoPlay muted loop playsInline />
            </div>

            {/* Right: Content */}
            <div className="content-part">
              <h3 className="course-title">Game Design</h3>
              <p className="course-description">
                Step into the world of gaming! Learn game asset creation, real-time rendering, and interactive design.
              </p>
              <p className="future-roles">
                <strong>Your Future Roles:</strong> <br />
                <span>
                  Game Developer, Level Designer, 3D Artist, Virtual Reality Artist, Game Animator.
                </span>
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>

          <div className="explore-card">
            {/* Left: Video */}
            <div className="content-part">
              <h3 className="course-title">Visual Effects (VFX)</h3>
              <p className="course-description">
                Create stunning VFX for movies, TV, and gaming with advanced CGI, compositing, and motion tracking techniques.

              </p>
              <p className="future-roles">
                <strong>Your Future Roles:</strong> <br />
                <span>
                  VFX Compositor, Motion Graphics Artist, FX Artist, Matte Painter, Pre-Visualization Artist.
                </span>
              </p>
              <button className="read-more-btn">Read More</button>
            </div>

            {/* Right: Content */}
            <div className="video-part">
              <video src="https://www.maacindia.com/assets/e4-D4pGh4ZZ.mp4" autoPlay muted loop playsInline />
            </div>
          </div>


          <div className="explore-card">
            {/* Left: Video */}
            <div className="video-part">
              <video src="https://www.maacindia.com/assets/e5-DPNIq2Ds.mp4" autoPlay muted loop playsInline />
            </div>

            {/* Right: Content */}
            <div className="content-part">
              <h3 className="course-title">Broadcast & Motion Graphics</h3>
              <p className="course-description">
                Master the art of motion design, video editing, and broadcast graphics for TV, digital media, and advertising.
              </p>
              <p className="future-roles">
                <strong>Your Future Roles:</strong> <br />
                <span>
                  Motion Graphics Artist, Broadcast Designer, UI Designer, Video Editor.
                </span>
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
          <div className="explore-card">
            {/* Left: Video */}
            <div className="content-part">
              <h3 className="course-title">Filmmaking & Photography</h3>
              <p className="course-description">
                Turn your vision into reality! Learn cinematography, video editing, sound design, and VFX for films, ads, and digital platforms.

              </p>
              <p className="future-roles">
                <strong>Your Future Roles:</strong> <br />
                <span>
                  Video Editor, Cinematographer, Film Director, Content Creator.
                </span>
              </p>
              <button className="read-more-btn">Read More</button>
            </div>

            {/* Right: Content */}
            <div className="video-part">
              <video src="https://www.maacindia.com/assets/e6-y1NP5iNY.mp4" autoPlay muted loop playsInline />
            </div>
          </div>
          <div className="explore-card">
            {/* Left: Video */}
            <div className="video-part">
              <video src="https://www.maacindia.com/assets/e7-3H5Uk0JT.mp4" autoPlay muted loop playsInline />
            </div>

            {/* Right: Content */}
            <div className="content-part">
              <h3 className="course-title">Specialized Skills Bootcamp</h3>
              <p className="course-description">
                Master the art of motion design, video editing, and broadcast graphics for TV, digital media, and advertising.
              </p>
              <p className="future-roles">
                <strong>Your Future Roles:</strong> <br />
                <span>
                  Motion Graphics Artist, Broadcast Designer, UI Designer, Video Editor.
                </span>
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="course-info1">
        <p className="course-text">
          Everything you need to know about our courses— just a click away.
        </p>
        <button className="course-btn">
          <FaBookOpen className="btn-icon" />
          View e-brochure
        </button>
      </section>

      <section className="career-section2">
        <div className="career-text">
          <h2>
            Exciting Career <br /> Opportunities at MAAC
          </h2>
          <p>
            <span className="highlight">
              MAAC is one of the leading institutes in India
            </span>{" "}
            that offers Animation, Gaming, VFX, Broadcast, Photography, and
            Digital Design courses. Our centers across India and worldwide are
            equipped with state-of-the-art infrastructure, studio-like classrooms,
            and the latest industry tools and software. Whether you're just
            starting or looking to upskill, our courses are designed to set you on
            the path to success in the media and entertainment industry.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>

        <div className="career-images">
          <div className="image-grid">
            <img src="https://www.maacindia.com/assets/ce1-CCs8YEWh.jpeg" alt="Career Option 1" />
            <img src="https://www.maacindia.com/assets/ce2-CdNLZkCs.jpeg" alt="Career Option 2" />
            <img src="https://www.maacindia.com/assets/ce3-DLbNClwU.jpeg" alt="Career Option 3" />
            <img src="https://www.maacindia.com/assets/ce4-BtSl5dds.jpeg" alt="Career Option 4" />
          </div>
        </div>
      </section>
      <section className="course-highlight">
        <p>
          The courses at <strong>MAAC</strong> are ideal for both beginners and
          professionals. Join a course at <strong>MAAC</strong> and prepare
          yourself for an exciting career in the M&amp;E industry.
        </p>
      </section>

      <section
        className="course-choice-section"
        style={{ backgroundImage: `url('https://www.maacindia.com/assets/cta-jaoB2ByR.jpeg')` }}
      >
        <div className="course-choice-overlay">
          <h1>Not sure which course is right for you?</h1>
          <p>
            Choosing the perfect path in Animation, VFX, or Game Design can be
            overwhelming, but we're here to help!
          </p>
          <p>
            Fill in the form and our career counselors will call you back. They
            guide you to choose the right career course at MAAC
          </p>
          <button className="enquire-btn1">Enquire Now</button>
        </div>
      </section>
    </>
  )
}

export default Courses
