import React from 'react'
import Split from '../Split'
import { Link } from 'gatsby'

const CallToAction = ({img}) => (
  <section
    className="call-action section-padding sub-bg bg-img"
    style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-9">
          <div className="content sm-mb30">
            <Split>
              <h6 className="wow words chars splitting" data-splitting>
                Sumate
              </h6>
              <h2 className="wow words chars splitting" data-splitting>
                particip&aacute; del <br /> <b className="back-color">pr&oacute;ximo meet up</b>
                .
              </h2>
            </Split>
          </div>
        </div>

        <div className="col-md-4 col-lg-3 valign">
          <Link
            to="https://www.meetup.com/es/reactrosario/"
            className="butn bord curve wow fadeInUp"
            data-wow-delay=".5s"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Unirse al grupo</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction