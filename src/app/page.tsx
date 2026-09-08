import { Header } from '@/components/sites/adhamdannaway-com/root/Header';
import { HeroFace } from '@/components/sites/adhamdannaway-com/root/HeroFace';
import { AboutSection } from '@/components/sites/adhamdannaway-com/root/AboutSection';
import { PortfolioThumbs } from '@/components/sites/adhamdannaway-com/root/PortfolioThumbs';
import { BlogSection } from '@/components/sites/adhamdannaway-com/root/BlogSection';
import { ContactSection } from '@/components/sites/adhamdannaway-com/root/ContactSection';
import { Footer } from '@/components/sites/adhamdannaway-com/root/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white text-[#333333]">
      <Header />
      <main id="content" className="w-full">
        <HeroFace />
        <AboutSection />
        <PortfolioThumbs />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
