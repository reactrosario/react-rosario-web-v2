import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsCircle = ({ from, theme }) => {
  const cpStyle = {
    path: {
      stroke: "#61DAFB",
    },
    trail: {
      stroke: theme ? (theme === "dark" ? "#0f1013" : "#e5e5e5") : "",
    },
    text: {
      fill: theme ? (theme === "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };

  return (
    <section className={`skills-circle pt-50 pb-50 ${from ? (from === "aboutPage" ? "sub-bg" : "") : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="">
              <div className="row">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Asistencia</span>
                      <h6>A meet ups</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={100}
                        strokeWidth={2}
                        text={`${100}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Asistencia</span>
                      <h6>After meet ups</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;
