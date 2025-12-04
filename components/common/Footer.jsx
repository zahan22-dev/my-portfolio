import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <a href="/" className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </a>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
                491,36/C <br /> Karachi, Pakistan
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:zahankhan453@gmail.com">zahankhan453@gmail.com</a>
              </h6>
              <a href="tel:+923151029933" className="underline">
                <span className="fz-22 main-color">+92-3151029933</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://www.linkedin.com/in/zahan-uddin-khan-25931b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://www.instagram.com/zahan__22?igsh=ZDQ4bzQzbmM2ZWpi" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blursmart-calc.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
