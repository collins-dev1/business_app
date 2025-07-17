import React from "react";
import logo from "../src/images/logo2.png";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import headerimg from "../src/images/headerimage.jpeg";
import certimg from "../src/images/cert.jpeg";
import seatimg from "../src/images/seat.jpeg";
import test1 from "../src/images/test1.jpeg";
import test2 from '../src/images/test2.jpeg';
import test3 from '../src/images/test3.jpeg';
import test4 from "../src/images/test4.jpeg";
import test5 from "../src/images/test5.jpeg";
import test6 from "../src/images/test6.jpeg";

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
            src={test1}
            alt=""
          />
          <img
            class="avatar"
            src={test2}
            alt=""
          />
          <img
            class="avatar"
            src={test3}
            alt=""
          />
          <img
            class="avatar"
            src={test4}
            alt=""
          />
          <img
            class="avatar"
            src={test5}
            alt=""
          />
          <img
            class="avatar"
            src={test6}
            alt=""
          />
          <img
            class="avatar"
            src={test1}
            alt=""
          />
          <img
            class="avatar"
            src={test3}
            alt=""
          />
          <img
            class="avatar"
            src={test4}
            alt=""
          />

          <div class="card" id="card">
            <img
              src={test2}
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
      <div className="text-quote">
        <p class="quote">
        "I had an amazing experience! The courses are well‑structured, easy to
        follow, and the instructors are truly helpful. I learned at my own pace
        and received a certificate that boosted my confidence. Highly
        recommended!"
      </p>{" "}
      </div>
    </div>
  );
};

export default Testimony;
