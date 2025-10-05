"use client";

import React from "react";
import { 
  Instagram, 
  Mail, 
  Twitter,

} from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-6">
      <a
        href="https://instagram.com/steerifygroup"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="p-3 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a 
        href="mailto:info@steerify.com" 
        aria-label="Email"
        className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
      >
        <Mail className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com/SteerifyGroup"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </a>
    </div>
  );
}
