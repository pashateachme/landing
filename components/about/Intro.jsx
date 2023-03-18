import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/1.jpg",
    name: "Pavlo Nykyforiuk",
    designation: "English Teacher",
    text: (
      <>
        <p>
          Hey there, my name is Pavlo Nykyforiuk, and I&apos;m not just your
          average English teacher! I&apos;m an experienced educator who is
          passionate about teaching and has a talent for creating engaging and
          fun learning experiences. With my expertise, I have helped dozens of
          students of all ages and levels overcome their language barriers and
          finally achieve their goals of mastering the English language.
        </p>
        <p>
          My teaching style is designed to be interactive, dynamic, and tailored
          to meet the needs of each individual student. I understand that
          everyone learns differently, and that&apos;s why I work hard to make
          sure my lessons are engaging and fun, while still being informative
          and effective. Whether you&apos;re a beginner just starting out or an
          advanced learner looking to improve your fluency, I&apos;m here to
          help.
        </p>
        <p>
          So why wait? Let&apos;s start your English language journey today!
        </p>
      </>
    ),
  };

  return (
    <>
      {/* <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div> */}
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
