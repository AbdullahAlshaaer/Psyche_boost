import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <NavLink
                    to="/"
                    class="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    <h1>
                  <i class="fa-solid fa-heart-pulse text-danger me-1"></i>{" "}
                      <span className="text-primary">Psyche</span>
                      <h1 className="text-black d-inline">Boost</h1>
                    </h1>
                  </NavLink>
                </h6>
                <p>
                  Here you can see all ways to contact the Psyche Boost team and reach out for support.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  psychboost5@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +20 1112481087
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05);" }}
        >
          © 2024 Copyright:Psyche Boost.inc
        </div>
      </footer>
    </div>
  );
};

export default Footer;
