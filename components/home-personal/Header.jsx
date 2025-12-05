'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Typed from 'typed.js';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();

    const typed = new Typed('.typed-text', {
      strings: ['Full Stack Developer', 'Frontend Developer', 'AI Assisted Developer'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/p0.png"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <Image src="/assets/imgs/header/hi.png" alt="" width={30} height={30} />
                </span>{' '}
                Hello! there
              </h6>
              <h1 className="fw-700 mb-10">
                I&apos;m <span className="main-color">Zahan</span> Uddin Khan
              </h1>
              <h3>
                I am a <span className="typed-text main-color"></span>
              </h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      From the inception of a project to its completion, I
                      employ a comprehensive and holistic approach.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <Image
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                        width={60}
                        height={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">zahankhan453@gmail.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">+92 315 1029933</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">491, 36/C, Korangi no 5, Karachi</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
