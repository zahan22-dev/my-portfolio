import React from 'react';
import Image from 'next/image';

function Skills() {
  return (
    <section className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                Honored to create digital<br />
                <span className="opacity-7">experiences for diverse clients.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/nextjs.png" alt="" width={150} height={150} />
                </div>
                <span className="value">95%</span>
              </div>
              <h6 className="fz-18">Next JS</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/reactjs.png" alt="" width={150} height={150} />
                </div>
                <span className="value">90%</span>
              </div>
              <h6 className="fz-18">React</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/python.png" alt="" width={150} height={150} />
                </div>
                <span className="value">85%</span>
              </div>
              <h6 className="fz-18">Python</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/s5.png" alt="" width={150} height={150} />
                </div>
                <span className="value">84%</span>
              </div>
              <h6 className="fz-18">SEO Optimization</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/icon3.png" alt="" width={150} height={150} />
                </div>
                <span className="value">85%</span>
              </div>
              <h6 className="fz-18">WordPress</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <Image src="/assets/imgs/resume/s6.png" alt="" width={150} height={150} />
                </div>
                <span className="value">85%</span>
              </div>
              <h6 className="fz-18">Graphic Design</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
