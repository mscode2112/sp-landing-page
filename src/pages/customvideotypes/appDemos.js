import React from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/navigation/navbar";
import Header from "./header";
import About from "./about";
import Footer from "../../components/footer/footer";
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

const AppDemos = ({ data }) => {
  return (
    <div>
      <Navbar />
      <main>
        <Header
          headlineContent={appHeadlineContent}
          subHeadlineContent={appSubHeadlineContent}
          videoUrl={data.allAppDemosJson.edges[2].node.link}
          headerImage={data.allAppDemosJson.edges[0].node.headerImage}
        />
        <About
          titlePart1={appTitlePart1}
          titlePart2={appTitlePart2}
          sectionContent={appContent}
          aboutImage={data.allAppDemosJson.edges[1].node.aboutImage}
        />
        <Samples data={data.allAppDemosJson} />
        <Footer />
      </main>
    </div>
  );
};
export default AppDemos;
