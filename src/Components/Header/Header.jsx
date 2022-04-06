import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./LOGO-1.png";

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/"><div className="logo">
          <img src={Logo} alt="Logo" />
        </div></Link>
        <div className="nav-links">
          <ul>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li>ABOUT ME</li>
            </Link>
              <a href="https://drive.google.com/file/d/18HA1YnCDFtkQkxqiaJ2FbUXgCyN-_2Ru/view?usp=sharing" style={{textDecoration: "none"}} rel="noreferrer" target="_blank"><li>RESUME</li></a>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>MY CASE STUDY</li>
            </Link>
          </ul>
        </div>

        <button
          className="navbar-toggler"
          style={{ position: "absolute", right: "20px"}}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars" style={{color:"black"}}></i>
        </button>
        <div
          className="collapse"
          id="navbarToggleExternalContent"
          style={{ position: "absolute", right: "0", top: "1em" }}
        >
          <div className="p-4 newNav" style={{backgroundColor: "white"}}>
            <button
              className="navbar-toggler"
              style={{
                border: "none",
                outline: "none",
                position: "absolute",
                right: "0",
                top: "0",
                marginBottom: "5px",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-xmark" style={{color:"black"}}></i>
            </button>
            <ul style={{ marginTop: "10px", textAlign: "center" }}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <li>ABOUT ME</li>
              </Link>
              <hr />
              <a href="https://drive.google.com/file/d/18HA1YnCDFtkQkxqiaJ2FbUXgCyN-_2Ru/view?usp=sharing" style={{textDecoration: "none"}} rel="noreferrer" target="_blank"><li>RESUME</li></a>
              <hr />
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>MY CASE STUDY</li>
              </Link>
              <hr />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
