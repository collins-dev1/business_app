import React from "react";
import logo from "../src/images/logo2.png";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaLightbulb } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { TbBrandDatabricks } from "react-icons/tb";
import { MdBusiness } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

const Service = () => {
  return (
    <div>
      <div className="service-cont">
        <div className="service-cont2">
          <div className="header-logo">
            <img src={logo} />
            <h6>Expert Services</h6>
          </div>
          <div className="header-text">
            <h1>
              Build Bright{" "}
              <span>
                <i>Careers</i>
              </span>
            </h1>
          </div>
        </div>
        <div>
          <Button className="header-button">View All Services</Button>
        </div>
      </div>
      <div className="main-card-cont">
        <div className="card-cont">
        <>
          {[
            "Light",
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "20rem" }}
              className="mb-2"
            >
              <Card.Header>
                <div className="icon-circle">
                  <FaLightbulb  className="fs-3 text-light"/>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-start">Graphics Design</Card.Title>
                <Card.Text className="text-start">
                  Build a professional portfolio through hands-on design.

                  <div className="d-flex flex-row align-items-center gap-2 mt-3 fs-6 fw-bold">
                    Learn More <BsArrowRight className="fs-4" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            
          ))}
        </>
        <>
          {[
            "Light",
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "20rem" }}
              className="mb-2"
            >
              <Card.Header>
                <div className="icon-circle">
                  <TbBrandDatabricks className="fs-3 text-light"/>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-start">Data Science</Card.Title>
                <Card.Text className="text-start">
                  Learn data science techniques for smarter descisions.

                  <div className="d-flex flex-row align-items-center gap-2 mt-3 fs-6 fw-bold">
                    Learn More <BsArrowRight className="fs-4" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            
          ))}
        </>
        <>
          {[
            "Light",
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "20rem" }}
              className="mb-2"
            >
              <Card.Header>
                <div className="icon-circle">
                  <MdBusiness className="fs-3 text-light" />
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-start">Business</Card.Title>
                <Card.Text className="text-start">
                  Turn ideas into action with practical business knowledge.

                  <div className="d-flex flex-row align-items-center gap-2 mt-3 fs-6 fw-bold">
                    Learn More <BsArrowRight className="fs-4" />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            
          ))}
        </>
        <>
          {[
            "Light",
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "20rem" }}
              className="mb-2"
            >
              <Card.Header>
                <div className="icon-circle">
                  <GiTakeMyMoney className="fs-3 text-light" />
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title className="text-start">Financial</Card.Title>
                <Card.Text className="text-start">
                  Master finance skills for smart money decisions.

                  <div className="d-flex flex-row align-items-center gap-2 mt-3 fs-6 fw-bold">
                    Learn More <BsArrowRight className="fs-4" />
                  </div>
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

export default Service;
