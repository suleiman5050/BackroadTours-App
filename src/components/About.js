import React from "react";
import aboutImg from "../images/images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <>
      {" "}
      <section className="section" id="about">
        {/* title  */}

        <Title title="About" subTitle="Us" />

        {/* end of title  */}
        {/* about-center */}
        <div className="section-center about-center">
          {/* about img wrapper*/}
          <div className="about-img">
            <img src={aboutImg} className="about-photo" alt="awesome beach" />
          </div>
          {/* about info */}
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#About" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
