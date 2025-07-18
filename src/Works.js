import React from "react";
import logo from "../src/images/logo2.png";
import headerimg from "../src/images/headerimage.jpeg";
import certimg from "../src/images/cert.jpeg";
import seatimg from "../src/images/seat.jpeg";

const Works = () => {
  return (
    <div>
      <div className="work-title">
        <div className="header-logo">
          <img src={logo} />
          <h6>900+ Course</h6>
        </div>
        <div className="work-title2">
          <h1>
            How it's{" "}
            <span>
              <i>work?</i>
            </span>
          </h1>
          <p>
            Choose a course, enroll easy, start learning anytime with expert{" "}
            <br></br> guidance and flexible schedule.
          </p>
        </div>
      </div>
      <div className="main-card-holder">
        <div className="work-card">
          <div className="carder">
            <div className="card-img">
              <img src={headerimg} />
            </div>
            <div className="card-text">
              <h5>Find your Course</h5>
              <p>
                Browse top-rated courses to match your interest, goals, and
                skill level today.
              </p>
            </div>
          </div>
          <div className="carder">
            <div className="card-img">
              <img src={seatimg} />
            </div>
            <div className="card-text">
              <h5>Book A Seat</h5>
              <p>
                Enroll in your chosen course quickly with easy booking and
                instant confirmation system.
              </p>
            </div>
          </div>
          <div className="carder">
            <div className="card-img">
              <img src={certimg} />
            </div>
            <div className="card-text">
              <h5>Get Certificate</h5>
              <p>
                Complete the course successfully and recieve a certificate to
                showcase your achivement proudly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
