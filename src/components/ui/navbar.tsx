import React from "react";
import logo from "@public/assets/logo/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <header className="mx-auto fixed top-0 w-full px-8 py-4 bg-gradient-to-b from-[#160039] to-[#3D009F]/0 z-[1000]">
      <nav className="flex items-center justify-between ">
        <Image src={logo} alt="Logo" className="h-24 w-24" />
        <div className="hidden md:flex items-center gap-24">
          <Link href="#" className="text-white hover:text-white/80">
            Characters
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            AI-Speaking
          </Link>
          <Link href="#" className="text-white hover:text-white/80">
            About US
          </Link>
        </div>
        <Button
          variant="outline"
          className="text-white border-white border-2 bg-transparent rounded-lg"
        >
          <LogIn className="mr-3" />
          <Link href="/login" className="text-white hover:text-black">
            Log in
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
