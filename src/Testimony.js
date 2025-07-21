import React from "react";
import logo from "../src/images/logo2.png";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import headerimg from "../src/images/headerimage.jpeg";
import certimg from "../src/images/cert.jpeg";
import seatimg from "../src/images/seat.jpeg";
import test1 from "../src/images/test1.jpeg";
import test2 from "../src/images/test2.jpeg";
import test3 from "../src/images/test3.jpeg";
import test4 from "../src/images/test4.jpeg";
import test5 from "../src/images/test5.jpeg";
import test6 from "../src/images/test6.jpeg";
import { PiArrowBendLeftUpThin } from "react-icons/pi";

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
      <div className="main-cardcont">
        <div className="grid-one">
          <div>
            <img src={test1} />
          </div>
          <div>
            <img src={test2} />
          </div>
          <div>
            <img src={certimg} />
          </div>
          <div>
            <img src={test4} />
          </div>
        </div>
        <div className="grid-two">
          <div>
            <img src={test5} />
          </div>
          <div className="grid-card">
            <div className="gridcard-imgg">
              <img src={test2} />
            </div>
            <div className="gridcard-text">
              <h3>Richard Hodi</h3>
              <p>Developer</p>
            </div>
          </div>
          <div>
            <img src={test1} />
          </div>
        </div>
        <div className="grid-three">
          <div>
            <img src={test2} />
          </div>
          <div>
            <img src={test4} />
          </div>
          <div>
            <img src={seatimg} />
          </div>
          <div>
            <img src={certimg} />
          </div>
        </div>
      </div>
      <div className="arroww">
        <PiArrowBendLeftUpThin className="icon" />

      </div>
      <div className="text-quote">
        <p class="quote">
          "I had an amazing experience! The courses are well‑structured, easy to
          follow, and the instructors are truly helpful. I learned at my own
          pace and received a certificate that boosted my confidence. Highly
          recommended!"
        </p>{" "}
      </div>
    </div>
  );
};

export default Testimony;
