import React from "react";
import "./StyleSheets/Heading.css";

export default function Heading({ text }) {
  return (
    <div className="Heading">
      <div></div>
      <p>{text}</p>
      <div></div>
    </div>
  );
}
