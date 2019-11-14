import React from "react";
import Layout from "../components/layout";

import SEO from "../components/seo";
import Background from "../components/Home/Background";
import TitleContainer from "../components/TitleContainer";

const IndexPage = () => (
  <Layout lang={"IT"}>
    <SEO title="Home" />
    <Background>
      <TitleContainer titleLeft="Studio Legale" titleRight="Barberio" />
    </Background>
  </Layout>
);

export default IndexPage;
