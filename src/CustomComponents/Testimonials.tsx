import React from "react";

type Testimonial = {
  name: string;
  icon: React.ReactNode;
  review: string;
  stars: number;
};
export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="w-full bg-white py-10">
      <h3 className="font-bold text-center text-xl mb-8">Our Client Review</h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <div className="bg-gray-50 border rounded-2xl shadow-md p-6 relative flex flex-col gap-2 hover:shadow-xl transition duration-300 animate-fade-in" key={item.name} style={{ animationDelay: `${0.05 * idx}s` }}>
            <div className="absolute right-0 -top-2">{item.icon}</div>
            <h4 className="text-lg font-semibold">{item.name}</h4>
            <div className="flex gap-1 mb-2">
              {Array(item.stars)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
            </div>
            <p className="text-gray-700 text-sm">{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
