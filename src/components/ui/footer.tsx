import React from "react";
import logo from "@public/assets/logo/logo.svg";
import Image from "next/image";
const Footer = () => {
  const footerLinks = {
    Product: ["Characters", "AI-Speaking", "About US"],
    Resources: ["Blog", "Help-Center", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Image src={logo} alt="Logo" className="h-24 w-24" />
          </div>
          <p className="text-gray-600 max-w-xs">
            Making English learning accessible and enjoyable for everyone.
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="ml-8">
            <h3 className="font-semibold text-lg mb-4">{category}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
