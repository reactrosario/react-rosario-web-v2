import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper/modules";

import introData from "data/sections/intro.json";
import removeSlashFromPagination from "common/removeSlashpagination";
import fadeWhenScroll from "common/fadeWhenScroll";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const IntroWithSlider = ({ sliderRef }) => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));

    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
    }, 1000);
  }, []);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            modules={[Navigation, Pagination, Parallax]}
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (const element of swiper.slides) {
                  element.childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                };

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption center mt-30">
                          <h1 className="color-font">{slide.title}</h1>
                          {slide?.content && <p>{slide.content}</p>}
                          <Link to="/about" className="butn bord curve mt-30" aria-label="Acerca de React Rosario">
                            <span>M&aacute;s Informaci&oacute;n</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div ref={paginationRef} className="swiper-pagination top botm"></div>

        <div className="social-icon">
          <a
            href="https://www.meetup.com/es/reactrosario/"
            target="_blank"
            rel="noreferrer"
            aria-label="React Rosario grupo de Meetup"
          >
            <i className="fab fa-meetup"></i>
          </a>
          <a
            href="https://twitter.com/reactrosario"
            target="_blank"
            rel="noreferrer"
            aria-label="React Rosario cuenta de Twitter (X)"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/reactrosario/"
            target="_blank"
            rel="noreferrer"
            aria-label="React Rosario cuenta de Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/@reactrosario7085"
            target="_blank"
            rel="noreferrer"
            aria-label="React Rosario cuenta de YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider;
