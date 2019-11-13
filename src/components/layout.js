import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { FaBars } from "react-icons/fa";

import GlobalStyle from "./styles/GlobalStyles";
import { MobileToggler } from "./styles/MobileToggler";
import Header from "./header";
import Infobar from "./InfoBar";

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
      <Infobar />
      <Header
        toggler={toggler}
        siteTitle={data.site.siteMetadata.title}
        lang={lang}
      />
      <main>{children}</main>
      <MobileToggler onClick={() => setTogglerState(!togglerState)}>
        <FaBars />
      </MobileToggler>
    </ThemeProvider>
  );
};

export default Layout;
