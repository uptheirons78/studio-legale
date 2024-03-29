import React from "react";
import Layout from "../components/layout";

import SEO from "../components/seo";
import Background from "../components/Home/Background";
import TitleContainer from "../components/TitleContainer";

const RassegnaStampa = () => (
  <Layout lang={"IT"}>
    <SEO title="Rassegna Stampa" />
    <Background>
      <TitleContainer titleLeft="rassegna" titleRight="stampa" />
    </Background>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam
      dolorum! Praesentium esse ipsa id fugiat voluptatem debitis, provident,
      repellat dignissimos repellendus quam inventore quia?
    </p>
  </Layout>
);

export default RassegnaStampa;
