import React from "react";
import { graphql } from "gatsby";

import SEO from "../../components/seo";
import Layout from "../../components/layout";
import Background from "../../components/Home/Background";
import TitleContainer from "../../components/TitleContainer";
import Wrapper from "../../components/styles/Wrapper";
import HomeContent from "../../components/Home/HomeContent";
import Aside from "../../components/Home/Aside";

export const query = graphql`
  query {
    contentfulHome(titolo: { eq: "Home Page" }) {
      contenutoEn {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { contenutoEn } = data.contentfulHome;

  return (
    <Layout lang={"EN"}>
      <SEO title="Home" />
      <Background>
        <TitleContainer titleLeft="Studio Legale" titleRight="Barberio" />
      </Background>
      <Wrapper>
        <HomeContent>
          <div className="home-main-container">
            <div
              className="contentful-markdown"
              dangerouslySetInnerHTML={{
                __html: contenutoEn.childMarkdownRemark.html,
              }}
            ></div>
          </div>
          <Aside />
        </HomeContent>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
