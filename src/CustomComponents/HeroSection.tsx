import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full px-6 md:px-24 mt-0 flex flex-col md:flex-row items-center justify-center gap-10 pt-10 pb-6 min-h-screen bg-white text-white relative overflow-hidden">
      
      {/* Left Text Section */}
      <div className="flex flex-col gap-4 max-w-xl flex-1 z-10">
        <h1 className="text-3xl md:text-5xl font-normal text-gray-900 animate-fade-in">
          Elevate Your Online Presence Anytime, Anywhere with{" "}
          <span className="text-red-600 font-bold">Wix</span>
          <span className="text-red-600 bg-pink-100 font-bold rounded px-1">DOX</span>{" "}
          Your 24/7 Digital Partner
        </h1>
        <p className="text-xl text-gray-500">
          With our expertise and round-the-clock support, we ensure your brand shines in the digital landscape. Partner with WixDox and embark on a journey to digital success.
        </p>
        <div className="flex gap-3 pt-2">
          <Button className="bg-blue-400 hover:bg-blue-500 w-40 cursor-pointer shadow-lg transition-all hover:scale-105 animate-fade-in">
            Contact Now
          </Button>
        </div>
      </div>

      {/* Right-side SVG Section */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <img src="/hero.svg" alt="Hero Illustration" className="max-w-full h-auto relative z-10" />
      </div>

      {/* Gradient Glow on Right */}
      <div className="absolute right-[100px] top-1/2 transform -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full blur-3xl opacity-60 z-0 gradient-animation" />

      {/* Floating Random Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-dotFade"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 1.5 + 0.2,
            }}
          ></span>
        ))}
      </div>
    </section>
  );
}
