import { playfair_display } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";

const IntroSection = () => {
  return (
    <div className="bg-[url('/assets/images/hero-bg.png')] flex-col flex items-center">
      <div
        className={cn(
          playfair_display.className,
          "text-[50px] text-center mb-[20px]"
        )}
      >
        <p>Book Any Influencer On</p>
        <strong className='text-[63px] font-[600]'>YOUR PODCAST</strong>
      </div>
      <p className='text-[26px] px-[240px] text-center'>
        Explore top-notch influencers and famous celebs with a single click to
        interview on your podcast!
      </p>
    </div>
  );
};

export default IntroSection;
