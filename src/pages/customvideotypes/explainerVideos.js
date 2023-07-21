import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
import HeroVideo from "../../images/customvideoimages/gifs/Explainer.mp4";
// import AboutVideo from "../../images/customvideoimages/gifs/Explainer_BG.mp4";
import {
  explainerHeadlineContent,
  explainerSubHeadlineContent,
  explainerTitlePart1,
  explainerTitlePart2,
  explainerContent,
} from "../../resources/strings";
import Samples from "./samples";
import SEO from "../../components/seo/seo";

export const data = graphql`
  query samplesQuery {
    allExplainerVideosJson {
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

const ExplainerVideos = ({ data }) => {
  return (
    <>
      <SEO
        metaTitle="Explainer Videos"
        metaDescription="This page showcases our animated explainer videos"
      />
      <div>
        <Navbar />
        <main>
          <Header
            headlineContent={explainerHeadlineContent}
            subHeadlineContent={explainerSubHeadlineContent}
            videoUrl={data.allExplainerVideosJson.edges[1].node.link}
            headerVideo={HeroVideo}
          />
          <About
            titlePart1={explainerTitlePart1}
            titlePart2={explainerTitlePart2}
            sectionContent={explainerContent}
            aboutImage={data.allExplainerVideosJson.edges[0].node.aboutImage}
            // aboutVideo={AboutVideo}
          />
          <Samples data={data.allExplainerVideosJson} />
          <Footer />
        </main>
      </div>
    </>
  );
};
export default ExplainerVideos;
