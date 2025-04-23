import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-4 justify-between">
        <div>
          <span className="text-2xl text-red-700 font-bold">WIX<span className="text-red-700 bg-pink-100 rounded px-1 ml-0.5">DOX</span></span>
          <p className="mt-3 text-sm max-w-xs">
            WixDox - Your trusted partner in digital transformation, website development, and digital marketing.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a className="hover:scale-110 transition" href="#"><Facebook size={20}/></a>
            <a className="hover:scale-110 transition" href="#"><Instagram size={20}/></a>
            <a className="hover:scale-110 transition" href="#"><Youtube size={20}/></a>
            <a className="hover:scale-110 transition" href="#"><Linkedin size={20}/></a>
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#about" className="hover:underline">FAQ</a></li>
            <li><a href="#services" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#faq" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">HAVE QUESTIONS?</div>
          <ul className="space-y-1 text-sm">
            <li><b>📞</b> +91 040 2986 091</li>
            <li><b>📧</b> info@wixdox.com</li>
            <li><b>📍</b> 104/12, India</li>
            <li><b>🌐</b> Skype</li>
          </ul>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Services</div>
          <ul className="space-y-1 text-sm">
            <li>Website Development</li>
            <li>Marketing & Branding</li>
            <li>Analytics</li>
            <li>Cloud Consulting</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-xs text-black font-medium">
        © {new Date().getFullYear()} WixDox. All Rights Reserved.
      </div>
      <div className="w-full bg-blue-300 text-black text-center text-base font-semibold py-2 mt-4">
        Need help? Live Chat our award-winning support team 24/7 / Support Available
      </div>
    </footer>
  );
}
