import React from 'react';
import '../style/practice.css';
import img1 from '../assets/cards/biology-img.jpg';
import playicon from '../assets/imgs/play-cir.svg'

const Practice = () => {
  return (
    <div className='container main-contentdata' >
        <div className="img-content">
            
            <div className="img-backg">
                <img src={img1} alt="" />
                <div className="icons-con">
                  <div><p style={{fontSize:"20px",fontWeight:"500"}} >Top Ranker</p>
                  <p>xyz</p>
                  </div>  
                    {/* <i class="bi bi-play-circle"></i> */}
                   <div><img className='playicon' src={playicon} alt="" /></div> 
                </div>

                <div className="data">
                    <p>Learn with ease and prepare extensively with our support</p>
                </div>
            </div>


            <div className="img-backg">
                <img src={img1} alt="" />
                <div className="icons-con">
                <div><p style={{fontSize:"20px",fontWeight:"500"}} >Top Ranker</p>
                  <p>xyz</p>
                  </div> 
                    {/* <i class="bi bi-play-circle"></i> */}
                   <div><img className='playicon' src={playicon} alt="" /></div> 
                </div>

                <div className="data">
                    <p>Learn with ease and prepare extensively with our support</p>
                </div>
            </div>

            <div className="img-backg">
                <img src={img1} alt="" />
                <div className="icons-con">
                <div><p style={{fontSize:"20px",fontWeight:"500"}} >Top Ranker</p>
                  <p>xyz</p>
                  </div>  
                    {/* <i class="bi bi-play-circle"></i> */}
                   <div><img className='playicon' src={playicon} alt="" /></div> 
                </div>

                <div className="data">
                    <p>Learn with ease and prepare extensively with our support</p>
                </div>
            </div>


            <div className="img-backg">
                <img src={img1} alt="" />
                <div className="icons-con">
                <div><p style={{fontSize:"20px",fontWeight:"500"}} >Top Ranker</p>
                  <p>xyz</p>
                  </div> 
                    {/* <i class="bi bi-play-circle"></i> */}
                   <div><img className='playicon' src={playicon} alt="" /></div> 
                </div>

                <div className="data">
                    <p>Learn with ease and prepare extensively with our support</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Practice