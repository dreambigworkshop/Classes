import React from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/css/all.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/tooplate-ben-resume-style.css";

import imgsrc from "./assets/images/ben.jpg";
import agencysrc from "./assets/images/true-agency.jpg";

import test1 from "./assets/images/testimonials/testimonial-image01.jpg";
import test2 from "./assets/images/testimonials/testimonial-image02.jpg";
import test3 from "./assets/images/testimonials/testimonial-image03.jpg";
import test4 from "./assets/images/testimonials/testimonial-image04.jpg";
export default function LandingPageComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            Ben Resume
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#intro" className="nav-link smoothScroll">
                  Introduction
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link smoothScroll">
                  About Me
                </a>
              </li>

              <li className="nav-item">
                <a href="#testimonials" className="nav-link smoothScroll">
                  Reviews
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link smoothScroll">
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-lg-0 mt-3 mb-4 mb-lg-0">
              <a href="#" className="custom-btn btn" download>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section
        className="hero d-flex flex-column justify-content-center align-items-center"
        id="intro"
      >
        <div className="container">
          <div className="row">
            <div className="mx-auto col-lg-5 col-md-5 col-10">
              <img
                src={imgsrc}
                className="img-fluid"
                alt="Ben Resume HTML Template"
              />
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center col-lg-7 col-md-7 col-12">
              <div className="hero-text">
                <h1 className="hero-title">👋 Ben, a digital nomad</h1>

                <a href="#" className="email-link">
                  hello@company.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <h3 className="mb-4">This is Ben's Resume</h3>

              <p>
                Ben Resume HTML Template is brought to you by{" "}
                <a
                  rel="nofollow"
                  href="https://www.tooplate.com"
                  target="_parent"
                >
                  Tooplate website
                </a>
                . You can feel free to edit and use this page for your small
                site. You are allowed to use this HTML template for any kind of
                purpose.
              </p>

              <p>
                However, please do not re-distribute the downloadable template
                ZIP file on any template collection website. This is strongly
                prohibited. Please contact Tooplate for more information.
              </p>

              <ul className="mt-4 mb-5 mb-lg-0 profile-list list-unstyled">
                <li>
                  <strong>Full Name :</strong> Ben Wilson{" "}
                </li>

                <li>
                  <strong>Date of Birth:</strong> 26 September 1999
                </li>

                <li>
                  <strong>Website :</strong> company.co
                </li>

                <li>
                  <strong>Email :</strong> hello@company.co
                </li>
              </ul>
            </div>

            <div className="col-lg-5 mx-auto col-md-6 col-12">
              <img
                src={agencysrc}
                className="about-image img-fluid"
                alt="Ben's Resume HTML Template"
              />
            </div>
          </div>
          <div className="row about-third">
            <div className="col-lg-4 col-md-4 col-12">
              <h3>Integer volutpat</h3>
              <p>
                Sed eu risus tincidunt, finibus dolor non, gravida ex. Donec
                lacinia mi nec erat tempus, vel consectetur ante scelerisque. Ut
                blandit, risus in venenatis ultricies, lacus tellus fermentum.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <h3>Mauris semper</h3>
              <p>
                Cras et nisl vestibulum, accumsan elit sed, pretium enim.
                Vestibulum in condimentum magna. Maecenas quam magna, iaculis eu
                turpis et, commodo pulvinar leo.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <h3>Integer id neque</h3>
              <p>
                Duis at mollis leo, venenatis congue ex. Cras urna dui, gravida
                euismod lectus et, cursus tempor nulla. Praesent at turpis quis
                ex tristique gravida quis eget eros.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials section-padding" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-5 text-center">What People say</h3>

              <div
                className="owl-carousel owl-theme"
                id="testimonials-carousel"
              >
                <div className="item">
                  <div className="testimonials-thumb d-flex">
                    <div className="testimonials-image">
                      <img
                        src={test1}
                        className="img-fluid"
                        alt="testimonials image"
                      />
                    </div>

                    <div className="testimonials-info">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem.
                      </p>

                      <h6 className="mb-0">Ben</h6>
                      <span>Art Director</span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonials-thumb d-flex">
                    <div className="testimonials-image">
                      <img
                        src={test2}
                        className="img-fluid"
                        alt="testimonials image"
                      />
                    </div>

                    <div className="testimonials-info">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem.
                      </p>

                      <h6 className="mb-0">Marie</h6>
                      <span>Marketing Consultant</span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonials-thumb d-flex">
                    <div className="testimonials-image">
                      <img
                        src={test3}
                        className="img-fluid"
                        alt="testimonials image"
                      />
                    </div>

                    <div className="testimonials-info">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem.
                      </p>

                      <h6 className="mb-0">Jen</h6>
                      <span>Product Manager</span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="testimonials-thumb d-flex">
                    <div className="testimonials-image">
                      <img
                        src={test4}
                        className="img-fluid"
                        alt="testimonials image"
                      />
                    </div>

                    <div className="testimonials-info">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem.
                      </p>

                      <h6 className="mb-0">Wilson</h6>
                      <span>Web Developer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h3 className="mb-5">Frequently Asked Questions</h3>

              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Are those HTML templates absolutely free for any kind of
                        usage?
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Yes, they are 100% free and there is no hidden charge.
                      </p>

                      <p>They can be used for your commercial websites.</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I use them as a CMS theme or a part of website
                        builder?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>Yes, you can use them.</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        I cannot find a suitable HTML template. Can I request
                        new template?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Yes, please tell us what you need. We will try our best
                        to fulfill it.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Can I redistribute your templates?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        No, this is totally NOT allowed. Please do not
                        redistribute our HTML templates.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingFive">
                    <h2 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How do I support Tooplate?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <p>
                        Please spread a word about Tooplate website to your
                        colleagues and friends.
                      </p>
                    </div>
                  </div>
                </div>

                <span className="faq-info-text">
                  Please send us a message if you have anything to say. Send an
                  email message to{" "}
                  <strong>contact (at) tooplate (dot) com</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact section-padding pt-0" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <form
                action="#"
                method="get"
                className="contact-form webform"
                role="form"
              >
                <div className="form-group d-flex flex-column-reverse">
                  <input
                    type="text"
                    className="form-control"
                    name="cf-name"
                    id="cf-name"
                    placeholder="Your Name"
                  />

                  <label htmlFor="cf-name" className="webform-label">
                    Full Name
                  </label>
                </div>

                <div className="form-group d-flex flex-column-reverse">
                  <input
                    type="email"
                    className="form-control"
                    name="cf-email"
                    id="cf-email"
                    placeholder="Your Email"
                  />

                  <label htmlFor="cf-email" className="webform-label">
                    Your Email
                  </label>
                </div>

                <div className="form-group d-flex flex-column-reverse">
                  <textarea
                    className="form-control"
                    rows="5"
                    name="cf-message"
                    id="cf-message"
                    placeholder="Your Message"
                  ></textarea>

                  <label htmlFor="cf-message" className="webform-label">
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="form-control"
                  id="submit-button"
                  name="submit"
                >
                  Send
                </button>
              </form>
            </div>

            <div className="mx-auto col-lg-4 col-md-6 col-12">
              <h3 className="my-4 pt-4 pt-lg-0">Say hello</h3>

              <p className="mb-1">010-020-0340</p>

              <p>
                <a href="#">
                  hello@company.co
                  <i className="fas fa-arrow-right custom-icon"></i>
                </a>
              </p>

              <ul className="social-links mt-2">
                <li>
                  <a
                    href="https://fb.com/tooplate"
                    rel="noopener"
                    className="fab fa-facebook"
                  ></a>
                </li>
                <li>
                  <a href="#" rel="noopener" className="fab fa-twitter"></a>
                </li>
                <li>
                  <a href="#" rel="noopener" className="fab fa-instagram"></a>
                </li>
                <li>
                  <a href="#" rel="noopener" className="fab fa-linkedin"></a>
                </li>
                <li>
                  <a href="#" rel="noopener" className="fab fa-youtube"></a>
                </li>
              </ul>

              <p className="copyright-text mt-5 pt-3">
                Copyright &copy; 2020 Ben Resume Page
              </p>

              <p>
                Design:{" "}
                <a
                  href="https://www.tooplate.com"
                  title="free HTML templates"
                  target="_blank"
                >
                  Tooplate
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
