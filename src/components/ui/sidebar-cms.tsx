"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Home,
  UserRound,
  ArrowLeftFromLine,
  ClipboardSignatureIcon,
} from "lucide-react";
import Image from "next/image";
import logo from "@public/assets/logo/logo.svg";
import { usePathname } from "next/navigation";

export function SidebarCMS() {
  const pathname = usePathname();
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <LayoutDashboard className="text-inherit dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Test",
      href: "/dashboard/test",
      icon: (
        <ClipboardSignatureIcon className="text-inherit dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },

    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: (
        <UserRound className="text-inherit dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Homepage",
      href: "/",
      icon: (
        <Home className="text-inherit dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/",
      icon: (
        <ArrowLeftFromLine className="text-inherit dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10 bg-rock">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-4">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                className={`${
                  pathname === link.href
                    ? "bg-neutral-100 text-rock rounded-md pl-1"
                    : "hover:bg-neutral-100/20 rounded-md text-white pl-1"
                } `}
              />
            ))}
          </div>
        </div>
      </SidebarBody>
    </Sidebar>
  );
}
export const Logo = () => {
  return (
    <Link
      href=""
      className="font-normal flex space-x-2 justify-center w-full items-center text-sm text-black py-1 relative z-20 border-b-2 pb-4 border-neutral-300 cursor-default"
    >
      <Image src={logo} alt="Logo" width={30} height={30} />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white whitespace-pre uppercase text-lg font-bold"
      >
        Ngilingo
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href=""
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 border-b-2 pb-4 border-neutral-300 cursor-default"
    >
      <Image src={logo} alt="Logo" width={30} height={30} />
    </Link>
  );
};
