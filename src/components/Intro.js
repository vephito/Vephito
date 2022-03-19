import React from "react";
import Typist from "react-typist";
import FadeIn from "react-fade-in";
import MailIcon from "@mui/icons-material/Mail";
import "../styles/intro.css";
import Fade from "react-reveal/Fade";

export default function Intro() {
  return (
    <div className="intro">
      <Typist avgTypingDelay={120}>
        <span className="intro-title">
          {"hi, "}
          <span className="intro-name">{"vephito"}</span>
          {" here."}
          <Typist.Backspace count={5} delay={200} />
          {/*<span className="intro-name">{"dasai "}</span>
          {"here."}*/}
        </span>
      </Typist>
      <Fade bottom>
        <div className="intro-subtitle">I create stuff sometimes.</div>
        <div className="intro-desc">
          I'm a software engineer in India. I have profound interest in
          full-stack development, Machine Learning and everything in between.
        </div>
      </Fade>
      <Fade bottom>
        <div className="mail">
          <a href="mailto:vephitodasai5@mail.com" className="intro-contact">
            <MailIcon></MailIcon>
            <b>{"  " + "Say hello"}</b>
          </a>
        </div>
      </Fade>
    </div>
  );
}
