import React from "react";
import "./Training.css";
import { Link } from "react-router-dom";
import Moon from "../Assets/moon.jpg";
import Pod from "../Assets/pod.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          through training is necessity when traveling to space , we offer all
          inclusive training for pre-flight and in-flight scenarios.
        </p>
        <Link to="/contact">
          <button className="btn">contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Moon} alt="" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={Pod} alt="" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
