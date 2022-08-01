import React from 'react';
import '../style/Prepare.css';
import praimg1 from '../assets/symbols/Group 45.png';
import praimg2 from '../assets/symbols/Group 47.png';
import praimg3 from '../assets/symbols/Group 48.png';
import playicon1 from '../assets/imgs/play-circle copy.svg'
import crownw from '../assets/imgs/crown-white.png';
import radimg1 from '../assets/cards/men-1.jpg';


const Prepare = () => {


  let prepare = [
    {
      id:1,
      img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      text:'Learn with ease and prepare extensively with our support.',
      titleh:"Top Ranker",
      titlep:"xyz"
    },
    {
      id:2,
      img:'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      text:'Learn with ease and prepare extensively with our support.',
      titleh:"Top Ranker",
      titlep:"xyz"
    },
    {
      id:3,
      img:'https://images.unsplash.com/photo-1613742743080-a59851f3008d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
      text:'Learn with ease and prepare extensively with our support.',
      titleh:"Top Ranker",
      titlep:"xyz"
    },
    {
      id:4,
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
      text:'Learn with ease and prepare extensively with our support.',
       titleh:"Top Ranker",
      titlep:"xyz"
    }
  ]


  

  return (
    <div className='prepare-body' >



         <div className="container prepare-content ">
            <div className="row">     
                    <p className='prepare-text' >Prepare with Grade 8 CBSE tutors</p>
      
      {prepare.map((val,id)=>{
        
             return (
         
            <div className="col-md-6 col-lg-3 Prepare-data">
                <div className="card cardp ">
                  <img src={val.img} className="img-main card-img-top" alt={val.text} /> 
                  <img src={crownw} className='crown-white' alt="" />

                  <div className="icons-con">
                  <div><p style={{fontSize:"20px",fontWeight:"500"}} >{val.titleh}</p>
                  <p>{val.titlep}</p>
                  </div>  
                   <div><img className='playicon' src={playicon1} alt="" /></div> 
                </div>

                    <div className="card-body bodyp ">
                        <h4 className="card-title titlep">{val.text}</h4>
                    </div>
                </div>
            </div> 
  
          )
         
        })}

        </div>
          </div>




{/* ==========================================================================================    */}



<div className="container">
  <div className="row">

    <div className="col-md-7">

        <div className="chatbox">
            <div className="mes-row">

              <div className="mes-text">
                  <p className='content-first'>Lorem ipsmr dolor!</p>
                  <p className='content-second'>Sed ut perspiciatis undes setlami</p>
              </div>
              <span className='contentimg-1' ><img src={radimg1} className='radimg1' alt="" /></span>
            </div>
        </div>





          {/* <div className="col sed ">
            <div className="sed-content">
              <p className='content-first'>Lorem ipsmr dolor!</p>
              <p className='content-second'>Sed ut perspiciatis undes setlami</p>
            </div>
              <span className='contentimg-1' ><img src={radimg1} className='radimg1' alt="" /></span>
          </div>

            <div className="sed1">
            <span className='contentimg-1' ><img src={radimg1} className='radimg1' alt="" /></span>
              <div className="sed-content-1">
              <p className='content-first'>Lorem ipsmr dolor!</p>
              <p className='content-second'>Sed ut perspiciatis undes setlami</p>
              </div>
            </div> */}


        
    </div>

    <div className="col-md-5">
            <div className="rankpe-content">
              <h2>Get live mentoring & doubt support</h2>
              <p>Learn with ease and prepare extensively with RankPedia  to stay ahead of the learning curve and exceed expections.</p>
            </div>
      </div>

  </div>
</div>





{/* =========================================   cards   =============================================  */}


<div className="container main-content">
  <div className="row">
    <div className="col-md-6 col-lg-4 b-1">

                <div className="practice-1">
                  <div className="practice prc-color1">
                  <div className='img-cont' ><img src={praimg1} alt="" /></div> 
                  <h3 className='prc' >Practice</h3>
                  <p className='prc-p'>Learning has never been easier.</p>
                    </div>
                </div>
              </div>
       

          <div className="col-md-6 col-lg-4 b-1">

                 <div className="practice-1">
                      <div className="practice prc-color2">
                      <div className='img-cont' ><img src={praimg2} alt="" /></div> 
                      <h3 className='prc' >Ask</h3>
                      <p className='prc-p'>Learning has never been easier.</p>
                      </div>
                 </div>

           </div>


    <div className="col-md-6 col-lg-4">

                <div className="practice-1">
                      <div className="practice prc-color3">
                      <div className='img-cont' ><img src={praimg3} alt="" /></div> 
                      <h3 className='prc' >Learn</h3>
                      <p className='prc-p'>Learning has never been easier.</p>
                      </div>
                 </div>

    </div>
  </div>
</div>






    </div>
  )
}

export default Prepare