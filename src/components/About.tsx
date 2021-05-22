import React, { useState } from "react";

export default () => (
  <section id="about" className="wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="offset-5 col-lg-6 content driving-info-section">
            <div className="content-block">
                <div className="sec-title mb-20">
                    <div className="sub-title">countless benefits of Drive 2 Motor</div>
                    <h2>Modern Technologies <br /> For Much Easier Driving</h2>
                </div>
                <div className="text mb-30">Nunc quam arcu, pretium quis quam sed, laoreet efficitur aliquam volutpat. lobortis sem consequat consequat imperdiet. In nulla sed viverraut loremut tetur diam nunc bibendum sed imperdiets. </div>
                <div className="icon-box">
                    <div className="icon"><img src="/img/steering-wheel.png" style={{
                      maxHeight: "40px"
                    }} alt="" /></div>
                    <div className="content">
                        <h4>Learn from Experienced Teachers</h4>
                        <div className="text">Highly proficient; IDTR trained and can deal with any kind of traffic situations</div>
                    </div>
                </div>
                <div className="icon-box">
                    <div className="icon"><img src="/img/car-insurance.png"  style={{
                      maxHeight: "40px"
                    }} alt="" /></div>
                    <div className="content">
                        <h4>Covering All Aspects of Safe Driving</h4>
                        <div className="text">Get evaluated on safe driving practices by expert trainers</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)