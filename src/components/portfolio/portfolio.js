import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    container,
    innerContainer,
    wrapper,
    titleSection,
    titlePart1,
    titlePart2,
    titlePart3,
    titlePart4,
    subtitleContainer,
    subtitle,
    videoSection,
    videoImage,
    playButton,
    buttonContainer,
    moreWorkButton,
} from "./portfolio.module.css";
import { portfolioContent } from "../../resources/strings.js"
import styled from "styled-components";
import * as lity from 'lity';
import Portfolio2 from "./portfolio2";

const VideoCard = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
`

const Portfolio = () => {
    const [visibleMoreWork, setVisibleMoreWork] = React.useState(false);
    const [visibleMoreWorkButton, setVisibleMoreWorkButton] = React.useState(true);
    function showMoreWork() {
        setVisibleMoreWork(true);
        setVisibleMoreWorkButton(false);
    }
    const data = useStaticQuery(graphql`
            query PortfolioQuery {
                allPortfolioJson {
                    edges {
                        node {
                            id
                            thumbnail {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                            alt
                            link
                        }
                    }
                }
            }    
    `)
  function getPortfolio(data) {
    const portfolioArray = []
    data.allPortfolioJson.edges.map(edge => {
        const image = getImage(edge.node.thumbnail)
        portfolioArray.push(
            <VideoCard key={edge.node.id}>
                <div role="button" tabIndex={0} 
                    onClick={() => { lity(edge.node.link); }}
                    >
                    <GatsbyImage className={videoImage} 
                        alt={edge.node.alt} 
                        image={image}
                        />
                    <div className={playButton}></div>
                </div>
            </VideoCard>
        )
        return portfolioArray
    });
    return portfolioArray
  }  
  return (
     <div id="portfolio" className={container}>
        <div className={innerContainer}>
            <div className={wrapper}>
                <div className={titleSection}>
                    <h2>
                        <span className={titlePart1}>Our Work</span>
                        <span className={titlePart2}> Speaks</span>
                        <span className={titlePart3}> Animates</span>
                        <span className={titlePart4}> For Us</span>
                    </h2>
                    <div className={subtitleContainer}>
                        <p className={subtitle}>{portfolioContent}</p>
                    </div>   
                </div>    
                <div className={videoSection}>
                    {getPortfolio(data)}
                </div>
                {visibleMoreWorkButton &&
                    <div className={buttonContainer}>
                        <button className={moreWorkButton} onClick={() => showMoreWork()}>
                            <strong>MORE WORK</strong>
                        </button>
                    </div>
                }
                {visibleMoreWork && 
                    <div>
                        <Portfolio2/>
                    </div>
                }
            </div>
        </div>
    </div>        
  );
};
export default Portfolio;