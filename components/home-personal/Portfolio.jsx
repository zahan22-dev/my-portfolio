'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">My Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          {/* Smart Calc */}
          <div className="card-item sub-bg">
            {/* The Smart Calculator */}
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Web App
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Development
                      </a>
                    </div>
                    <h4>The Smart Calculator</h4>
                  </div>
                  <div>
                    <p>
                      A sleek and highly intuitive calculator, crafted to make everyday calculations faster, simpler, and more efficient for all users.
                    </p>
                    <a href="https://www.thesmartcalculator.com/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Launch Project <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <Image src="/assets/imgs/works/generated/smart-calc.png" alt="" width={700} height={500} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            {/* Idioms Smilies */}
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Web App
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Development
                      </a>
                    </div>
                    <h4>Idioms Smilies</h4>
                  </div>
                  <div>
                    <p>
                      Idiomsimile.com — Unlock the magic of English expressions with clear meanings, vivid examples and creative usage.</p>
                    <a href="https://idiomsimile.com/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Launch Project <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <Image src="/assets/imgs/works/generated/idioms.png" alt="" width={700} height={500} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            {/* Adwolf */}
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Web App
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Development
                      </a>
                    </div>
                    <h4>Adwolf</h4>
                  </div>
                  <div>
                    <p>
                      Adwolf.io — Elevating creators into full‑fledged brands with custom design, content & marketing.
                    </p>
                    <a href="https://adwolf.io/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Launch Project <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <Image src="/assets/imgs/works/generated/adwolf.png" alt="" width={700} height={500} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            {/* Tespire */}
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Wordpress
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        CMS
                      </a>
                    </div>
                    <h4>Tespire</h4>
                  </div>
                  <div>
                    <p>
                      Tes-pire — Empowering your business with smart tools, seamless workflow and scalable growth.
                    </p>
                    <a href="https://tes-pire.com/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Launch Project <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <Image src="/assets/imgs/works/generated/tespire.png" alt="" width={700} height={500} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            {/* Burqora - SEP */}
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Wordpress
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        CMS
                      </a>
                    </div>
                    <h4>Burqora</h4>
                  </div>
                  <div>
                    <p>
                      BurqOra — The all-in-one workforce platform: streamline HR, payroll & performance in one smart dashboard.
                    </p>
                    <a href="https://burqora.io/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Launch Project <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <Image src="/assets/imgs/works/generated/burqora.png" alt="" width={700} height={500} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            {/* Salesflo */}
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Wordpress
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        CMS
                      </a>
                    </div>
                    <h4>Salesflo</h4>
                  </div>
                  <div>
                    <p>
                      Salesflo — Powering FMCG growth with smart sales automation, live insights, and end-to-end distribution control.
                    </p>
                    <a href="https://www.salesflo.com/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Launch Project <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <Image src="/assets/imgs/works/generated/salesflo.png" alt="" width={700} height={500} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            {/* MyZoi */}
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Wordpress
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        CMS
                      </a>
                    </div>
                    <h4>myZoi</h4>
                  </div>
                  <div>
                    <p>
                      myZoi — Financial freedom for migrant workers: instant payroll, low-cost remittances and smart money tools.
                    </p>
                    <a href="https://myzoi.com/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Launch Project <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <Image src="/assets/imgs/works/generated/myzoi.png" alt="" width={700} height={500} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            {/* RBT */}
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Web App
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Development
                      </a>
                    </div>
                    <h4>RBT Practice Exams</h4>
                  </div>
                  <div>
                    <p>
                      RBTPracticeExams.org — Your trusted online toolkit to master RBT certification with confidence.
                    </p>
                    <a href="https://rbtpracticeexams.org/" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Launch Project <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <Image src="/assets/imgs/works/1/3.png" alt="" width={700} height={500} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            Building clean, functional and visually engaging <span className="fw-600">web solutions.</span>
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
