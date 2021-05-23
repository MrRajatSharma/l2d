
import React from "react";
import Slider from "react-slick";
import TestimonialItem from "./TestimonialItem";

const settings = {
  // centerMode: true,
  // centerPadding: '60px',
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  dotsClass: "testimonial-dots"
};


export default () => (
  <section id="testimonials" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <img className="section-header__icon" src="/img/testimonial.png" />
          <h2>
            Testimonials
          </h2>
          <p>
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
            elit veniam aliqua esse amet veniam enim export quid quid veniam
            aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
            ipsum velit export irure minim illum fore
          </p>
        </div>

        <Slider {...settings} className="testimonials-carousel mb-4">
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </Slider>
      </div>
    </section>
)