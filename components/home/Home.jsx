import React from "react";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(./img/avatar/avatar.jpeg)",
              }}
            ></div>
          </div>
          <div className="details">
            <h3 className="name">Pavlo Nykyforiuk</h3>
            <h4 className="typer"></h4>
            <div className="job-container">
              <p className="job">
                I&apos;m a dedicated English teacher based in Chernivtsi,
                Ukraine, with a passion for helping my students learn and grow
                in their language abilities. I have experience teaching students
                of all ages and backgrounds, and I&apos;m committed to creating
                engaging and effective lessons that meet the unique needs of
                each student.
              </p>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
