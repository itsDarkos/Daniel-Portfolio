import Link from "next/link";
import { Button } from "./ui/button";

// components
import { Nav } from "./Nav";
import MobileNav from "./MobileNav";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo y nombre */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/LogoDarkos.png" alt="Logo" className="w-12 h-12" />
          <h1 className="text-4xl font-semibold">
            Daniel<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contactame</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
