import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../style/Notes.css';
import boximg1 from '../assets/symbols/Group 45.png';
import boximg2 from '../assets/symbols/Group 47.png';
import boximg3 from '../assets/symbols/Group 48.png';
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";


export default function App(){
    
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
          


        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
            <div className='elastic1' >
            <div className="revesion2">
                {/* <div className="row"> */}
    <Slider {...settings} >

    {notes.map((val,id)=>{
                    return (
    
                           <div key={val.id}
                            // className="col-lg-4 col-md-6"
                            >
    
                                   <div className="box2">
                                        <p className='text5' > <BsFillFileEarmarkPdfFill />{val.headline}</p>
                                        <img src={val.img} className='boximg'  alt="" />
                                        <h4 className='text3' >{val.subject}</h4>
                                        <h5 className='text4'>{val.paragraph}</h5>
                                    </div>
    
                            </div>
    
                    )
                })}
    </Slider>
    
    
                    
    
    
    
    
                  {/* </div> */}
              </div>
        </div>
        )
}