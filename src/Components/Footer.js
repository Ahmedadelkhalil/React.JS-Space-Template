import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation
              size={20}
              style={{ marginRight: "2rem", color: "#fff" }}
            />
            <div>
              <p>123 acme st.</p>
              <h4>Houston TX</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ marginRight: "2rem", color: "#fff" }}
              />
              1-800-123-1234
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ marginRight: "2rem", color: "#fff" }}
              />
              trips@galaxy.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ad
            a sequi expedita assumenda quia in, exercitationem dolores deserunt
            asperiores sit excepturi iure aliquam ea sunt corporis numquam
            reprehenderit at."
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ marginRight: "1rem", color: "#fff" }}
            />
            <FaTwitter
              size={30}
              style={{ marginRight: "1rem", color: "#fff" }}
            />
            <FaLinkedin
              size={30}
              style={{ marginRight: "1rem", color: "#fff" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
