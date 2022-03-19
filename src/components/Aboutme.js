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
              I am currently studying <b>Computer Science</b> at{" "}
              <b> University of India </b>, with a focus in Computer
              applications and Artificial Intelligence.
            </p>
            <p>
              I'm into any sort of software development that requires
              creativity. My other areas of interest include machine learning
              and frontend development. I also like my fair share of visual arts
              and video editing. In my free time, I eat guava fruit and play
              video games. Here are some technologies I have been working with:
              <li>Javascript</li>
              <li>Python</li>
            </p>
          </span>
        </div>
        <div className="me-images">
          <img src="" className="me-image" />
        </div>
      </Fade>
    </div>
  );
}
