import React from 'react';
import '../style/Navbar.css';
import img1 from '../assets/imgs/IMG-20210322-WA0003-removebg-preview.png';
import downicon from '../assets/imgs/Shape Copy 9.png';
import crown from '../assets/imgs/crown.png'

const Navbar = () => {
  return (
<div className='background-img' >

<header className="header-wrapper" >
<nav className="navbar navbar-expand-lg navbar1">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={img1} className="img-fluid img1" alt="logo" />
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars-staggered navbar-toggler-icon color-change"></i>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav menu-navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#home">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#about">For Students <span><img src={downicon} alt="" /></span> </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">For Schools</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pricing">Why Rankpedia</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#reviews">Subscription</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#brands">Quizwizz <span className='crown-img' > <img src={crown} alt="" /> </span> </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#brands">Contact us</a>
          </li>
          <button className='rectangle-copy-9' ><a className='login' >Login</a></button>
        </ul>

        {/* <ul className="navbar-nav" >
            <li className="nav-item text-center">
                <a className="nav-link learn-more-btn btn-extra-header" href="#contact">Contacts</a>
            </li>
              <li className="nav-item text-center">
                <a className="nav-link learn-more-btn" href="#contact">Free Trial</a>
              </li>
        </ul> */}

      </div>
    </div>
  </nav>

            <div className="content">
                <p className='mb-0 '>Grade 8</p>
                <p>Math, Physics, Chemistry, Biology</p>
                <p className='syllabus' >Check out the syllabus & download study material</p>
                <button className='btn-grade' >Grade 8 - CBSE  <img className='left-s' src={downicon} style={{height:"14px",marginLeft:"90px"}} alt="" />  </button>
                {/* <div className="dropdown show btn-grade">
                    <a className="btn btn-grade dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Grade 8 - CBSE
                    </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div> */}

            </div>
</header>

    </div>
  )
}

export default Navbar