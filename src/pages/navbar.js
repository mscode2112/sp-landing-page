import React, { useState } from "react"
import NavbarLinks from './navbarLinks'
import { StaticImage } from 'gatsby-plugin-image'

import {
  LogoWrap,
  Navigation,
  Toggle,
  Hamburger,
  NavBox,
} from './navbar.styled'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <LogoWrap>
        <StaticImage alt="SocioPixels Logo" src="../../images/Logo-2020-Full.png" />
      </LogoWrap>  
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <NavBox>
          <NavbarLinks />
        </NavBox>
      ) : (
        <NavBox open>
          <NavbarLinks />
        </NavBox>
      )}
    </Navigation>
  )
}

export default Navbar;
