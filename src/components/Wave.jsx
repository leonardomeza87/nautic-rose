import React from "react";

import { ReactComponent as WaveSVG } from "../images/wave.svg";

import StampVzla from "../images/stamp-vzla.png";
import StampWave from "../images/stamp-wave.png";
import StampPost from "../images/stamp-post.png";
import StampMail from "../images/stamp-mail.png";

const Wave = ({ inverted, stamp, left, rotation }) => {
  let source = StampPost;

  switch (stamp) {
    case "vzla":
      source = StampVzla;
      break;
    case "wave":
      source = StampWave;
      break;
    case "post":
      source = StampPost;
      break;
    case "mail":
      source = StampMail;
      break;
    default:
      source = StampPost;
  }

  return (
    <div className={`wave ${inverted ? "inverted" : ""}`}>
      <WaveSVG />
      <img
        src={source}
        alt="Stamp"
        className={`${left ? "left" : "right"} ${
          rotation === "positive" ? "positive-rotation" : "negative-rotation"
        } ${inverted ? "bottom" : "top"} ${stamp === "wave" ? "small" : ""} ${
          stamp === "mail" ? "no-rotation right-short" : ""
        }`}
      />
    </div>
  );
};

export default Wave;
