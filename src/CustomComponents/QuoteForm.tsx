
import { Button } from "@/components/ui/button";

export default function QuoteForm() {
  return (
    <div className="w-full lg:w-[43%] bg-white rounded-xl shadow-xl p-7 flex flex-col gap-2 border animate-fade-in">
      <div className="space-y-3">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-sm text-gray-700">Name</label>
            <input className="rounded border px-3 py-2 text-base bg-gray-50 focus:ring-2 focus:ring-fuchsia-300" type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-sm text-gray-700">Email Address</label>
            <input className="rounded border px-3 py-2 text-base bg-gray-50 focus:ring-2 focus:ring-fuchsia-300" type="email" id="email" placeholder="you@email.com" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="service" className="font-semibold text-sm text-gray-700">Select Service</label>
            <select className="rounded border px-3 py-2 text-base bg-gray-50" id="service">
              <option>Website Development</option>
              <option>Digital Marketing</option>
              <option>SEO & Analytics</option>
              <option>App Development</option>
              <option>Consulting</option>
            </select>
          </div>
          <Button className="bg-violet-600 hover:bg-violet-700 text-lg font-semibold rounded transition-all shadow-lg">Get Quote</Button>
          <div className="flex items-center gap-2 text-xs text-gray-700 pt-1">
            <input type="checkbox" id="agree" className="accent-fuchsia-700"/>
            <label htmlFor="agree">I agree to WixDox Terms & Privacy</label>
          </div>
        </form>
      </div>
    </div>
  );
}