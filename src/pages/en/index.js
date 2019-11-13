import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/Hero";
import img from "../../images/sb-home.jpg";

const IndexPage = () => (
  <Layout lang={"EN"}>
    <SEO title="Home" />
    <Hero img={img} titleLeft="studio legale" titleRight="barberio" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsum error
      cumque sequi maiores officia qui beatae? Cupiditate ullam ad culpa tenetur
      a officiis quasi.
    </p>
  </Layout>
);

export default IndexPage;
