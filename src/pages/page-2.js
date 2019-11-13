import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout lang={"IT"}>
    <SEO title="Page two" />
    <h1>H1 title</h1>
    <h2>H2 title</h2>
    <h3>H3 title</h3>
    <h4>H4 title</h4>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt tempora
      eligendi tenetur soluta. <strong>Itaque</strong> autem rem ut harum
      consectetur modi alias explicabo cupiditate, nulla ex.
    </p>
    <a href="/">This is a link</a>
    <div>
      <a className="button" href="/">
        This is a button
      </a>
    </div>
  </Layout>
);

export default SecondPage;
