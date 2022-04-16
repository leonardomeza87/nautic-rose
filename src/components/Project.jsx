import React from "react";

import { ReactComponent as SVGPicture } from "../images/image.svg";
import { ReactComponent as SVGWave } from "../images/wave.svg";
import { ReactComponent as SVGStar } from "../images/star.svg";
import { ReactComponent as SVGHeart } from "../images/heart.svg";

const Project = ({ image, title, description, rating, likes }) => {
  return (
    <div className="project">
      <div className="image">
        {image ? <img src={image} alt="" /> : <SVGPicture />}
      </div>

      <div className="text">
        <div className="separator">
          <SVGWave />
          <SVGWave />
        </div>
        <div className="container">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="extras">
            <div className="rating">
              <SVGStar />
              <span>{rating}/5</span>
            </div>
            <div className="likes">
              <SVGHeart />
              <span>{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
