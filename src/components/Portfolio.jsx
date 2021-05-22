import React, { useState } from "react";

export default () => (
  <section id="portfolio" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          {/* <p>
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
            elit veniam aliqua esse amet veniam enim export quid quid veniam
            aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
            ipsum velit export irure minim illum fore
          </p> */}
        </div>
      </div>

      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <div className="portfolio-popup">
                <img src="img/simulator.png" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Simulator</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <div className="portfolio-popup">
                <img src="img/evaluation.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Evaluation</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <div className="portfolio-popup">
                <img src="img/car.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Training Cars</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <div className="portfolio-popup">
                <img src="img/instructor.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Trained Instructors</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
)