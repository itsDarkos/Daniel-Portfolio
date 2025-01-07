import Link from 'next/link';
import { Button } from './ui/button';

export const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'> 
      <div className="container mx-auto">
        <Link>
          <h1>
            Daniel <span>.</span>
          </1>
        </Link>
      </div>
    </header>
  )
}

export default Header;