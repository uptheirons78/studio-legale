import React from "react";
import { Link } from "gatsby";

import ItalyFlag from "../images/italy-flag.png";
import UKFlag from "../images/united-kingdom-flag.png";
import Logo from "../images/logo-studio-barberio.png";
import { itPages, enPages } from "../data/pages";
import { StyledHeader } from "./styles/Header";

const NavItem = ({ page }) => (
  <li key={page.name}>
    <Link activeStyle={{ color: "#FAA916" }} to={page.path}>
      {page.name}
    </Link>
  </li>
);

const Header = ({ lang, toggler }) => {
  const flag = lang === "IT" ? UKFlag : ItalyFlag;
  const flagLink = lang === "IT" ? "/en/" : "/";

  return (
    <StyledHeader className={`${toggler}`}>
      <Link to="/" className="logo">
        <img src={Logo} alt="Studio Legale Barberio" />
      </Link>
      <nav>
        <ul className="nav-links">
          {lang === "IT"
            ? itPages.map((page, idx) => <NavItem key={idx} page={page} />)
            : enPages.map((page, idx) => <NavItem key={idx} page={page} />)}
          <Link to={flagLink} className="flag">
            <img src={flag} alt="Lingua" />
          </Link>
        </ul>
      </nav>
    </StyledHeader>
  );
};
export default Header;
