import React from 'react';
import './FooterSection.css';

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
                  <a href="#">logo</a>
                </h5>
                <p className="mb-4">
                  Duis vel nunc orci. Maecenas ullamcorper lacus at tortor volutpat
                  fermentum pelle ntesque condi mentum nisi vitae placerat mollis.
                  Aenean rutrum magna vel felis pulvinar.
                </p>
                <a href="#" className="appointment text-uppercase">
                  make a appointment <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 mb-5">
              <div className="footer-widget">
                <h6 className="text-white mb-3">Links</h6>
                <ul className="services text-capitalize">
                  <li>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <a href="#">our clinic</a>
                  </li>
                  <li>
                    <a href="#">our doctors</a>
                  </li>
                  <li>
                    <a href="#">news and media </a>
                  </li>
                  <li>
                    <a href="#">appointments</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
              <div className="footer-widget">
                <h6 className="text-white text-capitalize mb-3">our gallery</h6>
                <ul className="flicker-feed text-capitalize">
                  <li>
                    <a href="#">
                      <img src="https://cdn.yahoobaba.net/footer-section/demo7/images/img_1.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://cdn.yahoobaba.net/footer-section/demo7/images/img_2.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://cdn.yahoobaba.net/footer-section/demo7/images/img_3.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://cdn.yahoobaba.net/footer-section/demo7/images/img_4.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://cdn.yahoobaba.net/footer-section/demo7/images/img_5.jpg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="https://cdn.yahoobaba.net/footer-section/demo7/images/img_6.jpg" />
                    </a>
                  </li>
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
                <p className="mb-2">
                  1582 Aliquam consectetur libero ut neque feugiat molestie.
                </p>
                <a href="#" className="appointment text-uppercase">
                  Get direction <i className="fas fa-angle-right" />
                </a>
                <ul className="icon">
                  <li>
                    <a href="#" data-tip="Facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="Twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tip="YouTube">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget footer-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-lg-0 col-md-6 mb-md-0 mb-2">
                <p>
                  ©2025,copy Right By{" "}
                  <a href="#" className="web">
                    Yahoo Baba
                  </a>{" "}
                  All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-6 text-white text-capitalize text-md-end">
                <ul className="links">
                  <li className="list-inline-item">
                    <a href="#">about us</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">services</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">privcy</a>
                  </li>
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
