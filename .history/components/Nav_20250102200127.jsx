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
    name: "Home",
    path: "/",
  },
  {
    name: "Home",
    path: "/",
  }
]

export const Nav = () => {
  return (
    <nav></nav>
  )
}

export default Nav;