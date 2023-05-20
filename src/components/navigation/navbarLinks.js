import React from "react";
import { NavItem, QuoteButton } from "./navbarLinks.styled";
import { useSharedState } from "./navbar";

const NavbarLinks = () => {
  const { setNavbarOpen } = useSharedState();

  function closeNavBar() {
    setNavbarOpen(false);
  }
  return (
    <>
      <NavItem to="/" onAnchorLinkClick={closeNavBar}>
        <h4>Home</h4>
      </NavItem>
      <NavItem to="/#portfolio" onAnchorLinkClick={closeNavBar}>
        <h4>Our Work</h4>
      </NavItem>
      <NavItem to="/#process" onAnchorLinkClick={closeNavBar}>
        <h4>Process</h4>
      </NavItem>
      <NavItem to="/#testimonials" onAnchorLinkClick={closeNavBar}>
        <h4>Reviews</h4>
      </NavItem>
      <NavItem to="/blog/blog/" onAnchorLinkClick={closeNavBar}>
        <h4>Blog</h4>
      </NavItem>
      <QuoteButton to="/#footer" onAnchorLinkClick={closeNavBar}>
        <h4>GET A QUOTE</h4>
      </QuoteButton>
    </>
  );
};

export default NavbarLinks;
