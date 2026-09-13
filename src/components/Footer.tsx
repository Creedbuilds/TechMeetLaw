import { NavLink } from "react-router";
import { ArrowUp, Link, Mail, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
        <div>
          <NavLink to="/" className="flex items-center gap-2 mb-3">
            <Scale width={18} height={18} />
            <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em" }} className="text-yellow-400 uppercase">
              Tech Meets Law
            </span>
          </NavLink>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13 }} className="text-gray-400 leading-relaxed max-w-xs">
            We love exploring the intersection of technology and law, making legal information more accessible, cutting-edge, and easier to navigate.
          </p>
          <div className="flex gap-2 mt-4">
            <a href="#" className="w-8 h-8 border border-gray-700 flex items-center justify-center rounded hover:border-yellow-400 transition-colors">
              <Link width={14} height={14} className="text-gray-400" />
            </a>
            <a href="#" className="w-8 h-8 border border-gray-700 flex items-center justify-center rounded hover:border-yellow-400 transition-colors">
              <Mail width={14} height={14} className="text-gray-400" />
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em" }} className="text-yellow-400 uppercase mb-4">
            Categories
          </h4>
          {["Technology", "Technology Law", "Laws"].map((cat) => (
            <a key={cat} href="#" style={{ fontFamily: "Inter, sans-serif", fontSize: 13 }} className="block text-gray-400 hover:text-yellow-400 mb-2 uppercase tracking-wider transition-colors">
              {cat}
            </a>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em" }} className="text-white uppercase mb-4">
            Company
          </h4>
          {["About Us", "Contact", "Privacy Policy"].map((item) => (
            <a key={item} href="#" style={{ fontFamily: "Inter, sans-serif", fontSize: 13 }} className="block text-gray-400 hover:text-yellow-400 mb-2 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-6 flex items-center justify-between">
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12 }} className="text-gray-600">
          © 2024 Tech Meets Law. All rights reserved.
        </p>
        <button className="w-8 h-8 bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center rounded transition-colors">
          <ArrowUp width={14} height={14} />
        </button>
      </div>
    </footer>
  );
}
