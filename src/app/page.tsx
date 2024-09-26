import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  const images = [
    "/assets/images/influencers/1.png",
    "/assets/images/influencers/2.jpg",
    "/assets/images/influencers/3.jpg",
    "/assets/images/influencers/4.jpg",
    "/assets/images/influencers/5.jpeg",
  ];
  return (
    <div className='h-full'>
      <div className="bg-[url('/assets/images/hero-bg.png')] bg-cover bg-no-repeat">
        <NavBar />
        <HeroSection />
      </div>
      <ImageSlider images={images} />
    </div>
  );
}
