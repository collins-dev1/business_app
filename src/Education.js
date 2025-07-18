import React from "react";
import headerimg from "../src/images/headerimage.jpeg";
import { FaDesktop } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Card from "react-bootstrap/Card";

const Education = () => {
  const cards = [
    {
      icon: <FaDesktop />,
      title: "900+ course",
      text: "Explore 900+ expert courses to grow your skills fast.",
    },
    {
      icon: <FaDesktop />,
      title: "100k+ happy learner",
      text: "Join over 100,000 students transforming their careers today.",
    },
    {
      icon: <FaDesktop />,
      title: "Free Certificates",
      text: "Get certified for free after completing each online course.",
    },
    {
      icon: <FaStar />,
      title: "4.9/5 Average rating",
      text: "Trusted by learners worldwide with excellent satisfaction score.",
    },
  ];

  return (
    <div className="educate-wrapper">
      <div className="educate-container">
        {/* Image section */}
        <div className="educate-image-wrapper">
          <img src={headerimg} alt="header" className="educate-image" />
          <h1 className="educate-title">
            Educate For <span>Success</span>
          </h1>
        </div>

        {/* Card box section */}
        <div className="educate-card-box">
          {cards.map((card, index) => (
            <div className="educate-card" key={index}>
              <div className="card-icon">{card.icon}</div>
              <div className="card-text">
                <h5>{card.title}</h5>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
