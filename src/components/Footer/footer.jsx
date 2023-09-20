import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Footer = ({ hideBGCOLOR }) => (
  <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="item md-mb50">
            <div className="title">
              <h5>Contacto</h5>
            </div>
            <ul>
              <li>
                <span className="icon pe-7s-mail"></span>
                <div className="cont">
                  <h6>Email</h6>
                  <p>reactrosario@gmail.com</p>
                </div>
              </li>
              <li>
                <span className="icon pe-7s-share"></span>
                <div className="cont">
                  <h6>Redes sociales</h6>
                  <p>@reactrosario</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4">
          {/* <div className="item md-mb50">
            <div className="title">
              <h5>Recent News</h5>
            </div>
            <ul>
              <li>
                <div className="img">
                  <Link to="/blog-details/blog-details-dark">
                    <img src="/img/blog/1.jpg" alt="" />
                  </Link>
                </div>
                <div className="sm-post">
                  <Link to="/blog-details/blog-details-dark">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                  </Link>
                  <Link to="/blog/blog-dark">
                    <span className="date">14 sep 2022</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="img">
                  <Link to="/blog-details/blog-details-dark">
                    <img src="/img/blog/2.jpg" alt="" />
                  </Link>
                </div>
                <div className="sm-post">
                  <Link to="/blog-details/blog-details-dark">
                    <p>
                      The Start-Up Ultimate Guide to Make Your WordPress
                      Journal.
                    </p>
                  </Link>
                  <Link to="/blog/blog-dark">
                    <span className="date">14 sep 2022</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="subscribe">
                  <input type="text" placeholder="Type Your Email" />
                  <span className="subs pe-7s-paper-plane"></span>
                </div>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="col-lg-4">
          <div className="item">
            <div className="logo">
              <StaticImage src="../../../static/img/RR_logo_03.png" alt="React Rosario Logo" />
            </div>
            <div className="social">
              <a href="https://www.meetup.com/es/reactrosario/" target="_blank" rel="noreferrer">
                <i className="fab fa-meetup"></i>
              </a>
              <a href="https://twitter.com/reactrosario" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/reactrosario" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/@reactrosario7085" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="copy-right">
              <p>
                © {new Date().getFullYear()}, React Rosario
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
