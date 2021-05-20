import React, { useState } from "react";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";

const settings = {
  // centerMode: true,
  // centerPadding: '60px',
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default () => (
  <main id="main">
    <section id="about" className="wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 about-img">
            <img src="banner.jpg" alt="" />
          </div>

          <div className="col-lg-6 content">
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
            <h3>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </h3>

            <ul>
              <li>
                <i className="ion-android-checkmark-circle"></i> Ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i> Duis aute irure
                dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i> Ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate trideta storacalaperda mastiro
                dolore eu fugiat nulla pariatur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <div className="container">
        <div className="section-header">
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
                <FontAwesomeIcon icon={faCar} className="mr-2"/>
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
                <FontAwesomeIcon icon={faCar} className="mr-2"/>
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
                <FontAwesomeIcon icon={faCar} className="mr-2"/>
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
                <FontAwesomeIcon icon={faCar} className="mr-2"/>
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

    <section id="clients" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Clients</h2>
          <p>
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
            elit veniam aliqua esse amet veniam enim export quid quid veniam
            aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
            ipsum velit export irure minim illum fore
          </p>
        </div>

        <div className="owl-carousel clients-carousel">
          <img src="img/clients/client-1.png" alt="" />
          <img src="img/clients/client-2.png" alt="" />
          <img src="img/clients/client-3.png" alt="" />
          <img src="img/clients/client-4.png" alt="" />
          <img src="img/clients/client-5.png" alt="" />
          <img src="img/clients/client-6.png" alt="" />
          <img src="img/clients/client-7.png" alt="" />
          <img src="img/clients/client-8.png" alt="" />
        </div>
      </div>
    </section>

    <section id="portfolio" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
            elit veniam aliqua esse amet veniam enim export quid quid veniam
            aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
            ipsum velit export irure minim illum fore
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <a href="img/portfolio/1.jpg" className="portfolio-popup">
                <img src="img/portfolio/1.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Portfolio Item 1</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <a href="img/portfolio/2.jpg" className="portfolio-popup">
                <img src="img/portfolio/2.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Portfolio Item 2</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <a href="img/portfolio/3.jpg" className="portfolio-popup">
                <img src="img/portfolio/3.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Portfolio Item 3</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <a href="img/portfolio/4.jpg" className="portfolio-popup">
                <img src="img/portfolio/4.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Portfolio Item 4</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <a href="img/portfolio/5.jpg" className="portfolio-popup">
                <img src="img/portfolio/5.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Portfolio Item 5</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <a href="img/portfolio/6.jpg" className="portfolio-popup">
                <img src="img/portfolio/6.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Portfolio Item 6</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <a href="img/portfolio/7.jpg" className="portfolio-popup">
                <img src="img/portfolio/7.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Portfolio Item 7</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <a href="img/portfolio/8.jpg" className="portfolio-popup">
                <img src="img/portfolio/8.jpg" alt="" />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">Portfolio Item 8</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" className="wow fadeInUp">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>
            Sed tamen tempor magna labore dolore dolor sint tempor duis magna
            elit veniam aliqua esse amet veniam enim export quid quid veniam
            aliqua eram noster malis nulla duis fugiat culpa esse aute nulla
            ipsum velit export irure minim illum fore
          </p>
        </div>

        <Slider {...settings} className="testimonials-carousel">
          <div className="testimonial-item">
          <div className="testimonial-item-wrapper">

            <p>
              <img
                src="img/quote-sign-left.png"
                className="quote-sign-left"
                alt=""
              />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
              <img
                src="img/quote-sign-right.png"
                className="quote-sign-right"
                alt=""
              />
            </p>
            <img
              src="img/testimonial-1.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            </div>
          </div>
          
          <div className="testimonial-item">
            <div className="testimonial-item-wrapper">
              <p>
                <img
                  src="img/quote-sign-left.png"
                  className="quote-sign-left"
                  alt=""
                />
                Proin iaculis purus consequat sem cure digni ssim donec porttitora
                entum suscipit rhoncus. Accusantium quam, ultricies eget id,
                aliquam eget nibh et. Maecen aliquam, risus at semper.
                <img
                  src="img/quote-sign-right.png"
                  className="quote-sign-right"
                  alt=""
                />
              </p>
              <img
                src="img/testimonial-5.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </div>
          
          <div className="testimonial-item">
          <div className="testimonial-item-wrapper">

            <p>
              <img
                src="img/quote-sign-left.png"
                className="quote-sign-left"
                alt=""
              />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
              <img
                src="img/quote-sign-right.png"
                className="quote-sign-right"
                alt=""
              />
            </p>
            <img
              src="img/testimonial-2.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            </div>
          </div>
          

          <div className="testimonial-item">
          <div className="testimonial-item-wrapper">

            <p>
              <img
                src="img/quote-sign-left.png"
                className="quote-sign-left"
                alt=""
              />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
              <img
                src="img/quote-sign-right.png"
                className="quote-sign-right"
                alt=""
              />
            </p>
            <img
              src="img/testimonial-3.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            </div>
          </div>

          <div className="testimonial-item">
          <div className="testimonial-item-wrapper">

            <p>
              <img
                src="img/quote-sign-left.png"
                className="quote-sign-left"
                alt=""
              />
              Proin iaculis purus consequat sem cure digni ssim donec porttitora
              entum suscipit rhoncus. Accusantium quam, ultricies eget id,
              aliquam eget nibh et. Maecen aliquam, risus at semper.
              <img
                src="img/quote-sign-right.png"
                className="quote-sign-right"
                alt=""
              />
            </p>
            <img
              src="img/testimonial-4.jpg"
              className="testimonial-img"
              alt=""
            />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            </div>
          </div>
        </Slider>
      </div>
    </section>

    <section id="call-to-action" className="wow fadeInUp">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3 className="cta-title">Call To Action</h3>
            <p className="cta-text">
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </section>


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
              <i className="ion-ios-location-outline"></i>
              <h3>Address</h3>
              <address>Gulab Vihar, Sector - D, Sainik Colony Near
Tiny Tots School, Jammu 180011.</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
              <i className="ion-ios-telephone-outline"></i>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:+155895548855">+91-6005488940, +91-9055000026</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              <i className="ion-ios-email-outline"></i>
              <h3>Email</h3>
              <p>
                <a href="mailto:info.learn2motor@gmail.com">info.learn2motor@gmail.com</a>
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
  </main>
);
