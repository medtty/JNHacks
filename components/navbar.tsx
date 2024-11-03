"use client";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Code2 } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#tracks", label: "Tracks" },
    { href: "/#schedule", label: "Schedule" },
    { href: "/#training", label: "Training" },
    { href: "/#judges", label: "Judges" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
        elements: {
          formButtonPrimary: "bg-purple-500 hover:bg-purple-600",
        },
      }}
    >
      <nav className="sticky top-0 z-10 flex justify-between items-center bg-white shadow-sm py-4 px-8">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            {/* <img src="/img/logo.png" className="w-24"/> */}
            <span className="font-bold text-2xl pix-font">JNH24</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {/* <Button variant="default" size="sm"><a href="https://forms.gle/vnfjkiF3WZfzNQ958">Register</a></Button> */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 text-white text-sm px-4 py-2 rounded-md">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* <ModeToggle /> */}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute right-0 top-16 bg-white p-4 w-60 h-{100vh} md:hidden shadow-md rounded-xl text-left space-y-3 pl-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-xl hover:text-red transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on item click
              >
                {item.label}
              </Link>
            ))}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 text-white text-sm w-full py-2 rounded-md">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {/* <ModeToggle /> */}
          </div>
        )}
      </nav>
    </ClerkProvider>
  );
}
