import React, { useState } from "react";
import {
  faCar,
  faCheckCircle,
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => (
  <section id="contact" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
            elit veniam aliqua esse amet veniam enim export quid quid veniam
            aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
            ipsum velit export irure minim illum fore
          </p>
        </div>

        <div className="row contact-info">
          <div className="col-md-4">
            <div className="contact-address">
              <FontAwesomeIcon icon={faMapPin} className="mr-2" />
              <h3>Address</h3>
              <address>
                Gulab Vihar, Sector - D, Sainik Colony Near Tiny Tots School,
                Jammu 180011.
              </address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />

              <h3>Phone Number</h3>
              <p>
                <a href="tel:+155895548855">+91-6005488940, +91-9055000026</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <h3>Email</h3>
              <p>
                <a href="mailto:info.learn2motor@gmail.com">
                  info.learn2motor@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="google-map"
        data-latitude="40.713732"
        data-longitude="-74.0092704"
      ></div>
    </section>
)