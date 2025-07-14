import React from "react";
import logo from "../src/images/logo2.png";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import headerimg from "../src/images/headerimage.jpeg";
import certimg from "../src/images/cert.jpeg";
import seatimg from "../src/images/seat.jpeg";

const Testimony = () => {
  return (
    <div>
      <div className="work-title">
        <div className="header-logo">
          <img src={logo} />
          <h6>Testimonial</h6>
        </div>
        <div className="work-title2">
          <h1>
            <span>
              <i>100k+</i>
            </span>
            Happy Learner!
          </h1>
          <p>
            This platform transformed my learning experence - expert
            instructors, flexible<br></br> schedule,and practical skills I use
            daily now.
          </p>
          <Button className="header-button">
            Read Success Stories <BsArrowRight className="fs-4" />
          </Button>
        </div>
      </div>
      <div class="hero">
        <div class="collage">
          <img
            class="avatar"
            src="https://source.unsplash.com/200x200?sig=1"
            alt=""
          />
          <img
            class="avatar"
            src="https://source.unsplash.com/200x200?sig=2"
            alt=""
          />
          <img
            class="avatar"
            src="https://source.unsplash.com/200x200?sig=3"
            alt=""
          />
          <img
            class="avatar"
            src="https://source.unsplash.com/200x200?sig=4"
            alt=""
          />
          <img
            class="avatar"
            src="https://source.unsplash.com/200x200?sig=5"
            alt=""
          />
          <img
            class="avatar"
            src="https://source.unsplash.com/200x200?sig=6"
            alt=""
          />
          <img
            class="avatar"
            src="https://source.unsplash.com/200x200?sig=7"
            alt=""
          />
          <img
            class="avatar"
            src="https://source.unsplash.com/200x200?sig=8"
            alt=""
          />
          <img
            class="avatar"
            src="https://source.unsplash.com/200x200?sig=9"
            alt=""
          />

          <div class="card">
            <img
              src="https://source.unsplash.com/200x200?sig=21"
              alt="Richard Hodi"
            />
            <div class="info">
              <p class="name">Richard Hodi</p>
              <p class="role">Developer</p>
            </div>
          </div>
        </div>
        <div class="arrow">
          <svg viewBox="0 0 200 120">
            <path d="M0 0 C100 120 100 120 200 0" />
            <path d="M200 0 L190 20 M200 0 L210 20" />
          </svg>
        </div>
      </div>
      <p class="quote">
        "I had an amazing experience! The courses are well‑structured, easy to
        follow, and the instructors are truly helpful. I learned at my own pace
        and received a certificate that boosted my confidence. Highly
        recommended!"
      </p>{" "}
    </div>
  );
};

export default Testimony;
