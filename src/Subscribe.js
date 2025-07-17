import React from "react";
import illus from "../src/images/illustration.png";
import { Button } from "react-bootstrap";

const Subscribe = () => {
  return (
    <div>
      <div className="sub-cont">
        <div className="sub-img">
            <img src={illus} />
        </div>
        <div className="sub-text">
          <h4>Stay Updated with New Courses & Offers</h4>
          <p>
            Join our newsletter to receive the latest course update, expert
            learning tips, exclusive discounts, and valuable resources that help
            you grow your skills every week.
          </p>
          <div className="sub-form">
            <input type="text" id="in" className="form-control" placeholder="Enter your email"/>
            <Button className="cta-button2">Subscribe Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
