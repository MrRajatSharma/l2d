import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <div className="testimonial-item">
    <div className="testimonial-item-wrapper">
      <p>
        <FontAwesomeIcon icon={faQuoteLeft} className="quote-sign-left" />
        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum
        suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh
        et. Maecen aliquam, risus at semper.
        <FontAwesomeIcon icon={faQuoteRight} className="quote-sign-right" />
      </p>
      <img src="img/testimonial-3.jpg" className="testimonial-img" alt="" />
      <h3>Sapna</h3>
      <h4>Ceo @ L2M</h4>
    </div>
  </div>
);
