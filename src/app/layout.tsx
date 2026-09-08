import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adhamdannaway.com'),
  title: 'Adham Dannaway | Product designer & front end developer',
  description:
    'Product designer and front end developer with a passion for designing beautiful and functional user experiences.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Adham Dannaway | Product designer & front end developer',
    description:
      'Product designer and front end developer with a passion for designing beautiful and functional user experiences.',
    url: 'https://www.adhamdannaway.com/',
    siteName: 'Adham Dannaway',
    images: [
      {
        url: '/images/adham-dannaway-designer-coder.jpg',
        width: 1040,
        height: 600,
        alt: 'Adham Dannaway UI designer & front end developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AdhamDannaway',
    creator: '@AdhamDannaway',
    title: 'Adham Dannaway | Product designer & front end developer',
    description:
      'Product designer and front end developer with a passion for designing beautiful and functional user experiences.',
    images: ['/images/adham-dannaway-designer-coder.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#333333]">
        {children}
      </body>
    </html>
  );
}
