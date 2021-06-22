import React from "react";
import profile from "../images/profile.jpg";
import video from "../images/momkai.mp4";

function ProgressBar(props) {
  return (
    <div className="progress">
      <div className="boxes">
        <img src={profile} className="small-img" />
        <video src={video} loop autoPlay="autoplay" muted></video>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div
        className="progress-inner"
        style={{ transform: `scaleX(${props.score / 10})` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
