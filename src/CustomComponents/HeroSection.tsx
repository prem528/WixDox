import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="w-full px-6 md:px-24 mt-0 flex flex-col md:flex-row items-center justify-center gap-10 pt-10 pb-6 min-h-screen bg-white text-white relative">
            <div className="flex flex-col gap-4 max-w-xl flex-1">
                <h1 className="text-3xl md:text-5xl font-normal text-gray-900 animate-fade-in">
                    Elevate Your Online Presence
                    Anytime, Anywhere with <span className="text-red-600 font-bold">Wix</span><span className="text-red-600 bg-pink-100 font-bold rounded px-1">DOX</span> Your 24/7 Digital Partner
                </h1>
                <p className="text-xl text-gray-400">
                    With our expertise and round-the-clock support, we ensure your brand shines in the digital landscape. Partner with WixDox and embark on a journey to digital success.
                </p>
                <div className="flex gap-3 pt-2">
                    <Button className="bg-blue-400 hover:bg-blue-500 w-40 cursor-pointer shadow-lg transition-all hover:scale-105 animate-fade-in">Contact Now</Button>
                    {/* <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 cursor-pointer shadow-lg transition-all hover:scale-105 animate-fade-in">
                        <Ticket className="inline-block mr-2" />Create Ticket
                    </Button> */}
                </div>
            </div>

            {/* SVG Section with glow gradient background */}
            <div className="flex-1 flex items-center justify-center relative">
                {/* Glow background */}
                <div className="absolute w-[400px] h-[400px] md:w-[800px] md:h-[600px] rounded-full blur-3xl opacity-60 z-0 gradient-animation" />


                {/* SVG */}
                <img
                    src="/hero.svg"
                    alt="Hero Illustration"
                    className="max-w-full h-auto z-10 relative"
                />
            </div>
        </section>
    );
}
