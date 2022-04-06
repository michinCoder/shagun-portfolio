import React from "react";
import "./CaseStudy.css";
import SplashScreen from './SplashScreen.png'

const CaseStudy = () => {
  return (
    <div className="casestudy">
      <h2>My Case-Study</h2>
      <div className="cases">
        <div className="case">
          <img
            src={SplashScreen}
            alt="Avatar"
            className="imageStudy"
            style={{width:"100%"}}
          />
          <div className="middle">
            <div className="text-view"><a href="https://www.behance.net/shagunparmar/moodboards" target="_blank" style={{textDecoration: "none", color: "white"}}>View</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
