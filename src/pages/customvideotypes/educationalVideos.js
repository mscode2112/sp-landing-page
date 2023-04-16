import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
import {
  educationalHeadlineContent,
  educationalSubHeadlineContent,
  educationalTitlePart1,
  educationalTitlePart2,
  educationalContent,
} from "../../resources/strings";
import Samples from "./samples";

export const data = graphql`
  query samplesQuery {
    allEducationalVideosJson {
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

const EducationalVideos = ({ data }) => {
  return (
    <div>
      <Navbar />
      <main>
        <Header
          headlineContent={educationalHeadlineContent}
          subHeadlineContent={educationalSubHeadlineContent}
          videoUrl={data.allEducationalVideosJson.edges[2].node.link}
          headerImage={data.allEducationalVideosJson.edges[0].node.headerImage}
        />
        <About
          titlePart1={educationalTitlePart1}
          titlePart2={educationalTitlePart2}
          sectionContent={educationalContent}
          aboutImage={data.allEducationalVideosJson.edges[1].node.aboutImage}
        />
        <Samples data={data.allEducationalVideosJson} />
        <Footer />
      </main>
    </div>
  );
};
export default EducationalVideos;
