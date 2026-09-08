import { Header } from '@/components/sites/adhamdannaway-com/root/Header';
import { PortfolioThumbs } from '@/components/sites/adhamdannaway-com/root/PortfolioThumbs';
import { Footer } from '@/components/sites/adhamdannaway-com/root/Footer';

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen w-full bg-white text-[#333333]">
      <Header />
      <main id="content" className="w-full pt-[62px] min-[830px]:pt-[92px]">
        <PortfolioThumbs />
      </main>
      <Footer />
    </div>
  );
}
