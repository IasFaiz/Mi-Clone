import React from "react";
import "./StyleSheets/HotAccessories.css";
export default function HotAccessories({
  hotAccessories,
  hotAccessoriesCover,
}) {
  // console.log("hotAccessories...", hotAccessories);
  // console.log("hotAccessoriesCover...", hotAccessories);
  return (
    <div className="HotAccessories">
      <div className="coverImage">
        <img src={hotAccessoriesCover} alt="Cover Image" />
      </div>
      <div className="Images">
        {hotAccessories &&
          hotAccessories.slice(0, 5).map((e, idx) => {
            return (
              <div className="card" key={idx}>
                <img
                  src={e.image}
                  alt={`image ${idx + 1}`}
                  className="imagee"
                />
                <p className="name">{e.name}</p>
                <p className="price">{e.price}</p>
              </div>
            );
          })}
        <div className="card">
          <img
            src="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"
            alt={`image `}
            className="imagee"
          />
        </div>
      </div>
    </div>
  );
}
