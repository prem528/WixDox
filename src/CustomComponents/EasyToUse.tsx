import { Button } from "@/components/ui/button";

export default function EasyToUse() {
  return (
    <div className="max-w-2xl mx-auto text-center p-7 rounded-xl bg-gradient-to-r from-rose-100 via-white to-fuchsia-100 shadow mb-12 animate-fade-in">
      <h3 className="font-bold text-xl mb-4">Easy To Use</h3>
      <div className="flex flex-row gap-3 justify-center mb-2">
        <Button className="bg-fuchsia-500 text-white rounded px-6 font-semibold shadow hover:scale-105 transition">5+ Plans</Button>
        <Button className="bg-blue-500 text-white rounded px-6 font-semibold shadow hover:scale-105 transition">3,000+ Trusted</Button>
        <Button className="bg-fuchsia-300 text-gray-800 rounded px-6 font-semibold shadow hover:scale-105 transition">Friendly</Button>
      </div>
      <p className="text-gray-700 mt-3">
        WixDox blends next-gen technology with a user-friendly platform to help you achieve growth quickly and efficiently.
      </p>
    </div>
  );
}
