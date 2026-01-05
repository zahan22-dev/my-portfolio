import './globals.css';

export const metadata = {
  metadataBase: new URL('https://zahan-portfolio.vercel.app'),
  title: {
    default: 'Zahan - Full Stack Developer & UI/UX Designer',
    template: '%s | Zahan Portfolio'
  },
  description: 'Professional portfolio of Zahan - Full Stack Developer specializing in modern web applications, React, Next.js, and creative UI/UX design. Explore my latest projects and get in touch.',
  keywords: ['Zahan', 'Full Stack Developer', 'Web Developer', 'React Developer', 'Next.js', 'UI/UX Designer', 'Portfolio', 'Web Design', 'JavaScript', 'TypeScript', 'Frontend Developer'],
  authors: [{ name: 'Zahan' }],
  creator: 'Zahan',
  publisher: 'Zahan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zahan-portfolio.vercel.app',
    siteName: 'Zahan Portfolio',
    title: 'Zahan - Full Stack Developer & UI/UX Designer',
    description: 'Professional portfolio showcasing modern web applications, creative designs, and innovative digital solutions.',
    images: [
      {
        url: '/assets/imgs/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zahan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zahan - Full Stack Developer & UI/UX Designer',
    description: 'Professional portfolio showcasing modern web applications and creative designs.',
    images: ['/assets/imgs/og-image.png'],
    creator: '@zahan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://zahan-portfolio.vercel.app" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      {children}
    </html>
  );
}
