'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    if (cards.length === 0) return;

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
    const timer = setTimeout(() => {
      Playing();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

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
          </div>
        </div>
        <div className="cards">
          {projects.map((project, index) => (
            <div 
              className="card-item sub-bg" 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                willChange: hoveredIndex === index ? 'transform, box-shadow' : 'auto'
              }}
            >
              <div className="row">
                <div className="col-lg-5">
                  <div className="cont">
                    <div>
                      <div className="mb-20">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="tag"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="mb-15 fz-24 fw-600">{project.title}</h4>
                      <p className="fz-16 opacity-8">{project.description}</p>
                    </div>
                    <div className="mt-30">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="butn-crev d-flex align-items-center"
                        aria-label={`Launch ${project.title}`}
                      >
                        <span className="hover-this">
                          <span className="circle hover-anim d-flex align-items-center justify-content-center">
                            <i className="ti-arrow-top-right fz-18"></i>
                          </span>
                        </span>
                        <span className="text ml-15 fz-14 ls1 text-u fw-500">
                          Launch Project
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="img">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-block overflow-hidden radius-10"
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.description}`}
                        width={700}
                        height={500}
                        className="radius-10"
                        loading="lazy"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
