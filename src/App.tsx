import Navbar from "./CustomComponents/Navbar";
import HeroSection from "./CustomComponents/HeroSection";
import MiniCTA from "./CustomComponents/MiniCTA";

import WhyUsSection from "./CustomComponents/WhyUsSection";
import ChoosingWixDox from "./CustomComponents/ChoosingWixDox";
import TrustedResultsSection from "./CustomComponents/TrustedResultsSection";
 
import StatsBar from "./CustomComponents/StatsBar";
import FAQSection from "./CustomComponents/FAQSection";
import EasyToUse from "./CustomComponents/EasyToUse";
import Testimonials from "./CustomComponents/Testimonials";
import Footer from "./CustomComponents/Footer";
import TechStack from "./CustomComponents/TechStack";
import Services from "./CustomComponents/Services";


const faqs = [
  {
    q: "How to Change my Plans from Admin Dashboard?",
    a: "To change your plan, go to Admin dashboard. Visit the billing section, click on ‘Change Plan’, select your desired plan, and confirm your switch. Your billing will be updated accordingly."
  },
  {
    q: "How to Recover Password with?",
    a: "Click ‘Forgot Password’ on the login screen, and follow the instructions to reset your password via your registered email address.",
  },
  {
    q: "How to Change my Subscription Plan using PayPal?",
    a: "Go to your account settings, select ‘Subscription’, and use PayPal as your payment method to upgrade or downgrade your plan securely.",
  },
];


const stats = [
  { value: "6,604", label: "Problems Resolved" },
  { value: "181", label: "Happy Clients" },
  { value: "1,594", label: "Experts" },
  { value: "3,206", label: "Problems Solved" },
];

export default function Index() {
  return (
    <div className="w-full bg-white relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MiniCTA />
      <section className="xl:max-w-7xl mx-auto px-2 md:px-8 py-10 flex flex-col lg:flex-row gap-10 justify-center" id="about">
        {/* <QuoteForm /> */}
        <WhyUsSection />
      </section>
      <div className="py-6">
        <TechStack />
      </div>

      <div className="py-4">
        <ChoosingWixDox />
      </div>
      <TrustedResultsSection />
     
      <Services />
      <StatsBar stats={stats} />
      <FAQSection faqs={faqs} />
      <div className="bg-[url(https://img.freepik.com/free-vector/colleagues-working-together-office-illustrated_52683-24741.jpg?t=st=1745489456~exp=1745493056~hmac=07c8db9e7ddbc50c1c299a10cf197d065375f420ea0a5e2b3f716c2958525f12&w=2000)] 
       bg-black/0 bg-cover bg-fixed bg-center bg-blend-overlay   py-24">
        <EasyToUse />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}