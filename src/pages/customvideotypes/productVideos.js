import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
import {
  productHeadlineContent,
  productSubHeadlineContent,
  productTitlePart1,
  productTitlePart2,
  productContent,
} from "../../resources/strings";
import Samples from "./samples";

export const data = graphql`
  query samplesQuery {
    allProductVideosJson {
      edges {
        node {
          headerImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          aboutImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          id
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          alt
          link
        }
      }
    }
  }
`;

const ProductVideos = ({ data }) => {
  return (
    <div>
      <Navbar />
      <main>
        <Header
          headlineContent={productHeadlineContent}
          subHeadlineContent={productSubHeadlineContent}
          videoUrl={data.allProductVideosJson.edges[2].node.link}
          headerImage={data.allProductVideosJson.edges[0].node.headerImage}
        />
        <About
          titlePart1={productTitlePart1}
          titlePart2={productTitlePart2}
          sectionContent={productContent}
          aboutImage={data.allProductVideosJson.edges[1].node.aboutImage}
        />
        <Samples data={data.allProductVideosJson} />
        <Footer />
      </main>
    </div>
  );
};
export default ProductVideos;
