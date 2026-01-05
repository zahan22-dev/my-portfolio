import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Header from '@/components/home-personal/Header';
// import Testimonials from '@/components/home-modern-studio/Testimonials';
import Marq from '@/components/home-personal/Marq';
import About from '@/components/home-personal/About';
import Skills from '@/components/home-personal/Skills';
import Portfolio from '@/components/home-personal/Portfolio';

export const metadata = {
  title: 'Zahan - Full Stack Developer & UI/UX Designer Portfolio',
  description: 'Explore Zahan\'s portfolio featuring modern web applications, creative UI/UX designs, and innovative digital solutions. Specializing in React, Next.js, and full-stack development.',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zahan',
    jobTitle: 'Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web applications, React, Next.js, and creative UI/UX design',
    url: 'https://zahan-portfolio.vercel.app',
    sameAs: [
      'https://github.com/zahan22',
      'https://linkedin.com/in/zahan',
    ],
    knowsAbout: ['Web Development', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'UI/UX Design', 'Full Stack Development'],
  };

  return (
    <body className="home-personal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Marq />
            <About />
            {/* <Services /> */}
            <Portfolio />
            <Skills />
            {/* <Testimonials /> */}
            {/* <Clients /> */}
            {/* <Blog /> */}
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
}
