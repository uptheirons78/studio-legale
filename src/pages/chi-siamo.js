import React from "react";
import Layout from "../components/layout";

import SEO from "../components/seo";
import Background from "../components/Home/Background";
import TitleContainer from "../components/TitleContainer";

const ChiSiamo = () => (
  <Layout lang={"IT"}>
    <SEO title="Chi Siamo" />
    <Background>
      <TitleContainer titleLeft="chi" titleRight="siamo" />
    </Background>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam
      dolorum! Praesentium esse ipsa id fugiat voluptatem debitis, provident,
      repellat dignissimos repellendus quam inventore quia?
    </p>
  </Layout>
);

export default ChiSiamo;
