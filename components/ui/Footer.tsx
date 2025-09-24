import { Separator } from "@/components/ui/separator";
import { Linkedin, Instagram, Mail, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 w-full h-auto">
      <h4 className="text-yellow-500 font-semibold text-3xl">
        Let's Connect here
      </h4>
      <div className="flex flex-wrap">
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/timothy-adesina-bb1188221/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-6 h-6 text-yellow-500 hover:text-blue-500" />
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="w-6 h-6 text-yellow-500 hover:text-pink-500" />
          </a>
          <a href="">
            <Mail className="w-6 h-6 text-yellow-500 hover:text-yellow-500" />
          </a>
          <a href="https://x.com/timobest121" target="_blank" rel="noreferrer">
            <TwitterIcon className="w-6 h-6 text-yellow-500 hover:text-blue-400" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center space-x-3 bg-black/50 backdrop-blur-sm px-8 py-4 rounded-full border border-yellow-400/20">
            <span className="text-gray-200">Beautifully crafted with</span>
            <div className="relative">
              <span className="text-yellow-400 text-xl animate-bounce">❤️</span>
              <div className="absolute inset-0 text-yellow-400 text-xl animate-ping opacity-30">
                ❤️
              </div>
            </div>
            <span className="text-gray-200">by</span>
            <span className="text-yellow-400 font-bold text-lg tracking-wide hover:text-yellow-300 transition-all duration-300 hover:scale-105 cursor-pointer">
              TimoBest
            </span>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400/50"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400/50"></div>
          </div>

          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Copyright © 2025 by TimoBest
            <br />
            <span className="text-gray-500">All rights reserved</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
