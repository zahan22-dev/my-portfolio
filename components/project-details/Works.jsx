import React from 'react';
import Image from 'next/image';

function Works() {
  return (
    <div className="img-column">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb30">
              <Image src="/assets/imgs/works/3/idioms.png" alt="" width={600} height={400} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <Image src="/assets/imgs/works/3/adwolf.png" alt="" width={600} height={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
