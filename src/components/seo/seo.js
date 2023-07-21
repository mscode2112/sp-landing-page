import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = ({ metaTitle, metaDescription, metaImage }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              description
              image
              keywords
            }
          }
        }
      `}
      render={({ site }) => (
        <>
          <Helmet>
            <title>{metaTitle || site.siteMetadata.title}</title>
            <meta
              name="description"
              content={metaDescription || site.siteMetadata.description}
            />
            <meta name="image" content={metaImage || site.siteMetadata.image} />
            <meta name="keywords" content={site.siteMetadata.keywords} />
          </Helmet>
        </>
      )}
    />
  );
};

export default SEO;
