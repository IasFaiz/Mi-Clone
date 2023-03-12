import { BrandingWatermark } from "@mui/icons-material";
import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import "./StyleSheets/Slider.css";
export default function Slider({ start, end }) {
  return (
    <div>
      {start && (
        <Carousel fade>
          {start.map((e, index) => {
            return (
              <CarouselItem key={index}>
                <img className="d-block w-100" src={e} alt="First slide" />
              </CarouselItem>
            );
          })}
        </Carousel>
      )}
      {end && (
        <div>
          <Heading text="IN THE PRESS" />
          <Carousel fade>
            {end.map((e, index) => {
              return (
                <CarouselItem key={index}>
                  <div
                    className="carousel"
                    style={{
                      backgroundImage: `url("${e.image}")`,
                    }}
                  >
                    <p className="cname">{e.name} </p>
                    <p className="cdesc">{e.description} </p>
                    <p className="csource">{e.source} </p>
                  </div>
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
      )}
    </div>
  );
}
