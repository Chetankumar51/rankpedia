import React from 'react';
import '../style/Footer.css';
import footerimg from '../assets/footer/Buttons.png';
import footericons from '../assets/footer/Social Copy.png'

const Footer = () => {
  return (
    <div className='footer-content' >

        <div className="container footer">
            <div className="row">


                <div className="col-sm-6 col-md-6 col-lg-2">
                        <div className='footer-1'>
                            <ul>
                                <p>Company</p>
                                <li>About us</li>
                                <li>Class/Courses</li>
                                <li>Study Material</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                </div>


                <div className="col-sm-6 col-md-6 col-lg-2">
                        <div className='footer-1'>
                            <ul>
                                <p>Product</p>
                                <li>For students</li>
                                <li>For teachers</li>
                                <li>For schools</li>
                            </ul>
                        </div>
                </div>


                <div className="col-sm-6 col-md-6 col-lg-2">
                        <div className='footer-1'>
                            <ul>
                                <p>Support</p>
                                <li>Contact us</li>
                                <li>Help desk</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-2">
                        <div className='footer-1'>
                            <ul>
                                <p>Terms & conditions</p>
                                <li>Privacy Policy</li>
                                <li>Course Policy</li>
                            </ul>
                        </div>
                </div>


                <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className='footer-1 img-footer'>
                            <ul>
                                <p className='right-content' >Download Our App from</p>
                                <div className='img-right' > <img src={footerimg} alt="" /> </div>
                                {/* <li>Course Policy</li> */}
                            </ul>
                        </div>
                </div>



            </div>
        </div>



        <div className='container footer-icons ' >
            <p>© 2021 Copyright, All Right Reserved</p>
            <div> <img src={footericons} alt="" /> </div>
        </div>
    </div>
  )
}

export default Footer