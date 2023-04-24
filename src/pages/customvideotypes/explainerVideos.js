import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
import HeroVideo from "../../images/customvideoimages/gifs/Explainer.mp4";
import {
  explainerHeadlineContent,
  explainerSubHeadlineContent,
  explainerTitlePart1,
  explainerTitlePart2,
  explainerContent,
} from "../../resources/strings";
import Samples from "./samples";

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
    <div>
      <Navbar />
      <main>
        <Header
          headlineContent={explainerHeadlineContent}
          subHeadlineContent={explainerSubHeadlineContent}
          videoUrl={data.allExplainerVideosJson.edges[2].node.link}
          headerVideo={HeroVideo}
        />
        <About
          titlePart1={explainerTitlePart1}
          titlePart2={explainerTitlePart2}
          sectionContent={explainerContent}
          aboutImage={data.allExplainerVideosJson.edges[1].node.aboutImage}
          headerVideo={HeroVideo}
        />
        <Samples data={data.allExplainerVideosJson} />
        <Footer />
      </main>
    </div>
  );
};
export default ExplainerVideos;
