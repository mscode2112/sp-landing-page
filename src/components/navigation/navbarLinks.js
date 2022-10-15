import React from "react"
import { NavItem, QuoteButton } from './navbarLinks.styled'


const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="#portfolio">Our Work</NavItem>
      <NavItem to="#process">Process</NavItem>
      <NavItem to="#testimonials">Reviews</NavItem>
      <QuoteButton to="#footer">GET A QUOTE</QuoteButton>
    </>
  )
}

export default NavbarLinks