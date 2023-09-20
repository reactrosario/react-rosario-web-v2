import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import AboutUsData from "../../data/sections/about-us.json";

const AboutUs = () => (
  <section className="about-us section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 valign md-mb50">
          <div className="mb-50">
            <h6 className="fw-100 text-u ls10 mb-10">
              {AboutUsData.smallTitle}
            </h6>
            <h3 className="fw-600 text-u ls1 mb-30 color-font">
              {AboutUsData.title}
            </h3>
            <p>{AboutUsData.content}</p>
            <Link to="/about" className="butn bord curve mt-30" aria-label="Acerca de React Rosario">
              <span>M&aacute;s Informaci&oacute;n</span>
            </Link>
          </div>
        </div>

        <div className="col-lg-7 img">
          <StaticImage src="../../../static/img/feat.jpg" alt="Speaker image" />
          <div className="stauts">
            {AboutUsData.stauts.map((item) => (
              <div className="item" key={item.id}>
                <h4>
                  {item.number}
                  <span>{item.letter}</span>
                </h4>
                <h6>{item.stautsName}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
