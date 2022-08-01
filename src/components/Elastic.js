import React from 'react';
import '../style/Notes.css';
import Carousel from 'react-elastic-carousel';
import boximg1 from '../assets/symbols/Group 45.png';
import boximg2 from '../assets/symbols/Group 47.png';
import boximg3 from '../assets/symbols/Group 48.png';
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";


const Elastic = () => {


    let notes = [
        {
          id:1,
          img:boximg1,
          headline:'Revesion Notes',
          subject:"Physics",
          paragraph:"Learn with ease and prepare extensively with us"
        },
        {
          id:2,
          img:boximg2,
          headline:'Revesion Notes',
          subject:"Maths",
          paragraph:"Learn with ease and prepare extensively with us"
        },
        {
          id:3,
          img:boximg3,
          headline:'Revesion Notes',
          subject:"Geography",
          paragraph:"Learn with ease and prepare extensively with us"
        }
      ]
    

      const breakpoints = [
        {width:500, itemsToShow:1},
        {width:768, itemsToShow:1},
        {width:1200, itemsToShow:1},
      ]

  return (
    <div className='elastic' >
        <div className="container revesion1">
            {/* <div className="row"> */}

            {notes.map((val,id)=>{
                return (
              <Carousel breakPoints={breakpoints} >

                       <div key={val.id}
                        // className="col-lg-4 col-md-6"
                        >

                               <div className="box1">
                                    <p className='text1' > <BsFillFileEarmarkPdfFill />{val.headline}</p>
                                    <img src={val.img} className='boximg'  alt="" />
                                    <h4 className='text2' >{val.subject}</h4>
                                    <h5 className='text3'>{val.paragraph}</h5>
                                </div>

                        </div>
                 </Carousel>

                )
            })}


                




              {/* </div> */}
          </div>
    </div>
  )
}

export default Elastic