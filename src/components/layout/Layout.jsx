import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../Sections/Header'
import Footer from '../Sections/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout