
import { Truck, Code, Headphones, DollarSign } from "lucide-react";

const features = [
  {
    icon: <Truck className="text-orange-500 w-10 h-10 transition-all duration-300" />,
    title: "Fast delivery, agile teams",
    description: "Rapid project delivery thanks to our agile, experienced squad.",
  },
  {
    icon: <Code className="text-blue-500 w-10 h-10  transition-all duration-300" />,
    title: "Full-stack solutions",
    description: "Comprehensive services from concept to launch in one place.",
  },
  {
    icon: <Headphones className="text-green-500 w-10 h-10 transition-all duration-300" />,
    title: "24/7 Support & monitoring",
    description: "Always-on support so your business never misses a beat.",
  },
  {
    icon: <DollarSign className="text-yellow-500 w-10 h-10 transition-all duration-300" />,
    title: "Honest, fixed quotes",
    description: "Transparent pricing with no hidden fees or surprises.",
  },
];

export default function WhyUsSection() {
  return (
    <div className="flex flex-col items-center gap-8 animate-fade-in">
      <h2 className="text-4xl font-semibold text-blue-700 mb-1 tracking-tight">
        What's So Unique About Us?
      </h2>
      <p className="text-gray-500 text-xl text-center max-w-3xl px-4 sm:px-0">
        Our super-charged team delivers the innovation you need to soar in today’s digital markets. We combine technical mastery, creative flair, and full-stack growth marketing to bring your vision to life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {features.map((f) => (
          <div
            key={f.title}
            className="group bg-white border border-gray-200 rounded-xl w-64 h-64 p-6 shadow-md flex flex-col items-center justify-center text-center gap-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-sky-50"
          >
            <div>{f.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
              {f.title}
            </h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
