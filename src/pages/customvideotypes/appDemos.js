import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
import HeroVideo from "../../images/customvideoimages/gifs/AppDemos.mp4";
// import AboutVideo from "../../images/customvideoimages/gifs/AppDemos_BG.mp4";
import SEO from "../../components/seo/seo";
import {
  appHeadlineContent,
  appSubHeadlineContent,
  appTitlePart1,
  appTitlePart2,
  appContent,
} from "../../resources/strings";
import Samples from "./samples";

export const data = graphql`
  query samplesQuery {
    allAppDemosJson {
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

const AppDemos = ({ data }) => {
  return (
    <>
      <SEO
        metaTitle="App Demos"
        metaDescription="This page showcases our animated App Demos"
      />
      <div>
        <Navbar />
        <main>
          <Header
            headlineContent={appHeadlineContent}
            subHeadlineContent={appSubHeadlineContent}
            videoUrl={data.allAppDemosJson.edges[1].node.link}
            headerVideo={HeroVideo}
          />
          <About
            titlePart1={appTitlePart1}
            titlePart2={appTitlePart2}
            sectionContent={appContent}
            aboutImage={data.allAppDemosJson.edges[0].node.aboutImage}
            // aboutVideo={AboutVideo}
          />
          <Samples data={data.allAppDemosJson} />
          <Footer />
        </main>
      </div>
    </>
  );
};
export default AppDemos;
