'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import '../../app/globals.css';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Demos() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="demos" data-scroll-index="1">
      <div
        className="container-xxl bg-img overlay-center"
        data-background="/assets/imgs/background/bgidioms.png"
        data-overlay-dark="8"
      >
        <div className="text-center mb-80 ontop">
          <h2>
            Awesome <span>5</span> Home Pages
          </h2>
        </div>
        <div className=" container3x  ontop">
          <div className="carddx">
            <div className="   items">
              <div className="item text-center mb-50">
                <div className="img mb-20">
                  <Image src="/landing-preview/img/demos/smart-calc.png" alt="" width={300} height={200} />
                </div>
                <h6>01 | Main Home</h6>
                <a href="/home-main" target="_blank"></a>
              </div>
            </div>
          </div>
          <div className="carddx">
            <div className="   items">
              <div className="item text-center mb-50">
                <div className="img mb-20">
                  <Image src="/landing-preview/img/demos/idioms.png" alt="" width={300} height={200} />
                </div>
                <h6>02 | Modern Studio</h6>
                <a href="/home-modern-studio" target="_blank"></a>
              </div>
            </div>
          </div>
          <div className="carddx">
            <div className="   items">
              <div className="item text-center mb-50">
                <div className="img mb-20">
                  <Image src="/landing-preview/img/demos/adwolf.png" alt="" width={300} height={200} />
                </div>
                <h6>03 | Creative Agency</h6>
                <a href="/home-creative-agency" target="_blank"></a>
              </div>
            </div>
          </div>
          <div className="carddx">
            <div className="   items">
              <div className="item text-center mb-50">
                <div className="img mb-20">
                  <Image src="/landing-preview/img/demos/tespire.png" alt="" width={300} height={200} />
                </div>
                <h6>04 | Digital Agency</h6>
                <a href="/home-digital-agency" target="_blank"></a>
              </div>
            </div>
          </div>
          <div className="carddx">
            <div className="   items">
              <div className="item text-center mb-50">
                <div className="img mb-20">
                  <Image src="/landing-preview/img/demos/burqora.png" alt="" width={300} height={200} />
                </div>
                <h6>05 | Freelancer</h6>
                <a href="/home-personal" target="_blank"></a>
              </div>
            </div>
          </div>

          <div className="carddx">
            <div className="items">
              <div className="item text-center mb-50">
                <div className="img mb-20">
                  <Image src="/landing-preview/img/demos/salesflo.png" alt="" width={300} height={200} />
                </div>
                <h6>07 | Creative Work</h6>
                <a href="/portfolio-creative" target="_blank"></a>
              </div>
            </div>
          </div>
          <div className="carddx">
            <div className="   items">
              <div className="item text-center mb-50">
                <div className="img mb-20">
                  <Image src="/landing-preview/img/demos/8.png" alt="" width={300} height={200} />
                </div>
                <h6>08 | Work Carousel</h6>
                <a href="/portfolio-creative-carousel" target="_blank"></a>
              </div>
            </div>
          </div>
          <div className="carddx">
            <div className="   items">
              <div className="item text-center mb-50">
                <div className="img mb-20">
                  <Image src="/landing-preview/img/demos/myzoi.png" alt="" width={300} height={200} />
                </div>
                <h6>06 | Work Gallery</h6>
                <a href="/portfolio-gallery" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="bord"></div>
      </div>
    </section>
  );
}

export default Demos;
