import React from "react";
import Heading from "./Heading";
import "./StyleSheets/ProductReviews.css";

export default function ProductReviews({ productReviews }) {
  return (
    <div>
      <Heading text="PRODUCT REVIEWS" />
      <div className="productReviews">
        {productReviews.map((e, idx) => {
          return (
            <div className=" Item" key={idx}>
              <img src={e.image} alt={`Image ${idx}`} className="image" />
              <h3 className="heading">{e.review}</h3>
              <div className="p">
                <p className="price">{e.name}</p>
                <p className="name">{e.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
