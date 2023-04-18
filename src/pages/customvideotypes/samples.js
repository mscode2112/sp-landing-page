import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useBetween } from "use-between";
import "@reach/dialog/styles.css";
import {
  container,
  innerContainer,
  wrapper,
  videoSection,
  videoImage,
  playButton,
} from "../../components/portfolio/portfolio.module.css";
import { portfolioContent } from "../../resources/strings.js";
import styled from "styled-components";
import VideoModal from "../../components/videoModal/videoModal";

const VideoCard = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`;

const useShareableState = () => {
  const [videoModal4Open, setVideoModal4Open] = React.useState(false);
  const [videoModal4Data, setVideoModal4Data] = React.useState(null);
  return {
    videoModal4Open,
    setVideoModal4Open,
    videoModal4Data,
    setVideoModal4Data,
  };
};
export const useSharedVideoModal4State = () => useBetween(useShareableState);

const Samples = ({ data }) => {
  const { setVideoModal4Open, setVideoModal4Data } =
    useSharedVideoModal4State();

  function getPortfolio(data) {
    const portfolioArray = [];
    if (data != null) {
      data.edges.map((edge) => {
        const image = getImage(edge.node.thumbnail);
        if (image != null) {
          portfolioArray.push(
            <VideoCard key={edge.node.id}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  setVideoModal4Data(edge.node.link);
                  setVideoModal4Open(true);
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
        }
        return portfolioArray;
      })
    };
    return portfolioArray;
  }
  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={videoSection}>{getPortfolio(data)}</div>
        <VideoModal />
      </div>
    </div>
  );
};
export default Samples;
