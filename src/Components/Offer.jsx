import React from "react";
import "./StyleSheets/Offer.css";

export default function Offer({ link, src, index }) {
  //   console.log(props);
  return (
    <div className="offer">
      <a href={link}>
        <img src={src} alt={`${index} offer`} />
      </a>
    </div>
  );
}
