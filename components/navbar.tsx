"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrolled(window.scrollY > 10);
        setShowNavbar(window.scrollY < lastScrollY);
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about-us" },
    { name: "Career", href: "/career" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-out",
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-primary/10"
          : "bg-transparent",
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img src="logo.png" alt="" width="160px" className="mt-4" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-primary/5",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-tertiary hover:text-primary"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact-us">
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-primary/10 transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out",
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out",
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  )}
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 ease-out",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-primary/10 shadow-xl">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300",
                  pathname === item.href
                    ? "text-primary bg-primary/10 border-l-4 border-primary"
                    : "text-tertiary hover:text-primary hover:bg-primary/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* CTA - Mobile */}
            <div className="pt-4 space-y-3 border-t border-primary/10 mt-4">
              <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
