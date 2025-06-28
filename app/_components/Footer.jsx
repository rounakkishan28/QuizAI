import React from "react";
import Link from "next/link";
import { Facebook, Heart, Instagram, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Information */}
        <div className="flex flex-col space-y-4">
          <Link href={"/"}>
            <h2 className="text-3xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-white to-slate-900 cursor-pointer">
              QuizAI
            </h2>
          </Link>
          <p className="text-sm text-gray-400">
            Unlock your beast mode with AI-driven learning.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/rounak.kishan.3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Facebook width={20} height={20} />
            </a>
            <a
              href="https://x.com/rounak_kishan28"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <Twitter width={20} height={20} />
            </a>
            <a
              href="https://www.instagram.com/_rounak_kishan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <Instagram width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rounak-kishan-931394257/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <Linkedin width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-slate-300">Explore</h3>
          <Link href="/" className="text-sm hover:text-gray-400 transition">
            Home
          </Link>
          <Link
            href="/contact"
            className="text-sm hover:text-gray-400 transition"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-sm hover:text-gray-400 transition"
          >
            About Us
          </Link>
        </div>

        {/* Additional Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold text-slate-300">Quick Links</h3>
          <Link href="#" className="text-sm hover:text-gray-400 transition">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:text-gray-400 transition">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm hover:text-gray-400 transition">
            FAQ
          </Link>
          <Link href="#" className="text-sm hover:text-gray-400 transition">
            Support
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-base text-gray-500">
        <p className="flex items-center justify-center">
          <span className="pr-1">Created with</span>
          <Heart />
          <span className="pl-1">
            by Rounak Kishan © {new Date().getFullYear()} StudioAI. All rights
            reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
