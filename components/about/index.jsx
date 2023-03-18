import React from "react";
import Intro from "./Intro";

const AboutMain = () => (
  <>
    <div className="container">
      <div className="tokyo_tm_about">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <h3>About Me</h3>
            </div>
          </div>
        </div>

        <Intro />
      </div>
    </div>
  </>
);

export default AboutMain;
