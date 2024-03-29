import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
import HeroVideo from "../../images/customvideoimages/gifs/Product.mp4";
// import AboutVideo from "../../images/customvideoimages/gifs/Product_BG.mp4";
import {
  productHeadlineContent,
  productSubHeadlineContent,
  productTitlePart1,
  productTitlePart2,
  productContent,
} from "../../resources/strings";
import Samples from "./samples";
import SEO from "../../components/seo/seo";

export const data = graphql`
  query samplesQuery {
    allProductVideosJson {
      edges {
        node {
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
    <>
      <SEO
        metaTitle="Product Videos"
        metaDescription="This page showcases our animated product videos"
      />
      <div>
        <Navbar />
        <main>
          <Header
            headlineContent={productHeadlineContent}
            subHeadlineContent={productSubHeadlineContent}
            videoUrl={data.allProductVideosJson.edges[1].node.link}
            headerVideo={HeroVideo}
          />
          <About
            titlePart1={productTitlePart1}
            titlePart2={productTitlePart2}
            sectionContent={productContent}
            aboutImage={data.allProductVideosJson.edges[0].node.aboutImage}
            // aboutVideo={AboutVideo}
          />
          <Samples data={data.allProductVideosJson} />
          <Footer />
        </main>
      </div>
    </>
  );
};
export default ProductVideos;
