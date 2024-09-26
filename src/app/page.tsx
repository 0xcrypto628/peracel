import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/assets/images/hero-bg.png')] bg-cover bg-no-repeat">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  );
}
