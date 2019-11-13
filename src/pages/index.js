import React from "react";
import Layout from "../components/layout";

import SEO from "../components/seo";
import Hero from "../components/Hero";
import img from "../images/sb-home.jpg";

const IndexPage = () => (
  <Layout lang={"IT"}>
    <SEO title="Home" />
    <Hero img={img} titleLeft="studio legale" titleRight="barberio" />
  </Layout>
);

export default IndexPage;
