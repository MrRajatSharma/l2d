import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Toolbar() {
  return (
      <div id="topbar" className="d-none d-lg-block">
        <div className="container clearfix">
          <div className="contact-info float-left">
            <FontAwesomeIcon icon={faEnvelope} size="xs" className="mr-2"/>
            <a href="mailto:contact@example.com" className="mr-2">contact@example.com</a>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +1 5589 55488 55
          </div>
          <div className="social-links float-right">
            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
            <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
            <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
            <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
  )
}

export default Toolbar