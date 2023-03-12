import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Heading from "./Heading";
import "./StyleSheets/Video.css";

export default function Video({ videos }) {
  return (
    <div>
      <Heading text="VIDEOS" />
      <div className="videoCardList">
        {videos.map((e, idx) => {
          return (
            <div
              key={idx}
              className="videoCard"
              style={{
                backgroundImage: `url("${e.image}")`,
              }}
            >
              <div className="playButton">
                <a href="">
                  <PlayArrowIcon />
                </a>
              </div>
              <p>{e.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
