import React from "react"
import { NavItem, QuoteButton } from './navbarLinks.styled'


const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/"><h4>Home</h4></NavItem>
      <NavItem to="#portfolio"><h4>Our Work</h4></NavItem>
      <NavItem to="#process"><h4>Process</h4></NavItem>
      <NavItem to="#testimonials"><h4>Reviews</h4></NavItem>
      <QuoteButton to="#footer"><h4>GET A QUOTE</h4></QuoteButton>
    </>
  )
}

export default NavbarLinks