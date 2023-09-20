import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const PagesHeader = () => (
  <header className="pages-header circle-bg valign">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="cont mt-100 mb-50 text-center">
            <h1 className="color-font fw-700">
              Nuestro equipo organizativo es apasionado por el desarrollo
              de la comunidad local
            </h1>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="img">
            <StaticImage src="../../../static/img/slid/about.jpg" alt="team image" />
          </div>
        </div>
      </div>
    </div>
    <div className="half sub-bg">
      <div className="circle-color">
        <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div>
      </div>
    </div>
  </header>
);

export default PagesHeader;