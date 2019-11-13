import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Hero from "../../components/Hero";
import img from "../../images/sb-home.jpg";

const About = () => (
  <Layout lang={"EN"}>
    <SEO title="About" />
    <Hero img={img} titleLeft="about" titleRight="us" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, totam
      dolorum! Praesentium esse ipsa id fugiat voluptatem debitis, provident,
      repellat dignissimos repellendus quam inventore quia?
    </p>
  </Layout>
);

export default About;
