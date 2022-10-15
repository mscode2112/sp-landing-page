import React from "react"
import { NavItem, CallButton } from './navbarLinks.styled'
import { contactNumber } from "../resources/strings";

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/">Our Work</NavItem>
      <NavItem to="/">Process</NavItem>
      <NavItem to="/">Reviews</NavItem>
      <CallButton>CALL {contactNumber}</CallButton>
    </>
  )
}

export default NavbarLinks