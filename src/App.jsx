import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import Courses from './screens/courses/Courses'
import AboutUs from './screens/about/AboutUs';
import StudentsWorld from './screens/studentsWorld/StudentsWorld';
import Events from './screens/events/Events'
import PartnerWithMaac from './screens/partnerWithMaac/PartnerWithMaac'
import LocateCentre from './screens/locateCentre/LocateCentre'
import ContactUs from './screens/contactUs/ContactUs'
import Blog from './screens/blog/Blog'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <BrowserRouter>
        <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/studentsworld" element={<StudentsWorld />} />
          <Route path="/events" element={<Events />} />
          <Route path="/partnerwithmaac" element={<PartnerWithMaac />} />
          <Route path="/locatecentre" element={<LocateCentre />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Form />
        <Footer />
      </BrowserRouter>,

    </>
  )
}

export default App
