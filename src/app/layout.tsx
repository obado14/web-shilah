import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://web-shilah.vercel.app'),
  title: 'Shilah Al Jakarti | Portfolio',
  description:
    'Portfolio of Shilah Al Jakarti - high school student, aspiring web developer, and gamer.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Shilah Al Jakarti | Portfolio',
    description:
      'Portfolio of Shilah Al Jakarti - high school student, aspiring web developer, and gamer.',
    url: 'https://web-shilah.vercel.app',
    siteName: 'Shilah Al Jakarti',
    images: [
      {
        url: '/images/shilah-hero.png',
        width: 1671,
        height: 941,
        alt: 'Shilah Al Jakarti Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shilah Al Jakarti | Portfolio',
    description:
      'Portfolio of Shilah Al Jakarti - high school student, aspiring web developer, and gamer.',
    images: ['/images/shilah-hero.png'],
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
