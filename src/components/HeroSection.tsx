import { playfair_display } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SearchBar from "./ui/SearchBar";

const HeroSection = () => {
  return (
    <div className=' flex-col flex gap-[30px] items-center pt-[60px]'>
      <div
        className={cn(playfair_display.className, "text-[50px] text-center")}
      >
        <p>Book Any Influencer On</p>
        <strong className='text-[63px] text-purple font-[600]'>
          YOUR PODCAST
        </strong>
      </div>
      <p className='text-[26px] max-w-[600px] text-center'>
        Explore top-notch influencers and famous celebs with a single click to
        interview on your podcast!
      </p>
      <div className='relative h-auto aspect-[3/1] w-full'>
        <div>
          <SearchBar />
        </div>
        <Image
          priority
          src='/assets/images/hero-banner.png'
          fill
          alt='banner'
        />
      </div>
    </div>
  );
};

export default HeroSection;
