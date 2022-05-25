import React from "react";
import shoeImage from "../Images/background-image.png";
import jordan from "../Images/jordan.png";

function Landing() {
  return (
    <div className="landing-container">
      <div className="header-container">
        <h1 className="slogan">
          If you quit once it becomes a habit,NEVER QUIT!
          <sub className="sub-slogan">
            <em>-micheal jordan</em>
          </sub>
        </h1>
        <img src={shoeImage} className="shoe-img" alt="" />
      </div>

      <div className="bottom-container">
        <img src={jordan} className="jordan-img" alt="" />
        <h1 className=" jordan-slogan">
          I can accept failures but i can't accept not trying
          <sub className="sub-slogan">
            <em> -micheal jordan</em>
          </sub>
        </h1>
      </div>
    </div>
  );
}

export default Landing;
