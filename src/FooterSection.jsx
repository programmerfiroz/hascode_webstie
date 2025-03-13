import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <h1>Footer Style : Demo 7</h1>
        </div>
      </div>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
              <div className="footer-widget">
                <h5 className="logo text-uppercase mb-4">
                  <a href="/">Logo</a>
                </h5>
                <p className="mb-4">
                  Duis vel nunc orci. Maecenas ullamcorper lacus at tortor volutpat fermentum. Pellentesque condimentum nisi vitae placerat mollis. Aenean rutrum magna vel felis pulvinar.
                </p>
                <a href="/" className="appointment text-uppercase">
                  Make an appointment <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-4 mb-5">
              <div className="footer-widget">
                <h6 className="text-white mb-3">Links</h6>
                <ul className="services text-capitalize">
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/clinic">Our Clinic</a></li>
                  <li><a href="/doctors">Our Doctors</a></li>
                  <li><a href="/news">News and Media</a></li>
                  <li><a href="/appointments">Appointments</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
              <div className="footer-widget">
                <h6 className="text-white text-capitalize mb-3">Our Gallery</h6>
                <ul className="flicker-feed text-capitalize">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <li key={num}>
                      <a href={`/gallery/img_${num}`}>
                        <img src={`https://cdn.yahoobaba.net/footer-section/demo7/images/img_${num}.jpg`} alt={`Gallery ${num}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <div className="footer-widget widget-area">
                <h6 className="text-white text-capitalize mb-3">Quick Contacts</h6>
                <p className="mb-2">If you have any questions or need help</p>
                <span className="phone">
                  <i className="fas fa-phone" /> +123 456 7890
                </span>
                <p className="mb-2">1582 Aliquam consectetur libero ut neque feugiat molestie.</p>
                <a href="/directions" className="appointment text-uppercase">
                  Get direction <i className="fas fa-angle-right" />
                </a>
                <ul className="icon">
                  <li><a href="https://facebook.com" data-tip="Facebook"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="https://twitter.com" data-tip="Twitter"><i className="fab fa-twitter" /></a></li>
                  <li><a href="https://instagram.com" data-tip="Instagram"><i className="fab fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-widget footer-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-2">
                <p>
                  ©2025, Copyright by <a href="https://yahoobaba.com" className="web">Yahoo Baba</a>. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 text-white text-capitalize text-md-end">
                <ul className="links">
                  <li className="list-inline-item"><a href="/about">About Us</a></li>
                  <li className="list-inline-item"><a href="/services">Services</a></li>
                  <li className="list-inline-item"><a href="/privacy">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
