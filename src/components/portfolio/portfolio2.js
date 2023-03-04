import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useBetween } from "use-between";
import {
  container2,
  innerContainer,
  wrapper,
  videoSection,
  videoImage,
  playButton,
} from "./portfolio.module.css";
import styled from "styled-components";
import VideoModal from "../videoModal/videoModal";

const VideoCard = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const useShareableState = () => {
  const [videoModal2Open, setVideoModal2Open] = React.useState(false);
  const [videoModal2Data, setVideoModal2Data] = React.useState(null);
  return {
    videoModal2Open,
    setVideoModal2Open,
    videoModal2Data,
    setVideoModal2Data,
  };
};
export const useSharedVideoModal2State = () => useBetween(useShareableState);

const Portfolio2 = () => {
  const { setVideoModal2Open, setVideoModal2Data } =
    useSharedVideoModal2State();

  const data = useStaticQuery(graphql`
    query MorePortfolioQuery {
      allMorePortfolioJson {
        edges {
          node {
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
  `);
  function getPortfolio(data) {
    const portfolioArray = [];
    data.allMorePortfolioJson.edges.map((edge) => {
      const image = getImage(edge.node.thumbnail);
      portfolioArray.push(
        <VideoCard key={edge.node.id}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              setVideoModal2Data(edge.node.link);
              setVideoModal2Open(true);
            }}
          >
            <GatsbyImage
              className={videoImage}
              alt={edge.node.alt}
              image={image}
            />
            <div className={playButton}></div>
          </div>
        </VideoCard>
      );
      return portfolioArray;
    });
    return portfolioArray;
  }
  return (
    <div id="portfolio2" className={container2}>
      <div className={innerContainer}>
        <div className={wrapper}>
          <div className={videoSection}>{getPortfolio(data)}</div>
        </div>
      </div>
      <VideoModal />
    </div>
  );
};
export default Portfolio2;
