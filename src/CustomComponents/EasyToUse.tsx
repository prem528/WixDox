import { Button } from "@/components/ui/button";

export default function EasyToUse() {
  return (
    <div className="max-w-2xl mx-auto text-center p-4 rounded-xl bg-gradient-to-r from-blue-100 via-white to-blue-100 border border-blue-200 mb-12 animate-fade-in">
      <h3 className="font-semibold text-3xl mb-4">Ready to get Started ?</h3>

      <p className="text-gray-700 mt-3 px-8">
        WixDox blends next-gen technology with a user-friendly platform to help you achieve growth quickly and efficiently.
      </p>
      <div className="flex flex-row gap-3 justify-center mb-2 p-4">
        {/* <Button className="bg-fuchsia-500 text-white rounded px-6 font-semibold shadow hover:scale-105 transition">5+ Plans</Button> */}
        <Button className="bg-blue-500 text-white rounded px-6 font-semibold shadow hover:scale-105 transition">WORK WITH US</Button>
        {/* <Button className="bg-fuchsia-300 text-gray-800 rounded px-6 font-semibold shadow hover:scale-105 transition">Friendly</Button> */}
      </div>
    </div>
  );
}
