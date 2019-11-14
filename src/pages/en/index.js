import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Background from "../../components/Home/Background";
import TitleContainer from "../../components/TitleContainer";

const IndexPage = () => (
  <Layout lang={"EN"}>
    <SEO title="Home" />
    <Background>
      <TitleContainer titleLeft="Studio Legale" titleRight="Barberio" />
    </Background>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum error
      cumque sequi maiores officia qui beatae? Cupiditate ullam ad culpa tenetur
      a officiis quasi.
    </p>
  </Layout>
);

export default IndexPage;
