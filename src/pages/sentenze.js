import React from "react";
import Layout from "../components/layout";

import SEO from "../components/seo";
import Hero from "../components/Hero";
import img from "../images/sb-home.jpg";

const Sentenze = () => (
  <Layout lang={"IT"}>
    <SEO title="Sentenze" />
    <Hero img={img} titleLeft="le nostre" titleRight="sentenze" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam
      dolorum! Praesentium esse ipsa id fugiat voluptatem debitis, provident,
      repellat dignissimos repellendus quam inventore quia?
    </p>
  </Layout>
);

export default Sentenze;
