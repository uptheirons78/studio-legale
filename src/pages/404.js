import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Background from "../components/Home/Background";

const NotFoundPage = () => (
  <Layout lang={"IT"}>
    <SEO title="404: Not found" />
    <Background>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Background>
  </Layout>
);

export default NotFoundPage;
