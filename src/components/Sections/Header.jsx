import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.css'

export default function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/pages'>Pages</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/news'>News</Link>
    </div>
  )
}