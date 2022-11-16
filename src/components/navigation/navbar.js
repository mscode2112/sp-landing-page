import React, { useState } from "react"
import { navigate } from "gatsby";
import NavbarLinks from './navbarLinks'
import { StaticImage } from 'gatsby-plugin-image'
import { useBetween } from 'use-between';

import {
  LogoWrap,
  Navigation,
  Toggle,
  Hamburger,
  NavBox,
} from './navbar.styled'

export const useShareableState = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return {
    navbarOpen, setNavbarOpen
  }
}
export const useSharedState = () => useBetween(useShareableState)
export const Navbar = () => {
  
  const { navbarOpen, setNavbarOpen } = useSharedState();

  return (
    <Navigation>
      <LogoWrap onClick={() => { navigate("#")}} >
        <StaticImage alt="SocioPixels Logo" src="../../images/Logo-2020-Full.png"/>
      </LogoWrap>  
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <NavBox>
          <NavbarLinks/>
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
