"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button.jsx";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu.jsx";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

function Header() {
  const path = usePathname();

  return (
    <div className="p-4 pl-8 pr-6 -mt-4 fixed z-80 top-4 w-full flex justify-between items-center shadow-lg border-b border-white bg-black text-gray-100">
      {/* Logo */}
      <Link href={"/"}>
        <h1 className="text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 via-neutral-100 to-gray-900">
          QuizAI
        </h1>
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex space-x-3 lg:space-x-6 text-sm font-semibold text-gray-200">
          <NavigationMenuItem>
            <Link href={"/"}>
              <Button
                className={`${
                  path == "/"
                    ? "bg-black text-white ring-1 ring-white"
                    : "bg-gray-800 text-gray-200"
                } hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md cursor-pointer`}
              >
                Home
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/explore"}>
              <Button
                className={`${
                  path == "/explore"
                    ? "bg-black text-white ring-1 ring-white"
                    : "bg-gray-800 text-gray-200"
                } hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md cursor-pointer`}
              >
                Explore
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/about"}>
              <Button
                className={`${
                  path == "/about"
                    ? "bg-black text-white ring-1 ring-white"
                    : "bg-gray-800 text-gray-200"
                } hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md cursor-pointer`}
              >
                About Us
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/contact"}>
              <Button
                className={`${
                  path == "/contact"
                    ? "bg-black text-white ring-1 ring-white"
                    : "bg-gray-800 text-gray-200"
                } hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md cursor-pointer`}
              >
                Contact
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* User Profile / Sign In */}
      <SignedIn>
        <Link href={"/dashboard"} className="flex gap-2">
          <Button
            className={`${
              path == "/dashboard"
                ? "bg-black text-white ring-1 ring-white"
                : "bg-gray-800 text-gray-200"
            } hover:bg-black hover:text-white hover:ring-1 hover:ring-white text-base font-light transition-colors rounded-full px-4 py-2 shadow-md cursor-pointer`}
          >
            Dashboard
          </Button>
          <UserButton />
        </Link>
      </SignedIn>
      <SignedOut>
        <SignInButton className="bg-gray-800 text-gray-200 hover:text-white text-base font-light hover:bg-black hover:ring-1 hover:ring-white transition-colors rounded-full px-4 py-2 shadow-md cursor-pointer" />
      </SignedOut>
    </div>
  );
}

export default Header;
