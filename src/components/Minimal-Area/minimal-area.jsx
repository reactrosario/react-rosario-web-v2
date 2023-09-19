import React, { useEffect } from "react";
import cardMouseEffect from "common/cardMouseEffect";
import { thumparallaxDown } from "common/thumparallax";

const MinimalArea = () => {
  useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));

    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);

  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">Sobre Nosotros.</h4>
              <p className="wow txt" data-splitting>
                Nuestra comunidad es la m&aacute;s dedicada y comprometida con el desarrollo ReactJS en la zona.
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Visi&oacute;n
                  </h6>
                  <p>
                    Ser la comunidad de ReactJS m&aacute;s activa y reconocidad en el pa&iacute;s.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Misi&oacute;n
                  </h6>
                  <p>
                    Generar espacios de comunicaci&oacute;n y colaboraci&oacute;n entre desarrolladores web.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Valores
                  </h6>
                  <p>
                    Respeto - Compromiso - Colaboraci&oacute;n - Responsabilidad
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
