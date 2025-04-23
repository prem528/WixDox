
 
import Navbar from "./CustomComponents/Navbar";
import HeroSection from "./CustomComponents/HeroSection";
import MiniCTA from "./CustomComponents/MiniCTA";

import WhyUsSection from "./CustomComponents/WhyUsSection";
import ChoosingWixDox from "./CustomComponents/ChoosingWixDox";
import TrustedResultsSection from "./CustomComponents/TrustedResultsSection";
// import FeatureGrid from "./CustomComponents/FeatureGrid";
import StatsBar from "./CustomComponents/StatsBar";
import FAQSection from "./CustomComponents/FAQSection";
import EasyToUse from "./CustomComponents/EasyToUse";
import Testimonials from "./CustomComponents/Testimonials";
import Footer from "./CustomComponents/Footer";
import TechStack from "./CustomComponents/TechStack";
import Services from "./CustomComponents/Services";



// const featureGrid = [
//   {
//     color: "from-violet-400 to-blue-500",
//     icon: <File className="w-7 h-7" />,
//     title: "Custom Software",
//     desc: "We offer custom software solutions tailored precisely to your business needs.",
//   },
//   {
//     color: "from-violet-400 to-blue-500",
//     icon: <Code className="w-7 h-7" />,
//     title: "Web Portals",
//     desc: "Engage your audience with smart, scalable & secure web portal solutions.",
//   },
//   {
//     color: "from-violet-400 to-blue-500",
//     icon: <Users className="w-7 h-7" />,
//     title: "Data Analytics",
//     desc: "Transform data into insights with advanced analytics & dashboards.",
//   },
//   {
//     color: "from-violet-400 to-blue-500",
//     icon: <Check className="w-7 h-7" />,
//     title: "UI/UX Design",
//     desc: "Intuitive experiences & delightful designs for websites and apps.",
//   },
//   {
//     color: "from-violet-400 to-blue-500",
//     icon: <Ticket className="w-7 h-7" />,
//     title: "CRM Consulting",
//     desc: "End-to-end CRM implementation, integration & support services.",
//   },
//   {
//     color: "from-violet-400 to-blue-500",
//     icon: <Code className="w-7 h-7" />,
//     title: "Website Re-Design",
//     desc: "Revamp legacy websites with fresh UI, UX & modern technology stack.",
//   },
//   {
//     color: "from-violet-400 to-blue-500",
//     icon: <Code className="w-7 h-7" />,
//     title: "Website Maintenance",
//     desc: "Boost site performance & security with our maintenance services.",
//   },
//   {
//     color: "from-violet-400 to-blue-500",
//     icon: <File className="w-7 h-7" />,
//     title: "Digital Marketing",
//     desc: "Amplify your brand's visibility with our smart digital marketing.",
//   },
//   {
//     color: "from-violet-400 to-blue-500",
//     icon: <Code className="w-7 h-7" />,
//     title: "Website SEO",
//     desc: "Optimized sites for search, high traffic and conversion rates.",
//   },
// ];

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
        <TechStack/>
      </div>
      
      <div className="py-4">
        <ChoosingWixDox />
      </div>
      <TrustedResultsSection />
      {/* <FeatureGrid featureGrid={featureGrid} /> */}
      <Services/>
      <StatsBar stats={stats} />
      <FAQSection faqs={faqs} />
      <div className="bg-[url(/fix.jpg)] bg-black/0 bg-cover bg-fixed bg-center bg-blend-overlay py-24">
        <EasyToUse />
      </div>


      <Testimonials  />
      <Footer />
    </div>
  );
}