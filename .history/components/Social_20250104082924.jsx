import Link from 'next/link'

import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

const socials = [
  {icon: <FaGithub />, path: ""},
  {icon: <FaLinkedinIn />, path: ""},
  {icon: <FaInstagram />, path: ""},  
]


const Social = (containerStyles, iconStyles) => {
  return (
    <div className=containerStyles'>
      {socials.map((item, index)=>{
        return (
        <link key={index} href='item.path' className='iconStyles'>
          {item.icon}
        </link>
        );
      })}
    </div>
  )
}

export default Social