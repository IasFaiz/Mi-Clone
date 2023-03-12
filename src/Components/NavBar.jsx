import React from "react";
import "./StyleSheets/NavBar.css";
import { logo } from "../data/data.json";
import SearchIcon from "@mui/icons-material/Search";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="leftNav">
        <div className="logo">
          <a href="/">
            <img id="logoImage" src={logo} alt="Not" />
          </a>
        </div>

        <a className="navlinks" href="/#miphones">
          Mi Phones
        </a>
        <a className="navlinks" href="/#redmiphones">
          Redmi Phones
        </a>
        <a className="navlinks" href="/#tv">
          TV
        </a>
        <a className="navlinks" href="/#laptops">
          Laptops
        </a>
        <a className="navlinks" href="/#lifestyle">
          Fitness & Lifestyle
        </a>
        <a className="navlinks" href="/#home">
          Home
        </a>
        <a className="navlinks" href="/#audio">
          Radio
        </a>
        <a className="navlinks" href="/#accessories">
          Accessories
        </a>
      </div>
      <div className="rightNav">
        <div className="searchbox">
          <input type="text" name="search" placeholder="Search Products" />
        </div>
        <SearchIcon sx={{ color: "#757575" }} fontSize="small" />
      </div>
    </div>
  );
}
