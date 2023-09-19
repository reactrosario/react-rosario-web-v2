import React, { useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoWithTestimonials = () => {
  useEffect(() => {
    console.clear();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="block-sec">
      <div
        className="background bg-img pt-100 pb-0 parallaxie"
        style={{ backgroundImage: `url(/img/bg-vid.jpg)` }}
        data-overlay-dark="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6" />
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Comunidad
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    ¿C&oacute;mo contribuimos?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                      Generamos espacios de encuentro y colaboración entre
                      profesionales del desarrollo web en la zona. Todos los
                      entusiastas de ReactJS y afines son bienvenidos.
                    </p>
                  </div>

                  <div className="item">
                    <p>
                      Colaboramos con distintos espacios de trabajo en la zona.
                      Participamos de eventos relacionados a tecnología y desarrollo.
                    </p>
                  </div>

                  <div className="item">
                    <p>
                      Difundimos temas e informaci&oacute;n de inter&eacute;s
                      para la comunidad.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
