"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const link = [
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
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className='mt-32 mt-40 text-center text-2xl'>
          <Link href='/'></Link>
            <h1 className='text-4xl font-semibold'>
              Daniel<span className='text-accent'>.</span>
            </h1>
        </div>
        {/* nav */}
        <nav className='flex flex-col justifi-center items-center gap-
          {link.map((link, index) => {
            return (
            <Link href={link.path} key={index} className=''>
              {link.name}
            </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav