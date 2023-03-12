import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import "./StyleSheets/hotAccessoriesMenu.css";

export default function HotAccessoriesMenu() {
  return (
    <div>
      <div>
        <Heading text="HOT ACCESSORIES" />
      </div>
      <div className="hotAccessoriesMenu">
        <Link className="HotAccessoriesLink" to="/HotAccessories/music">
          Music Store
        </Link>
        <Link className="HotAccessoriesLink" to="/HotAccessories/smartDevice">
          Smart Devices
        </Link>
        <Link className="HotAccessoriesLink" to="/HotAccessories/home">
          Home
        </Link>
        <Link className="HotAccessoriesLink" to="/HotAccessories/lifestyle">
          Lifestyle
        </Link>
        <Link
          className="HotAccessoriesLink"
          to="/HotAccessories/mobileAccessories"
        >
          Mobile Accessories
        </Link>
      </div>
    </div>
  );
}
