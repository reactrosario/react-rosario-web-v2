import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

import initIsotope from "common/initIsotope";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  return (
    <section className={`${grid ? (grid === 3 ? "three-column" : null) : null} portfolio section-padding pb-70`}>
      <div className="container">
        {/* <div className="row">
          <div style={{ textAlign: 'center' }} className="full-width">
            <h6 className="fw-100 text-u ls10 mb-10">
              Agend&aacute;
            </h6>
            <h3 className="fw-600 text-u ls1 mb-30 color-font">
              Pr&oacute;ximo Evento
            </h3>
          </div>
        </div> */}

        <div className="row">
          <div style={{ textAlign: 'center' }} className="full-width">
            <h6 className="fw-100 text-u ls10 mb-10">
              Pasados
            </h6>
            <h3 className="fw-600 text-u ls1 mb-30 color-font">
              Meet Ups Anteriores
            </h3>
          </div>

          <div className="gallery full-width">
            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a to="https://www.meetup.com/reactrosario/events/268911394/" className="imago wow" target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../static/img/portfolio/meetup-8-001.jpg" alt="meetup 8 cover" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6>Meet Up #8</h6>
                <span>
                  <a href="#0">React Rosario</a>,
                  <a href="#0">React en BA</a>
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a to="https://www.meetup.com/reactrosario/events/267093716/" className="imago wow" target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../static/img/portfolio/meetup-7-001.jpg" alt="meetup 7 cover" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6>Meet Up #7</h6>
                <span>
                  <a href="#0">Mobile</a>,
                  <a href="#0">Development</a>
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a to="https://www.meetup.com/reactrosario/events/266208079/" className="imago wow" target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../static/img/portfolio/meetup-6-001.jpg" alt="meetup 6 cover" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6>Meet Up #6</h6>
                <span>
                  <a href="#0">ReactJS</a>,
                  <a href="#0">Testing</a>
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a href="https://www.meetup.com/reactrosario/events/265309915/" className="imago wow" target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../static/img/portfolio/meetup-5-001.jpg" alt="meetup 5 cover" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6>Meet Up #5</h6>
                <span>
                  <a href="#0">Forms</a>,
                  <a href="#0">Formik</a>
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a href="https://www.meetup.com/reactrosario/events/264418775/" className="imago wow" target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../static/img/portfolio/meetup-4-001.jpg" alt="meetup 4 cover" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6>Meet Up #4</h6>
                <span>
                  <a href="#0">Web</a>,
                  <a href="#0">Development</a>
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a href="https://www.meetup.com/reactrosario/events/263285732/" className="imago wow" target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../static/img/portfolio/meetup-3-001.jpg" alt="meetup 3 cover" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6>Meet Up #3</h6>
                <span>
                  <a href="#0">ReactJS</a>,
                  <a href="#0">TypeScript</a>
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a href="https://www.meetup.com/reactrosario/events/262285364/" className="imago wow" target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../static/img/portfolio/meetup-2-001.jpg" alt="meetup 2 cover" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6>Meet Up #2</h6>
                <span>
                  <a href="#0">GraphQL</a>,
                  <a href="#0">Styled Components</a>
                </span>
              </div>
            </div>

            <div
              className={`${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a href="https://www.meetup.com/reactrosario/events/261526795/" className="imago wow" target="_blank" rel="noopener noreferrer">
                  <StaticImage src="../../../static/img/portfolio/meetup-1-001.jpg" alt="meetup 1 cover" />
                  <div className="item-img-overlay"></div>
                </a>
              </div>
              <div className="cont">
                <h6>Meet Up #1</h6>
                <span>
                  <a href="#0">ReactJS</a>,
                  <a href="#0">Hooks</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
