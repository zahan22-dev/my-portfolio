import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <a href="/" className="logo icon-img-100 md-mb80">
              <Image src="/assets/imgs/logo-light.png" alt="" width={100} height={100} />
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
              <h6 className="sub-title mb-30">Subscribe</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <a href="https://www.linkedin.com/in/zahan-uddin-khan-25931b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover-anim">
                  <li className="hover-this cursor-pointer ml-10">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
                <a href="https://www.instagram.com/zahan__22?igsh=ZDQ4bzQzbmM2ZWpi" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover-anim">
                  <li className="hover-this cursor-pointer ml-10">
                    <i className="fab fa-instagram"></i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
        </div>
      </div>
      <div className="circle-blur">
        <Image src="/assets/imgs/patterns/blursmart-calc.png" alt="" width={400} height={400} />
      </div>
    </footer>
  );
}

export default Footer;
