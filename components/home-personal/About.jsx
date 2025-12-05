import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <Image src="/assets/imgs/header/p2.png" alt="" width={400} height={400} />
              </div>
              <span className="icon">
                <Image src="/assets/imgs/resume/icon4.png" alt="" width={60} height={60} />
              </span>
              <span className="icon">
                <Image src="/assets/imgs/resume/icon1.png" alt="" width={60} height={60} />
              </span>
              <span className="icon">
                <Image src="/assets/imgs/resume/icon2.png" alt="" width={60} height={60} />
              </span>
              <span className="icon">
                <Image src="/assets/imgs/resume/icon3.png" alt="" width={60} height={60} />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">About Me</h6>
              <div className="text">
                <h4 className="mb-30">
                  I&apos;m{' '}
                  <span className="fw-200">
                    Web Developer
                  </span>{' '}
                  creating fast, modern, and responsive websites.
                </h4>
                <p>
                  I enjoy turning complex ideas into fast, clean, and user-friendly web experiences.
                  My goal is to build websites that clearly communicate your brand and deliver real results.
                  I&apos;ve developed modern web solutions for multiple businesses and growing brands.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100%</h3>
                          <h6 className="p-color sub-title">
                            Clients Satisfaction
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <Image src="/assets/imgs/arw0.png" alt="" width={40} height={40} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">10+</h3>
                          <h6 className="p-color sub-title">
                            Projects Completed
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <Image src="/assets/imgs/arw0.png" alt="" width={40} height={40} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
