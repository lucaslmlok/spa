import { FaSpa } from "react-icons/fa";
import React, { Component } from "react";
import Map from "../components/Map";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-center">
          <div className="company-info">
            <div className="company-logo">
              <span className="company-icon">
                <FaSpa />
              </span>
              <span className="company-name">Spa Island Resort</span>
            </div>
            <div className="company-details">
              <div className="company-details-item">
                <div>Address:</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ultrices dolor sed faucibus luctus. Quisque.
                </p>
              </div>
              <div className="company-details-item">
                <div>Tel:</div>
                <p>(+852)1234 5678</p>
              </div>
              <div className="company-details-item">
                <div>Email:</div>
                <p>contact@spaisland.com</p>
              </div>
            </div>
            <div className="social-media">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="social-media-icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-media-icon" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-media-icon" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="social-media-icon" />
              </a>
            </div>
          </div>
          <div className="company-map">
            <Map
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDFG_3PF0hFGfh6WJ2zgRdmBaG04mX882o"
              }
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}
