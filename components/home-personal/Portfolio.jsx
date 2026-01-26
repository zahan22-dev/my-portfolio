'use client';
import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const containerRef = useRef(null);

  const projects = [
    {
      title: 'The Smart Calculator',
      tags: ['Web App', 'Web Development'],
      description:
        'A sleek and highly intuitive calculator, crafted to make everyday calculations faster, simpler, and more efficient for all users.',
      link: 'https://www.thesmartcalculator.com/',
      image: '/assets/imgs/works/generated/smart-calc-v2.png',
    },
    {
      title: 'Idioms Smilies',
      tags: ['Web App', 'Web Development'],
      description:
        'Idiomsimile.com — Unlock the magic of English expressions with clear meanings, vivid examples and creative usage.',
      link: 'https://idiomsimile.com/',
      image: '/assets/imgs/works/generated/idioms.png',
    },
    {
      title: 'Adwolf',
      tags: ['Web App', 'Web Development'],
      description:
        'Adwolf.io — Elevating creators into full‑fledged brands with custom design, content & marketing.',
      link: 'https://adwolf.io/',
      image: '/assets/imgs/works/generated/adwolf.png',
    },
    {
      title: 'Tespire',
      tags: ['Wordpress', 'CMS'],
      description:
        'Tes-pire — Empowering your business with smart tools, seamless workflow and scalable growth.',
      link: 'https://tes-pire.com/',
      image: '/assets/imgs/works/generated/tespire.png',
    },
    {
      title: 'Burqora',
      tags: ['Wordpress', 'CMS'],
      description:
        'BurqOra — The all-in-one workforce platform: streamline HR, payroll & performance in one smart dashboard.',
      link: 'https://burqora.io/',
      image: '/assets/imgs/works/generated/burqora.png',
    },
    {
      title: 'Salesflo',
      tags: ['Wordpress', 'CMS'],
      description:
        'Salesflo — Powering FMCG growth with smart sales automation, live insights, and end-to-end distribution control.',
      link: 'https://www.salesflo.com/',
      image: '/assets/imgs/works/generated/salesflo.png',
    },
    {
      title: 'myZoi',
      tags: ['Wordpress', 'CMS'],
      description:
        'myZoi — Financial freedom for migrant workers: instant payroll, low-cost remittances and smart money tools.',
      link: 'https://myzoi.com/',
      image: '/assets/imgs/works/generated/myzoi.png',
    },
    {
      title: 'RBT Practice Exams',
      tags: ['Web App', 'Web Development'],
      description:
        'RBTPracticeExams.org — Your trusted online toolkit to master RBT certification with confidence.',
      link: 'https://rbtpracticeexams.org/',
      image: '/assets/imgs/works/1/3.png',
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.portfolio-card-modern',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.portfolio-modern-grid',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="work-card section-padding pb-0" ref={containerRef}>
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
          </div>
        </div>
        
        <div className="portfolio-modern-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card-modern" key={index}>
              <div className="portfolio-image-wrapper">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block h-100 w-100"
                >
                  <div className="portfolio-image-overlay"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={450}
                    className="img-cover"
                    loading="lazy"
                    quality={90}
                  />
                </a>
              </div>
              <div className="portfolio-content-modern">
                <div className="portfolio-tags-modern">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag-modern">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="portfolio-title-modern">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>
                <p className="portfolio-desc-modern">{project.description}</p>
                <div className="portfolio-link-wrapper">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link-modern"
                    aria-label={`View ${project.title}`}
                  >
                    <span>View Project</span>
                    <i className="ti-arrow-top-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            Building clean, functional and visually engaging{' '}
            <span className="fw-600">web solutions.</span>
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
