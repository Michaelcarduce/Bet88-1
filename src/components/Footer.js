import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="special-footer">
      <div className="footer dualCompartment2080 ptb40">
        <div className="leftHorizontalLayout">
          <a href="#">
            <img
              className="logo"
              src="/assets/logo.png"
              alt="PANALOBET Logo"
              title="PANALOBET Logo"
            />
          </a>
        </div>
        <div className="rightHorizontalLayout stackedLayout">
          <div className="mb10">
            <Link
              to="/"
              target="_blank"
              className="footerlinks footerdescriptions colorSec">
              Licensing
            </Link>
            <Link
              to="/"
              target="_blank"
              className="footerdescriptions colorSec">
              Terms and Conditions
            </Link>
            <Link
              to="/"
              target="_blank"
              className="footerdescriptions colorSec">
              Privacy Policy
            </Link>
            <Link
              to="/"
              target="_blank"
              className="footerdescriptions colorSec">
              Responsible Gaming
            </Link>
            <Link
              to="/"
              target="_blank"
              className="footerdescriptions colorSec">
              About us
            </Link>
          </div>
          <div className="mb10">
            <span className="footerdescriptions colorReg1">
              © 2023 All Rights Reserved by
              <Link to="/" target="_blank" className="colorSec pl10">
                Mega Cricket World Philippines
              </Link>
            </span>
          </div>
          <div>
            <Link
              to="/"
              target="_blank"
              className="footerdescriptions colorSec">
              Panalobet Casino Philippines
            </Link>
            <Link
              to="/"
              target="_blank"
              className="footerdescriptions colorSec">
              Panalobet Live
            </Link>
            <Link
              to="/"
              target="_blank"
              className="footerdescriptions colorSec">
              Panalobet Bangladesh
            </Link>
            <Link
              to="/"
              target="_blank"
              className="footerdescriptions colorSec">
              Panalobet Philippines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
