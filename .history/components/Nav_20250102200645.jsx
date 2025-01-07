"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Link = () => [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  }
]

export const Nav = () => {
  return (
    <nav>
      {Link.map((link, index) => {
        const pathname = usePathname();
        return (
          <Link key={index} href={link.path}>
            <a className={`text-lg font-semibold ${pathname === link.path ? "text-accent" : "text-white"}`}>
              {link.name}
            </a>
          </Link>
        )
      }
    </nav>
  )
}

export default Nav;