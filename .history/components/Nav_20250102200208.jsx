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
    path: "/c",
  }
]

export const Nav = () => {
  return (
    <nav></nav>
  )
}

export default Nav;