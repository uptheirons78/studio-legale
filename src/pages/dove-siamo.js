import React from "react";
import Layout from "../components/layout";

import SEO from "../components/seo";
import Background from "../components/Home/Background";
import TitleContainer from "../components/TitleContainer";

const DoveSiamo = () => (
  <Layout lang={"IT"}>
    <SEO title="Dove Siamo" />
    <Background>
      <TitleContainer titleLeft="dove" titleRight="siamo" />
    </Background>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam
      dolorum! Praesentium esse ipsa id fugiat voluptatem debitis, provident,
      repellat dignissimos repellendus quam inventore quia?
    </p>
  </Layout>
);

export default DoveSiamo;
