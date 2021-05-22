import React, { useEffect, useState } from "react";
import WOW from "wowjs";;


export default () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <section id="about" className="wow fadeIn" data-wow-delay="0.5s">
      <div className="container">
        <div className="row">
          <div className="offset-5 col-lg-6 content driving-info-section">
            <div className="content-block">
              <div className="sec-title mb-20">
                <div className="sub-title">
                  countless benefits of Drive 2 Motor
                </div>
                <h2>
                  Modern Technologies <br /> For Much Easier Driving
                </h2>
              </div>
              <div className="text mb-30">
                Learn2Motor Driving School, most prestigious driving institute of J&amp;K not
                just imparts better driving skills but also tries to
                inculcate overall safe driving culture.
              </div>
              <div className="icon-box wow fadeInRight" data-wow-delay="0.1s">
                <div className="icon">
                  <img
                    src="/img/steering-wheel.png"
                    style={{
                      maxHeight: "40px",
                    }}
                    alt=""
                  />
                </div>
                <div className="content">
                  <h4>Learn from Experienced Teachers</h4>
                  <div className="text">
                    Highly proficient; IDTR trained and can deal with any kind
                    of traffic situations
                  </div>
                </div>
              </div>
              <div className="icon-box wow fadeInRight" data-wow-delay="0.2s">
                <div className="icon">
                  <img
                    src="/img/car-insurance.png"
                    style={{
                      maxHeight: "40px",
                    }}
                    alt=""
                  />
                </div>
                <div className="content">
                  <h4>Covering All Aspects of Safe Driving</h4>
                  <div className="text">
                    Get evaluated on safe driving practices by expert trainers
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
