import Link from 'next/link'

import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

const socials = [
  {icon: <FaGithub />, path: "https://github.com/itsDarkos"},
  {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/daniel-l%C3%A1zaro-hern%C3%A1ndez-a05013224"},
  {icon: <FaInstagram />, path: "https://www.instagram.com/ddlazaro.frontdev"},  
]


const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
        <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
        );
      })}
    </div>
  )
}

export default Social