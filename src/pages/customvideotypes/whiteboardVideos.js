import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
import HeroVideo from "../../images/customvideoimages/gifs/Whiteboard.mp4";
import {
  whiteboardHeadlineContent,
  whiteboardSubHeadlineContent,
  whiteboardTitlePart1,
  whiteboardTitlePart2,
  whiteboardContent,
} from "../../resources/strings";
import Samples from "./samples";

export const data = graphql`
  query samplesQuery {
    allWhiteboardVideosJson {
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

const WhiteboardVideos = ({ data }) => {
  return (
    <div>
      <Navbar />
      <main>
        <Header
          headlineContent={whiteboardHeadlineContent}
          subHeadlineContent={whiteboardSubHeadlineContent}
          videoUrl={data.allWhiteboardVideosJson.edges[2].node.link}
          headerVideo={HeroVideo}
        />
        <About
          titlePart1={whiteboardTitlePart1}
          titlePart2={whiteboardTitlePart2}
          sectionContent={whiteboardContent}
          aboutImage={data.allWhiteboardVideosJson.edges[1].node.aboutImage}
          headerVideo={HeroVideo}
        />
        <Samples data={data.allWhiteboardVideosJson} />
        <Footer />
      </main>
    </div>
  );
};
export default WhiteboardVideos;
