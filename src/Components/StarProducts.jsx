import React from "react";
import Heading from "./Heading";
import "./StyleSheets/StarProducts.css";

export default function StarProducts({ starProduct }) {
  // console.log(starProduct);
  return (
    <div>
      <div className="starProduct">
        <div className="leftStarProduct">
          <a href={starProduct[0].url}>
            <img src={starProduct[0].image} alt="image 1" />
          </a>
        </div>
        <div className=" rightStarProduct">
          <div className="rightStarProduct1">
            <div className="rightStarProduct1up">
              <a href={starProduct[1].url}>
                <img src={starProduct[1].image} alt="image2" />
              </a>
              <a href={starProduct[2].url}>
                <img src={starProduct[2].image} alt="image3" />
              </a>
            </div>
            <div className="rightStarProduct1down">
              <a href={starProduct[3].url}>
                <img src={starProduct[3].image} alt="image4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
