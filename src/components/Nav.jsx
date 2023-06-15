import React from 'react'
import { navigation } from '../datas/dataNav'
import { Link } from "react-scroll"

export default function Nav() {
  return (
    <nav className='fixed z-50'>
      <ul className='flex space-x-8 capitalize'>
        {navigation.map((item, index) => {
          return( 
          <li
          className='text-white hover:text-fuchsia-500 cursor-pointer' 
          key={index}>
          <Link to={item.href}
            activeClass='active'
            spy={true}
            smooth={true}
            duration={400}
            offset={-70}>
              {item.name}
            </Link>
          </li>
       ) })}
      </ul>
    </nav>
  )
}
