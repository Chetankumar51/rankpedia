import React from 'react';
import '../style/Notes.css';
import boximg1 from '../assets/symbols/Group 45.png';
import boximg2 from '../assets/symbols/Group 47.png';
import boximg3 from '../assets/symbols/Group 48.png';
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

const Notes = () => {
  return (
    <div className='background-C' >


        <div className="container revesion">
            <div className="row">
                <div className="col-lg-8 col-sm-12 sample-data">
                    Grade 8 CBSE Video tutorials & revision notes (sample below)
                </div>
                <div className="col-lg-4 col-sm-12 btn-study">
                    <button>Download study material</button>
                </div>
            </div>
        </div>

        <div className="container revesion1">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                        <div className="box1">
                            <p className='text1' > <BsFillFileEarmarkPdfFill /> Revesion Notes</p>
                            <img src={boximg1} className='boximg'  alt="" />
                            <h4 className='text2' >Physics</h4>
                            <h5 className='text3'>Learn with ease and prepare extensively with us</h5>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6">
                <div className="box1">
                            <p className='text1' > <BsFillFileEarmarkPdfFill /> Revesion Notes</p>
                            <img src={boximg2} className='boximg'  alt="" />
                            <h4 className='text2' >Maths</h4>
                            <h5 className='text3'>Learn with ease and prepare extensively with us</h5>
                        </div>
                </div>

                <div className="col-lg-4 col-md-6">
                <div className="box1">
                            <p className='text1' > <BsFillFileEarmarkPdfFill /> Revesion Notes</p>
                            <img src={boximg3} className='boximg'  alt="" />
                            <h4 className='text2' >Geography</h4>
                            <h5 className='text3'>Learn with ease and prepare extensively with us</h5>
                        </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Notes