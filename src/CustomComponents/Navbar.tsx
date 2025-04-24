import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { TopBar } from "./TopBar";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowTopBar(currentScrollY <= lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* TopBar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-700 ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <TopBar />
      </div>

      {/* Navbar that shifts upward when TopBar hides */}
      <nav
        className={`fixed left-2 right-2 z-40 flex items-center justify-between px-3 sm:px-16 py-2 sm:py-3 
          backdrop-blur-md bg-slate-100/50 shadow-lg transition-all duration-700 ease-in-out 
          rounded-b-xl rounded-t-xl ${
            showTopBar ? "top-[48px]" : "top-2"
          }`}
      >
        <div className="flex items-center space-x-2">
          <span className="text-4xl font-bold text-pink-700 tracking-tighter">
            WIX
            <span className="text-red-700 bg-pink-100 rounded px-1 ml-0.5">DOX</span>
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-6 font-semibold text-gray-800 text-sm">
          <li className="hover:underline underline-offset-2 transition"><a href="#about">About</a></li>
          <li className="hover:underline underline-offset-2 transition"><a href="#services">Services</a></li>
          <li className="hover:underline underline-offset-2 transition"><a href="#contact">Contact</a></li>
        </ul>
        <div className="flex items-center gap-2">
          <a href="tel:+915212040110" className="text-orange-500 hover:scale-110 transition"><Phone size={20} /></a>
          <a href="mailto:info@wixdox.com" className="text-blue-500 hover:scale-110 transition"><Mail size={20} /></a>
          <a href="#" className="ml-2">
            <Button className="bg-blue-500 text-white font-semibold rounded-full px-4 py-2 hover:bg-blue-600 transition">
              Get A Free Quote
            </Button>
          </a>
        </div>
      </nav>
    </>
  );
}
