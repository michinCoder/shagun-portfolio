import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <li>
            <a
              rel="noreferrer"
              href="https://medium.com/@shagun-chan"
              style={{ color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-medium"></i>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              href="https://dribbble.com/Shagunparmar"
              style={{ color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              href="https://www.behance.net/shagunparmar"
              style={{ color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-behance"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="quote">
        <p>
          “Thank you so much for visiting my portfolio,
          <br /> I hope you have a good day.”
        </p>
      </div>
    </div>
  );
};




export default Footer;