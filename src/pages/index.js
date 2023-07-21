import * as React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import useSiteMetadata from "../hooks/use-siteMetadata";

const IndexPage = () => {
  return (
    <>
      <SEO metaDescription="This is a homepage" />
      <Layout pageTitle="Home Page"></Layout>
    </>
  );
};

export default IndexPage;
