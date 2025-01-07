import Link from "next/link";
import { Button } from "./ui/button";

// components
import { Nav } from "./Nav";
import MobileNav from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-6 md:py-8 xl:py-12 text-white bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Daniel<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav & Hire Me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="px-4 py-2 text-sm md:px-6 md:py-3 md:text-base bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
