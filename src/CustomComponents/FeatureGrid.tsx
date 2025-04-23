import React from "react";

type Feature = {
  color: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export default function FeatureGrid({ featureGrid }: { featureGrid: Feature[] }) {
  return (
    <section className="w-full py-15 relative">
      <div className="xl:max-w-7xl mx-auto px-2 md:px-8">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
          Experienced a Leading Digital Marketing Agency in India For Innovative Business Growth
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-5">
          {featureGrid.map((feat, i) => (
            <div
              key={feat.title}
              className={`rounded-2xl shadow-lg p-6 flex flex-col items-start bg-gradient-to-br ${feat.color} animate-fade-in`}
              style={{
                animationDelay: `${0.06 * i}s`,
              }}
            >
              <div className="bg-white rounded-full mb-3 p-3 shadow flex items-center justify-center">
                {feat.icon}
              </div>
              <h4 className="text-lg font-semibold text-white drop-shadow">{feat.title}</h4>
              <p className="text-white/90 text-sm pt-1">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
