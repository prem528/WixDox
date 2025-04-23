
import { Users, Ticket, Check, File, Code, FileJson, } from "lucide-react";
import Navbar from "./CustomComponents/Navbar";
import HeroSection from "./CustomComponents/HeroSection";
import MiniCTA from "./CustomComponents/MiniCTA";
// import QuoteForm from "./CustomComponents/QuoteForm";
import WhyUsSection from "./CustomComponents/WhyUsSection";
import ChoosingWixDox from "./CustomComponents/ChoosingWixDox";
import TrustedResultsSection from "./CustomComponents/TrustedResultsSection";
import FeatureGrid from "./CustomComponents/FeatureGrid";
import StatsBar from "./CustomComponents/StatsBar";
import FAQSection from "./CustomComponents/FAQSection";
import EasyToUse from "./CustomComponents/EasyToUse";
import Testimonials from "./CustomComponents/Testimonials";
import Footer from "./CustomComponents/Footer";



// const techIcons = [
//   { icon: <Code size={40} className="text-yellow-400" />, name: "JavaScript" },
//   { icon: <FileJson size={40} className="text-green-700" />, name: "Django" },
//   { icon: <Settings size={40} className="text-blue-400" />, name: "PHP" },
//   { icon: <Code size={40} className="text-blue-600" />, name: "WordPress" },
//   { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />, name: "React" },
//   { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-10 h-10" />, name: "HTML" },
//   { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-10 h-10" />, name: "CSS" },
//   { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />, name: "Python" },
//   { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-10 h-10" />, name: "MySQL" },
// ];

const featureGrid = [
  {
    color: "from-violet-400 to-blue-500",
    icon: <File className="w-7 h-7" />,
    title: "Custom Software",
    desc: "We offer custom software solutions tailored precisely to your business needs.",
  },
  {
    color: "from-violet-400 to-blue-500",
    icon: <Code className="w-7 h-7" />,
    title: "Web Portals",
    desc: "Engage your audience with smart, scalable & secure web portal solutions.",
  },
  {
    color: "from-violet-400 to-blue-500",
    icon: <Users className="w-7 h-7" />,
    title: "Data Analytics",
    desc: "Transform data into insights with advanced analytics & dashboards.",
  },
  {
    color: "from-violet-400 to-blue-500",
    icon: <Check className="w-7 h-7" />,
    title: "UI/UX Design",
    desc: "Intuitive experiences & delightful designs for websites and apps.",
  },
  {
    color: "from-violet-400 to-blue-500",
    icon: <Ticket className="w-7 h-7" />,
    title: "CRM Consulting",
    desc: "End-to-end CRM implementation, integration & support services.",
  },
  {
    color: "from-violet-400 to-blue-500",
    icon: <Code className="w-7 h-7" />,
    title: "Website Re-Design",
    desc: "Revamp legacy websites with fresh UI, UX & modern technology stack.",
  },
  {
    color: "from-violet-400 to-blue-500",
    icon: <Code className="w-7 h-7" />,
    title: "Website Maintenance",
    desc: "Boost site performance & security with our maintenance services.",
  },
  {
    color: "from-violet-400 to-blue-500",
    icon: <File className="w-7 h-7" />,
    title: "Digital Marketing",
    desc: "Amplify your brand's visibility with our smart digital marketing.",
  },
  {
    color: "from-violet-400 to-blue-500",
    icon: <Code className="w-7 h-7" />,
    title: "Website SEO",
    desc: "Optimized sites for search, high traffic and conversion rates.",
  },
];

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

const testimonials = [
  {
    name: "Emanuel",
    icon: <File className="w-8 h-8 text-orange-500" />,
    review: "WixDox offers a robust all-in-one platform, making digital changes fast and effective. Their support is truly 24/7. Highly recommended for anyone serious about their online presence.",
    stars: 5,
  },
  {
    name: "Walton",
    icon: <Code className="w-8 h-8 text-yellow-500" />,
    review: "Software, web portals, and campaigns—WixDox have handled it all with absolute professionalism. Impressive design and analytics tools!",
    stars: 5,
  },
  {
    name: "Percy William",
    icon: <FileJson className="w-8 h-8 text-green-800" />,
    review: "Engaged WixDox to revamp our website & manage marketing. Their timely guidance & reporting helped us scale our business to new heights.",
    stars: 5,
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
      <div className="py-4">
        <ChoosingWixDox />
      </div>
      <TrustedResultsSection />
      <FeatureGrid featureGrid={featureGrid} />
      <StatsBar stats={stats} />
      <FAQSection faqs={faqs} />
      <div className="bg-[url(/fix.jpg)] bg-black/10 bg-cover bg-blend-overlay py-24">
        <EasyToUse />
      </div>
      
      <Testimonials testimonials={testimonials} />
      <Footer />
    </div>
  );
}