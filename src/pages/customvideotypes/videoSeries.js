import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
import HeroVideo from "../../images/customvideoimages/gifs/VideoSeries.mp4";
import {
  seriesHeadlineContent,
  seriesSubHeadlineContent,
  seriesTitlePart1,
  seriesTitlePart2,
  seriesContent,
} from "../../resources/strings";
import Samples from "./samples";

export const data = graphql`
  query samplesQuery {
    allVideoSeriesJson {
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

const VideoSeries = ({ data }) => {
  return (
    <div>
      <Navbar />
      <main>
        <Header
          headlineContent={seriesHeadlineContent}
          subHeadlineContent={seriesSubHeadlineContent}
          videoUrl={data.allVideoSeriesJson.edges[2].node.link}
          headerVideo={HeroVideo}
        />
        <About
          titlePart1={seriesTitlePart1}
          titlePart2={seriesTitlePart2}
          sectionContent={seriesContent}
          aboutImage={data.allVideoSeriesJson.edges[1].node.aboutImage}
          headerVideo={HeroVideo}
        />
        <Samples data={data.allVideoSeriesJson} />
        <Footer />
      </main>
    </div>
  );
};
export default VideoSeries;
