import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-12 md:py-24">
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Main Container */}
      <div className="relative z-10 container max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Animated Icon Container */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-[#215aff]/20 rounded-full blur-xl scale-110 opacity-75 group-hover:scale-125 transition-transform duration-500" />
          <div className="relative bg-white p-6 rounded-full shadow-xl border border-blue-50 flex items-center justify-center">
            <Compass className="w-16 h-16 text-[#215aff] animate-[spin_30s_linear_infinite]" />
          </div>
        </div>

        {/* 404 text with brand gradient */}
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#000d44] via-[#215aff] to-[#04e841] filter drop-shadow-sm select-none leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl md:text-4xl font-bold text-[#000d44] tracking-tight">
          Oops! This Page is Lost
        </h2>

        {/* Friendly Message with brand context */}
        <p className="mt-4 text-sm md:text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
          But don't worry, every path can lead to a new dream!
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <Link href="/" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-[#215aff] hover:bg-[#000d44] text-white font-semibold rounded-full px-8 py-6 h-auto text-base transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Return Home
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-2 border-gray-200 hover:border-[#215aff] hover:bg-blue-50/50 text-[#000d44] hover:text-[#215aff] font-semibold rounded-full px-8 py-6 h-auto text-base transition-all duration-300 transform hover:scale-[1.03] cursor-pointer flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}