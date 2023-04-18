import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
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

const WhiteboardVideos = ({ data }) => {
  return (
    <div>
      <Navbar />
      <main>
        <Header
          headlineContent={whiteboardHeadlineContent}
          subHeadlineContent={whiteboardSubHeadlineContent}
          videoUrl={data.allWhiteboardVideosJson.edges[2].node.link}
          headerImage={data.allWhiteboardVideosJson.edges[0].node.headerImage}
        />
        <About
          titlePart1={whiteboardTitlePart1}
          titlePart2={whiteboardTitlePart2}
          sectionContent={whiteboardContent}
          aboutImage={data.allWhiteboardVideosJson.edges[1].node.aboutImage}
        />
        <Samples data={data.allWhiteboardVideosJson} />
        <Footer />
      </main>
    </div>
  );
};
export default WhiteboardVideos;