import React from "react";
import Offer from "./Offer";
import "./StyleSheets/Offer.css";

export default function Offers({ offer }) {
  //   console.log(offer);
  return (
    <div className="offers">
      {offer.map((e, index) => {
        return <Offer key={e.image} index={index} src={e.image} link={e.url} />;
      })}
    </div>
  );
}
