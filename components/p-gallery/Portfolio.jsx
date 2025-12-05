import React from 'react';
import Image from 'next/image';

function Portfolio() {
  return (
    <section className="work-grid pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="item mb-80 mt-40">
              <div className="img">
                <Image src="/assets/imgs/works/grid/smart-calc.png" alt="" width={600} height={400} />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Figma Digital Agency</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="item mb-80 mt-40">
              <div className="img">
                <Image src="/assets/imgs/works/grid/idioms.png" alt="" width={600} height={400} />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Figma Digital Agency</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <div className="item mb-80 mt-40">
              <div className="img">
                <Image src="/assets/imgs/works/grid/adwolf.png" alt="" width={800} height={500} />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Figma Digital Agency</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end">
            <div className="item mb-80 mt-40">
              <div className="img">
                <Image src="/assets/imgs/works/grid/tespire.png" alt="" width={600} height={400} />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Figma Digital Agency</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="item mb-80 mt-40">
              <div className="img">
                <Image src="/assets/imgs/works/grid/5.jpg" alt="" width={600} height={400} />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Figma Digital Agency</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <div className="item mt-40">
              <div className="img">
                <Image src="/assets/imgs/works/grid/6.jpg" alt="" width={800} height={500} />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Figma Digital Agency</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
