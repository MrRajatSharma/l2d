import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons';

function Toolbar() {
  return (
      <div id="topbar" className="d-none d-lg-block">
        <div className="clearfix">
          <div className="contact-info float-left">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2"/>
            <a href="mailto:info.learn2motor@gmail.com" className="mr-2">info.learn2motor@gmail.com</a>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +91-6005488940, +91-9055000026
          </div>
          <div className="social-links float-right">
            <a href="#" className="faFacebook">
              <FontAwesomeIcon icon={faFacebook} className="mr-2"/>
            </a>
            <a href="#" className="faTwitter">
              <FontAwesomeIcon icon={faTwitter} className="mr-2"/>
            </a>
            <a href="#" className="faGooglePlus">
              <FontAwesomeIcon icon={faGooglePlus} className="mr-2"/>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Toolbar