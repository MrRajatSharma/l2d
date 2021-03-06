import React, { useState } from "react";

export default () => (
  <section id="services">
      <div className="container">
        <div className="section-header">
          <img className="section-header__icon" src="/img/technical-support.png" />
          <h2>Services</h2>
          <p>
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
            elit veniam aliqua esse amet veniam enim export quid quid veniam
            aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
            ipsum velit export irure minim illum fore
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="box wow fadeInLeft">
              <div className="icon">
              <img src="/img/car-insurance.png"  style={{
                      maxHeight: "40px"
                    }} alt="" />
              </div>
              <h4 className="title">
                <a href="">Lorem Ipsum</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
                etiro rabeta lingo.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="box wow fadeInRight">
              <div className="icon">
              <img src="/img/car-insurance.png"  style={{
                      maxHeight: "40px"
                    }} alt="" />
              </div>
              <h4 className="title">
                <a href="">Dolor Sitema</a>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata nodera clas.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="box wow fadeInLeft" data-wow-delay="0.2s">
              <div className="icon">
              <img src="/img/car-insurance.png"  style={{
                      maxHeight: "40px"
                    }} alt="" />
              </div>
              <h4 className="title">
                <a href="">Sed ut perspiciatis</a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur trinige zareta lobur
                trade.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="box wow fadeInRight" data-wow-delay="0.2s">
              <div className="icon">
              <img src="/img/car-insurance.png"  style={{
                      maxHeight: "40px"
                    }} alt="" />
              </div>
              <h4 className="title">
                <a href="">Magni Dolores</a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum rideta zanox
                satirente madera
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
)