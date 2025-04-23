import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: "/html.svg",
      title: "Custom Application Development",
      description: "Create scalable web and mobile applications to improve efficiency and reduce time, cost, and effort. With our consulting expertise in custom software solutions, custom application development, data management, integration, and software advisory services, we provide end-to-end design and development services using a rigorous and proven process."
    },
    {
      icon: "/bootstrap.svg",
      title: "Digital Marketing",
      description: "WixDox digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a feasible cost. From startups to medium-sized enterprises to multi-location companies, WixDox helps you expand your market reach to offer goods and services to your target customers."
    },
    {
      icon: "/tailwind.svg",
      title: "UX and UI Design",
      description: "Our skill in UX design empowers us to enhance and upgrade how users interact with your brand online—whether on a website, mobile app, or even a campaign ad. We craft delightful and intuitive digital experiences."
    },
    {
      icon: "/reactjs.svg",
      title: "Custom Web Development",
      description: "Our services include full-stack development with modern tools. Whether you need to upgrade an existing app or build a new enterprise solution, WixDox has you covered from front to back end."
    },
    {
      icon: "/java.svg",
      title: "Software Testing & Maintenance",
      description: "We use top-tier testing practices and a world-class testing lab to ensure your app’s performance, quality, and reliability. Desktop, mobile, or next-gen—we test it all and help you maintain it."
    },
    {
      icon: "/firebase.svg",
      title: "Cloud Services",
      description: "Our cloud solutions are tailored to your business needs—fixing issues, scaling infrastructure, improving security, and modernizing applications on any cloud platform."
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center md:text-left">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex overflow-hidden"
          >
            {/* Left 1/3 - Icon */}
            <div className="w-1/3 bg-indigo-50 flex items-center justify-center p-6">
              <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
            </div>

            {/* Right 2/3 - Text */}
            <div className="w-2/3 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-indigo-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
