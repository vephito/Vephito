import React from "react";
import FadeIn from "react-fade-in";
import "../styles/about.css";
import Fade from "react-reveal/Fade";

export default function Aboutme() {
  return (
    <div className="about">
      <Fade bottom>
        <div className="about-tit-des">
          <span className="about-title">about me</span>
          <span className="about-desc">
            <p>
              I have completed my Bachelor degree in <b>Computer Application</b>{" "}
              at <b> Patkai Christian College </b> and will be undertaking my
              Masters in <b>Computer Application</b> at <b>Kristu Jayanti</b>
            </p>
            <p>
              My interest include machine learning and frontend development. In
              my free time i play a lot of video games. Here are some
              technologies I have been working with:
              <li>Javascript</li>
              <li>Python</li>
              <li>React.js</li>
              <li>HTML & CSS</li>
            </p>
          </span>
        </div>

        <div className="me-images">
          {/*<img src="./images/me1.jpg" className="me-image" />*/}
        </div>
      </Fade>
    </div>
  );
}
