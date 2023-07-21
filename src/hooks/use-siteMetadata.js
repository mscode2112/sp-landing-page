import { graphql, useStaticQuery } from "gatsby";
const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          keywords
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
export default useSiteMetadata;
