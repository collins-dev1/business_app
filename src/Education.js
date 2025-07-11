import React from "react";
import headerimg from "../src/images/headerimage.jpeg";
import { FaDesktop } from "react-icons/fa6";
import Card from "react-bootstrap/Card";

const Education = () => {
  return (
    <div>
      <div className="educate-box">
        <div className="educate-img">
          <div className="header-text">
            <h1>
              Educate for{" "}
              <span>
                <i>Success</i>
              </span>
            </h1>
          </div>
          <img src={headerimg} />
        </div>
        <div className="edu-card">
          <>
            {["Light"].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                className="mb-2"
                style={{ width: "20rem" }}
              >
                <div className="icon-circle">
                  <FaDesktop className="fs-3 text-light" />
                </div>
                <Card.Body>
                  <Card.Title className="text-start">900 + course</Card.Title>
                  <Card.Text className="text-start">
                    Explore 900+ expert courses to grow your skills fast.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>

          <>
            {["Light"].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                className="mb-2"
                style={{ width: "20rem" }}
              >
                <div className="icon-circle">
                  <FaDesktop className="fs-3 text-light" />
                </div>
                <Card.Body>
                  <Card.Title className="text-start">100k + happy learner</Card.Title>
                  <Card.Text className="text-start">
                    Join over 100,000 students transforming their careers today.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
          <>
            {["Light"].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                className="mb-2"
                style={{ width: "20rem" }}
              >
                <div className="icon-circle">
                  <FaDesktop className="fs-3 text-light" />
                </div>
                <Card.Body>
                  <Card.Title className="text-start">Free Certificates</Card.Title>
                  <Card.Text className="text-start">
                    Get certified for free after completing each online course.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
          <>
            {["Light"].map((variant) => (
              <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                className="mb-2"
                style={{ width: "20rem" }}
              >
                <div className="icon-circle">
                  <FaDesktop className="fs-3 text-light" />
                </div>
                <Card.Body>
                  <Card.Title className="text-start">4.9/5 Average rating</Card.Title>
                  <Card.Text className="text-start">
                    Trusted by learners worldwide with excellent satisfaction score.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Education;
