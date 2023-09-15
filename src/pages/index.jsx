import React, { useEffect } from "react";
import Navbar from "components/Navbar/navbar";
import IntroWithSlider from "components/Intro-with-slider/intro-with-slider";
import AboutUs from "components/About-us/about-us";
import Services from "components/Services/services";
import Works from "components/Works/works";
import Numbers from "components/Numbers/numbers";
import VideoWithTestimonials from "components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "components/Skills-circle/skills-circle";
import Clients from "components/Clients/clients";
import Blogs1 from "components/blogs/Blogs1/blogs1";
import CallToAction from "components/Call-to-action/call-to-action";
import Footer from "components/Footer/footer";
import DarkTheme from "layouts/Dark";

const Home = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  useEffect(() => {
    setInterval(() => {
      let slidHeight;
  
      if (fixedSlider.current) {
        slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);

    let navbar = navbarRef.current;

    if (window.scrollY > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />

      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Services />
        <Works />
        <Numbers />
        <VideoWithTestimonials />
        <SkillsCircle theme="dark" />
        <Clients theme="dark" />
        <Blogs1 />
        <CallToAction />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export const Head = () => {
  return (
    <>
      <title>React Rosario - Inicio</title>
    </>
  )
}

export default Home;
