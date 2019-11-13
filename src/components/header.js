import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import ItalyFlag from "../images/italy-flag.png";
import UKFlag from "../images/united-kingdom-flag.png";
import { itPages, enPages } from "../data/pages";

const NavItem = ({ page }) => (
  <li key={page.name}>
    <Link to={page.path}>{page.name}</Link>
  </li>
);

const Header = ({ siteTitle, lang, toggler }) => {
  const flag = lang === "IT" ? UKFlag : ItalyFlag;
  const flagLink = lang === "IT" ? "/en/" : "/";

  return (
    <StyledHeader className={`${toggler}`}>
      <Link to="/" className="logo">
        <h1>{siteTitle}</h1>
      </Link>
      <nav>
        <ul className="nav-links">
          {lang === "IT"
            ? itPages.map(page => <NavItem page={page} />)
            : enPages.map(page => <NavItem page={page} />)}
          <Link to={flagLink} className="flag">
            <img src={flag} alt="Lingua" />
          </Link>
        </ul>
      </nav>
    </StyledHeader>
  );
};
export default Header;

const StyledHeader = styled.header`
  font-family: "Open Sans", sans-serif;
  background: #0a0a0a;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  nav {
    .flag {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* border: 1px solid green; */
      img {
        width: 24px;
        height: 16px;
      }
    }
    .nav-links {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      li {
        margin-right: 1rem;
      }
      a {
        font-size: 1.2rem;
        color: ${props => props.theme.white};
        text-transform: uppercase;
        font-weight: 400;
      }
    }
  }
`;
