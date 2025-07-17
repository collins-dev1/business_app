import React from "react";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SiLinkedin } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../src/images/logo2.png";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cont">
        <div className="footer-text">
          <div>
            <Navbar.Brand
              className="logo d-flex flex-row align-items-center gap-1"
              href="#"
            >
              <img src={logo} />
              <h5 className="footer-text1 fw-bold">Matt Zhang</h5>
            </Navbar.Brand>
          </div>
          <p>Learn new skills online and grow your<br></br> career with confidence.</p>
          <div className="footer-icons">
            <FaFacebook className="fs-5" />
            <PiInstagramLogoFill className="fs-5" />
            <SiLinkedin className="fs-5" />
            <BsTwitterX className="fs-5" />
          </div>
        </div>
        <div className="footer-links">
          <h6>Quick Link</h6>
          <ul>
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
            <li>Customer support</li>
          </ul>
        </div>
        <div className="footer-links">
          <h6>Support</h6>
          <ul>
            <li>Help center</li>
            <li>Feedback</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="footer-links">
          <h6>Get in Touch</h6>
          <ul>
            <li>
              <IoCall /> +234 706 766 8473
            </li>
            <li>
              <IoMdMail /> hello@gmail.com
            </li>
            <li>
              <FaLocationDot /> Santa maria plaza 33 Onitsha.
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className="copy-cont">
        <div className="copy">
            <FaRegCopyright className="mt-1" />
            <p>Copyright 2025 OG-COLLINS | All Right Reserved</p>
        </div>
        <div className="copy-text">
            <p>Privacy policy</p>
            <p>Terms of use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
