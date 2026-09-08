import { Header } from '@/components/sites/adhamdannaway-com/root/Header';
import { AboutSection } from '@/components/sites/adhamdannaway-com/root/AboutSection';
import { Footer } from '@/components/sites/adhamdannaway-com/root/Footer';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-white text-[#333333]">
      <Header />
      <main id="content" className="w-full pt-[62px] min-[830px]:pt-[92px]">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
