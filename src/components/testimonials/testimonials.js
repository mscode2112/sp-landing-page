import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useBetween } from "use-between";
import {
  container,
  innerContainer,
  wrapper,
  titleSection,
  titlePart1,
  titlePart2,
  videoSection,
  videoCard,
  videoImage,
  playButton,
} from "./testimonials.module.css";
import VideoModal from "../videoModal/videoModal";

export const useShareableState = () => {
  const [videoModal3Open, setVideoModal3Open] = React.useState(false);
  const [videoModal3Data, setVideoModal3Data] = React.useState(null);

  return {
    videoModal3Open,
    setVideoModal3Open,
    videoModal3Data,
    setVideoModal3Data,
  };
};
export const useSharedVideoModal3State = () => useBetween(useShareableState);

const Testimonials = () => {
  const { setVideoModal3Open, videoModal3Data, setVideoModal3Data } =
    useSharedVideoModal3State();
  return (
    <>
      <div id="testimonials" className={container}>
        <div className={innerContainer}>
          <div className={wrapper}>
            <div className={titleSection}>
              <h2>
                <span className={titlePart1}>Reviews</span>
                <span className={titlePart2}> from People Like You</span>
              </h2>
            </div>
            <div className={videoSection}>
              <div className={videoCard}>
                <div
                  className={videoImage}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setVideoModal3Data(
                      "https://player.vimeo.com/video/763655966"
                    );
                    setVideoModal3Open(true);
                  }}
                >
                  <StaticImage
                    alt="Client testimonial 1"
                    src="../../images/thumbnails/testimonial-RodBerger.png"
                    placeholder="BLURRED"
                  />
                  <div className={playButton}></div>
                </div>
              </div>
              <div className={videoCard}>
                <div
                  className={videoImage}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setVideoModal3Data(
                      "https://player.vimeo.com/video/817893086"
                    );
                    setVideoModal3Open(true);
                  }}
                >
                  <StaticImage
                    alt="Client testimonial 2"
                    src="../../images/thumbnails/testimonial-CJ-1.png"
                    placeholder="BLURRED"
                  />
                  <div className={playButton}></div>
                </div>
              </div>
              <div className={videoCard}>
                <div
                  className={videoImage}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setVideoModal3Data(
                      "https://player.vimeo.com/video/763655455"
                    );
                    setVideoModal3Open(true);
                  }}
                >
                  <StaticImage
                    alt="Client testimonial 3"
                    src="../../images/thumbnails/testimonial-GB.png"
                    placeholder="BLURRED"
                  />
                  <div className={playButton}></div>
                </div>
              </div>
            </div>
          </div>

          <VideoModal />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
