import React from 'react'
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const Blog = () => {
  return (
    <>
      <section className="blog-header">
        {/* Breadcrumb */}
        <div className="navLinks">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <IoIosArrowForward className='nav-arrow' />
            <li>
              <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink>
            </li>
          </ul>
        </div>

        {/* Title */}
        <h1>
          EXPLORE MAAC <span className="highlight">BLOG</span>
        </h1>

        {/* Subtitle */}
        <p className="subtitle">
          Animation, VFX, gaming & beyond — explore the creative world with us.
        </p>

        {/* Banner Image */}
        <div className="banner-container">
          <img src="https://www.maacindia.com/assets/blog-C4enRS7l.jpg" alt="Blog Banner" />
        </div>
      </section>

      <div className="blog-section">
        {/* Top Filters */}
        <div className="filters">
          <select>
            <option>Select Category</option>
            <option>Animation</option>
            <option>VFX</option>
            <option>Gaming</option>
          </select>
          <select>
            <option>Archives</option>
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>

        <div className="main-content1">
          {/* Left - Image Grid */}
          <div className="image-grid">
            <div className="card-b">
              <img
                src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/category/maac/animation.png"
                alt="Animation"
              />
              <div className="card-info">
                <div className="name">
                  <span>14 Posts</span>
                  <h3>Animation</h3>
                </div>
                <div className="button">
                  <MdArrowOutward className='card-icon' />
                </div>
              </div>
            </div>

            <div className="card-b">
              <img
                src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/category/maac/vfx.png"
                alt="VFX"
              />
              <div className="card-info">
                <div className="name">
                  <span>8 Posts</span>
                  <h3>VFX</h3>
                </div>
                <div className="button">
                  <MdArrowOutward className='card-icon' />
                </div>
              </div>

            </div>
            <div className="card-b">
              <img
                src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/category/maac/digital_content_creation.png"
                alt="Animation"
              />
              <div className="card-info">
                <div className="name">
                  <span>0 Posts</span>
                  <h3>Digital Content Creation</h3>
                </div>
                <div className="button">
                  <MdArrowOutward className='card-icon' />
                </div>
              </div>
            </div>

            <div className="card-b">
              <img
                src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/category/maac/ui_ux_design.png"
                alt="VFX"
              />
              <div className="card-info">
                <div className="name">
                  <span>4 Posts</span>
                  <h3>UI/UX Design</h3>
                </div>
                <div className="button">
                  <MdArrowOutward className='card-icon' />
                </div>
              </div>

            </div>
            <div className="card-b">
              <img
                src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/category/maac/game_design.png"
                alt="Animation"
              />
              <div className="card-info">
                <div className="name">
                  <span>3 Posts</span>
                  <h3>Game Design</h3>
                </div>
                <div className="button">
                  <MdArrowOutward className='card-icon' />
                </div>
              </div>
            </div>

            <div className="card-b">
              <img
                src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/category/maac/broadcast.png"
                alt="VFX"
              />
              <div className="card-info">
                <div className="name">
                  <span>0 Posts</span>
                  <h3>Broadcast</h3>
                </div>
                <div className="button">
                  <MdArrowOutward className='card-icon' />
                </div>
              </div>

            </div>
            <div className="card-b">
              <img
                src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/category/maac/skill-enhancement.png"
                alt="Animation"
              />
              <div className="card-info">
                <div className="name">
                  <span>0 Posts</span>
                  <h3>Skill Enhancement</h3>
                </div>
                <div className="button">
                  <MdArrowOutward className='card-icon' />
                </div>
              </div>
            </div>

            <div className="card-b">
              <img
                src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/category/maac/filmmaking.png"
                alt="VFX"
              />
              <div className="card-info">
                <div className="name">
                  <span>0 Posts</span>
                  <h3>Filmmaking</h3>
                </div>
                <div className="button">
                  <MdArrowOutward className='card-icon' />
                </div>
              </div>

            </div>

          </div>


          {/* Right - Recent Posts */}
          <div className="recent-posts">
            <h2>Recent Posts</h2>
            <hr />
            <div className="post">
              <img src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/post/maac/how-animation-workshops-can-fast-track-your-career.jpg" alt="post1" />
              <p>How Animation Workshops Can Fast-Track Your Career</p>
            </div>
            <div className="post">
              <img src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/post/maac/redefining-game-development.jpg" alt="post2" />
              <p>The Next Level: Redefining Game Development</p>
            </div>
            <div className="post">
              <img src="https://d30j1zrnt1ixbk.cloudfront.net/blogs/post/maac/the-rise-of-vfx-and-animation-industry-in-india.jpg" alt="post3" />
              <p>
                Here to Stay: The Rise of the VFX and Animation Industry in India
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
