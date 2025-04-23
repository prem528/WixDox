
export default function TrustedResultsSection() {
    return (
      <section className="xl:max-w-7xl mx-auto bg-gray-50 md:px-8 flex flex-col lg:flex-row gap-10 items-center py-2" id="services">
        <div className="flex-1 flex items-center justify-center">
          <img src="/marketing.jpg" alt="Client Discussion" className="w-140 h-auto object-cover rounded-md" />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-xl md:text-3xl font-semibold text-blue-800">
            Experienced a Leading Digital Marketing Agency in India for innovative business growth.
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-500 text-lg">
            <li>24/7 Stellar Availability</li>
            <li>Fresh New Solutions</li>
            <li>Future-Ready Thinking</li>
          </ul>
        </div>
      </section>
    );
  }
  