import { Header } from '@/components/sites/adhamdannaway-com/root/Header';
import { HeroFace } from '@/components/sites/adhamdannaway-com/root/HeroFace';
import { PortfolioThumbs } from '@/components/sites/adhamdannaway-com/root/PortfolioThumbs';
import { Footer } from '@/components/sites/adhamdannaway-com/root/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white text-[#333333]">
      <Header />
      <main id="content" className="w-full">
        <HeroFace />
        <PortfolioThumbs />
      </main>
      <Footer />
    </div>
  );
}
