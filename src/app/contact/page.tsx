import { Header } from '@/components/sites/adhamdannaway-com/root/Header';
import { ContactSection } from '@/components/sites/adhamdannaway-com/root/ContactSection';
import { Footer } from '@/components/sites/adhamdannaway-com/root/Footer';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-white text-[#333333]">
      <Header />
      <main id="content" className="w-full pt-[62px] min-[830px]:pt-[92px]">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
