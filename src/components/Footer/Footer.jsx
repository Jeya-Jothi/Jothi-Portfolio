import "./Footer.css";
import Copyright from "./Copyright/Copyright";
function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top">
        <div className="getintouch-txt-div">
          <p>Get In </p>
          <p>Touch.</p>
        </div>
        <div className="contact-div">
          <div className="contact-head">
            <p>Contact</p>
          </div>
          <div className="contact-list-div">
            <div>
              <img
                src="images/email icon.svg"
                alt="email icon"
                className="contact-icon"
              />
              <p>jeyajothi108@gmail.com</p>
            </div>
            <div>
              <img
                src="images/phone icon.svg"
                alt="phone icon"
                className="contact-icon"
              />
              <p>+91 8270907155</p>
            </div>
            <div className="social-media-icon-div">
              <a
                href="https://www.linkedin.com/in/jeya-jothi-841277211"
                target="_blank"
                rel="noopene noreferrer"
              >
                <div className="tooltip">
                  <p>Connect with Me on LinkedIn</p>
                </div>
                <img
                  src="images/linkedin icon.svg"
                  alt="linkedin icon"
                  className="contact-icon"
                />
              </a>
              <a
                href="https://github.com/Jeya-Jothi"
                target="_blank"
                rel="noopene noreferrer"
              >
                <div className="tooltip">
                  <p>View My GitHub Projects</p>
                </div>
                <img
                  src="images/github icon.svg"
                  alt="github icon"
                  className="contact-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="resume-div">
          <a
            href="/JeyaJothi-Resume.pdf"
            download={"JeyaJothi-Resume.pdf"}
            title="Download my Resume"
          >
            <img
              src="images/download icon.svg"
              alt="download icon"
              className="download-icon"
            />
            Resume
          </a>
          <a
            href="https://au.pinterest.com/JeyaJothi21/_created/"
            target="_blank"
            rel="noopene noreferrer"
            title="Explore My Art on Pinterest"
          >
            <img
              src="images/art icon.svg"
              alt="art icon"
              className="art-icon"
            />
            Art Gallery
          </a>
        </div>
      </div>

      {/* Copyright */}
      <Copyright />
    </footer>
  );
}
export default Footer;
