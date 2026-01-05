import React from 'react';
import Image from 'next/image';

const BrowserMockup = ({ src, alt = "Project Screenshot" }) => {
    return (
        <div className="browser-mockup">
            <div className="browser-header">
                <div className="dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="address-bar">
                    <span>thesmartcalculator.com</span>
                </div>
            </div>
            <div className="browser-content">
                <Image
                    src={src}
                    alt={alt}
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </div>
            <style jsx>{`
        .browser-mockup {
          background: #1e1e1e;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          transition: transform 0.3s ease;
        }
        .browser-mockup:hover {
          transform: translateY(-5px);
        }
        .browser-header {
          background: #2d2d2d;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .dots {
          display: flex;
          gap: 6px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }
        
        .address-bar {
          flex: 1;
          background: rgba(255,255,255,0.05);
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          font-family: monospace;
        }
        
        .browser-content {
          position: relative;
          line-height: 0;
        }
      `}</style>
        </div>
    );
};

export default BrowserMockup;
