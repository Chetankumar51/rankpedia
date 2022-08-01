import React from 'react';
import '../style/Subjects.css';
import { BsCheckCircleFill } from "react-icons/bs";
import cardimg1 from '../assets/cards/physics1-img.jpg';
import cardimg2 from '../assets/cards/chemistry-img.jpg';
import cardimg3 from '../assets/cards/biology-img.jpg';
import cardimg4 from '../assets/cards/tubes-img.jpg';

const Subjects = () => {
  return (
    <div className='background-s' >



        <div className="container subjects-content ">
            <div className="row">
                    <h2 className='subjects-text' >Grade 8 CBSE: 6 Subjects, 256 Topics</h2>
                <div className="col-md-6 col-lg-3 main-card1">

                <div class="card card1 ">
                    <img src={cardimg1} class="card-img-top" alt="..." />
                    <div class="card-body body1 ">
                        <h4 class="card-title title1">Physics</h4>
                    </div>
                    </div>

                </div>

                <div className="col-md-6 col-lg-3 main-card1">

                    <div class="card card1 ">
                    <img src={cardimg2} class="card-img-top" alt="..." />
                    <div class="card-body body1 ">
                        <h4 class="card-title title1">Chemistry</h4>
                    </div>
                    </div>

                </div>

                <div className="col-md-6 col-lg-3 main-card1">

                    <div class="card card1 ">
                    <img src={cardimg3} class="card-img-top" alt="..." />
                    <div class="card-body body1 ">
                        <h4 class="card-title title1">Biology</h4>
                    </div>
                    </div>

                </div>

                <div className="col-md-6 col-lg-3 main-card1">

                    <div class="card card1 ">
                    <img src={cardimg4} class="card-img-top" alt="..." />
                    <div class="card-body body1 ">
                        <h4 class="card-title title1">Geography</h4>
                    </div>
                    </div>

                </div>

            </div>
        </div>


   {/* ===============================================================================================  */}



   <div className="container">
    <div className="row">

        <div className="col-md-6  pl-2">
            <div className='engaging'><BsCheckCircleFill />&nbsp; Engaging video based learning</div>
         </div>
            <div className="col-md-6  pl-2">
            <div className='engaging'><BsCheckCircleFill />&nbsp; Get doubts cleared instantly</div> 
        </div>
            <div className="col-md-6  pl-2">
            <div className='engaging'><BsCheckCircleFill />&nbsp; Download study materials</div>
         </div>
              <div className="col-md-6  pl-2">
            <div className='engaging'><BsCheckCircleFill />&nbsp; Create your own practice tests</div> 
        </div>
       
    </div>

    <div className='btn-4' >
    <button className='btn-2' >View Grade 8 Subscription plans</button>
    </div>

   </div>




    </div>
  )
}

export default Subjects