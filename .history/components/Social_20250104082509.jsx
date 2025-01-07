import { Item } from '@radix-ui/react-select';
import Link from 'next/link'

import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

const socials = [
  {icon: <FaGithub />, path: ""},
  {icon: <FaLinkedinIn />, path: ""},
  {icon: <FaInstagram />, path: ""},  
]


const Social = (containerStyles, iconStyles) => {
  return (
    <div className='containerStyles'>
      {socials.map((Item))}
    </div>
  )
}

export default Social