import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.includes(path)) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md transition-all duration-300",
        scrolled ? "shadow-sm" : ""
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl text-primary">
            <Link href="/" className="flex items-center">
              <Monitor className="h-8 w-8 mr-2" />
              <span>Alex Chen</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "nav-link relative font-medium hover:text-primary",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
                <motion.span
                  className={cn(
                    "absolute left-0 bottom-0 h-0.5 bg-primary",
                    isActive(link.path) ? "w-full" : "w-0"
                  )}
                  initial={{ width: isActive(link.path) ? "100%" : "0%" }}
                  animate={{ width: isActive(link.path) ? "100%" : "0%" }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <ThemeToggle className="mr-4" />

            {/* Resume Button */}
            <Button
              asChild
              className="hidden sm:block"
              size="sm"
              variant="default"
            >
              <a href="#" download>
                Resume
              </a>
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden ml-2 p-2 rounded-md text-muted-foreground hover:bg-muted focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:bg-muted"
                )}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#"
              download
              className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-muted"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
