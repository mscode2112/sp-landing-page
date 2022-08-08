import React from "react";
import { Link } from 'gatsby';
import {
  nav,
  navLinks,
  navLinkItemHome,
  navLinkItemProcess,
  navLinkItemWork,
  navLinkItemReviews,
  navLinkText,

} from "../navigation/nav.module.css";

const Nav = () => {
  return (
  <nav className={nav}>
        <ul className={navLinks}>
          <li className={navLinkItemHome}>
            <Link underline="none" to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItemWork}>
            <Link underline="none" to="/" className={navLinkText}>
              Our Work
            </Link>
          </li>
          <li className={navLinkItemProcess}>
            <Link underline="none" to="/" className={navLinkText}>
              Process
            </Link>
          </li>
          <li className={navLinkItemReviews}>
            <Link underline="none" to="/" className={navLinkText}>
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
  )}

  export default Nav;