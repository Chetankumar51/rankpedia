import React, { Component, useState } from "react";
// import { courosolData } from "../helper/sampleData/corusol";
import "../style/Sliderp.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Cards from "./cards/Cards";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import Cards from "./Cards";

const data=[1,2,3,4,5,6,7,8]
let sampleData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: "Learn with ease and prepare extensively with our support.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: "Learn with ease and prepare extensively with our support.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1613742743080-a59851f3008d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      text: "Learn with ease and prepare extensively with our support.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      text: "Learn with ease and prepare extensively with our support.",
    }, {
        id: 5,
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "Learn with ease and prepare extensively with our support.",
      },
      {
        id: 6,
        img: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "Learn with ease and prepare extensively with our support.",
      },
      {
        id: 7,
        img: "https://images.unsplash.com/photo-1613742743080-a59851f3008d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        text: "Learn with ease and prepare extensively with our support.",
      },
      {
        id: 8,
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        text: "Learn with ease and prepare extensively with our support.",
      },
  ];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
    <BsChevronRight
      className={className}
      style={{ ...style,color:"green" }}
      onClick={onClick}
    />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={{height:"40px"}}>
      <BsChevronLeft
        className={className}
        style={{ ...style,color:"green",marginTop:"-40%"}}
        onClick={onClick}
      />
    </div>
  );
}

export default class Sliderp extends Component {
  render() {
    const settings = {
      dots: false,
      draggable: true,
      swipe: true,
      touchMove: true,
      easing: "linear",
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      swipeToSlide:true,
      slidesToScroll: 1,
      initialSlide: 0.5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <BsChevronRight />,
            prevArrow: <BsChevronLeft />,
            arrows: true,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        
      ],
    };
    return (
      <div style={{ width: "85%", margin: "auto" }}>
        <h2>Custom Arrows</h2>
        <Slider {...settings} style={{ margin: "auto" }}>
        {/* <Cards />
         */}
         {sampleData?sampleData.map(val=><Cards value={val}/>):""}
        </Slider>
      </div>
    );
  }
}