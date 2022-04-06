import React from "react";
import "./AboutData.css";
import Profile from "./Profile.jpg";
import Graduation from "./Graduation.gif";
import Camera from "./camera.png";
import Image from "../Images/Image";

const AboutData = () => {
  return (
    <div className="aboutContainer">

      <div className="card">
        <h1>
         <span>Hi, I'm</span> 
          <div className="scroller">
            <span>
              Shagun
              <br />
              Designer
              <br />
              Dogperson
              <br />
              Content Creator
              <br />
              Fashion Enthusiast
            </span>
          </div>
        </h1>
      </div>

      <div className="profile-pic">
        <img src={Profile} alt="Profile" />
      </div>
      <div className="animate">
        <h1>Some fun facts about me</h1>
      </div>
      <div className="card-info">
        <img src={Graduation} alt="graduation" style={{height: "50px", objectFit: "cover", marginLeft: "50px"}} />
        <p>Technocrats Institute Of Technology, Bhopal (M.P.)</p>
      </div>
      <div className="animate">
        <p>
          I’m really passionate about designing as it allows my creative side to
          expand as much as possible and to keep on learning more about people
          and their experiences. It’s interesting to know more about people and
          to solve their problems by understanding their requirements. I have
          worked as an intern in two startups as <span>UI/UX designer</span> and
          along with that worked as a full time employee as{" "}
          <span>Content Associate</span>. Now more than ever I am looking
          forward to fully commit myself to the world of Designing and to learn
          more and more about it. <br />
          <br />I like reading books about <span>Pyschology</span> and{" "}
          <span>Philosophy</span> along with that I like{" "}
          <span>Animes, dogs, family</span> and my <span>friends</span>.
        </p>
      </div>
      <div className="card-info">
        <img src={Camera} alt="" style={{ width: "60px",  marginLeft: "50px" }} />
        <p>
          I like capturing beautiful and aesthetic pictures of the environment.
        </p>
      </div>

      <Image/>

      <div className="min-footer">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/shagun-parmar-417661150/"
          target="_blank"
          style={{ color: "black" }}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          rel="noreferrer"
          href="mailto: shagunparmar0499@gmail.com"
          target="_blank"
          style={{ color: "black" }}
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default AboutData;
