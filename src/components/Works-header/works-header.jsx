import React, { useEffect } from "react";
import fadeWhenScroll from "common/fadeWhenScroll";

const WorksHeader = ({ sliderRef }) => {
  useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);

  return (
    <header ref={sliderRef} className="works-header fixed-slider hfixd valign sub-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt mt-50">
              <div className="parlx text-center">
                <h1 className="color-font">Nuestros Eventos</h1>
                <p>
                  Organizmos Meet Ups para la comunidad de ReactJS en Rosario y la zona.
                  Aqu&iacute; podr&aacute;s encontrar los pr&oacute;ximos y pasados eventos.
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorksHeader;
