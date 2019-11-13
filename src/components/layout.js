import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/GlobalStyles";
import Header from "./header";

// Our Theme with Styled Components
const theme = {
  primaryColor: "#701212",
  black: "#393939",
  lightBlack: "#5a5a5a",
  grey: "#f7f7f7",
  meta: "#a7a7a7",
  white: "#edf0f1",
  maxWidth: "1200px",
};

const Layout = ({ children, lang }) => {
  const [togglerState, setTogglerState] = useState(false);
  const toggler = togglerState ? "header open" : "header";
  const togglerContent = togglerState ? "Close" : "Menu";

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header
        toggler={toggler}
        siteTitle={data.site.siteMetadata.title}
        lang={lang}
      />
      <main>{children}</main>
      <MobileToggler onClick={() => setTogglerState(!togglerState)}>
        {togglerContent}
      </MobileToggler>
    </ThemeProvider>
  );
};

export default Layout;

const MobileToggler = styled.button`
  padding: 9px 25px;
  color: ${props => props.theme.white};
  text-decoration: none;
  background-color: ${props => props.theme.primaryColor};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  font-size: 1rem;
  font-weight: 400;
  position: absolute;
  top: 2%;
  right: 2%;
  z-index: 1000;
  &:hover {
    background-color: ${props => props.theme.primaryColor};
  }
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
