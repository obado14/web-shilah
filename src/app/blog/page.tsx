import { Header } from '@/components/sites/adhamdannaway-com/root/Header';
import { BlogSection } from '@/components/sites/adhamdannaway-com/root/BlogSection';
import { Footer } from '@/components/sites/adhamdannaway-com/root/Footer';

export default function BlogPage() {
  return (
    <div className="relative min-h-screen w-full bg-white text-[#333333]">
      <Header />
      <main id="content" className="w-full pt-[62px] min-[830px]:pt-[92px]">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
