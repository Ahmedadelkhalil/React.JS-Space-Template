import React from "react";
import "./Video.css";
import { Link } from "react-router-dom";
import spaceVideo from "../Assets/space.mp4";

const Vidoe = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Galaxy Travel</h1>
        <p>worlds first civilian space travel</p>

        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/contact" className="btn btn-light">
            launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vidoe;
