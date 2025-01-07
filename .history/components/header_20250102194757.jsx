import Link from 'next/link';
import { Button } from './ui/button';

// components
import { Nav } from './nav';

export const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'> 
      <div className="container mx-auto">
        {/* logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Daniel<span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex">
          <Nav />
          <Link href='/contact'>
            <button>Hire me</button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">mobile nav</div>

      </div>
    </header>
  )
}

export default Header;