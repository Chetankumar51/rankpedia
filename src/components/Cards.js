import React from "react";
import "../style/Prepare.css";

const Cards = (props) => {
  const {id,img,text}=props.value

  return (
    <div>
        <div className="card cardp">
          <img src={img} className="card-img-top" alt={text} />
          <div className="card-body bodyp ">
            <h4 className="card-title titlep">{text}</h4>
          </div>
        </div>
    </div>
  );
};

export default Cards;
