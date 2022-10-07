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
} from "./portfolio.module.css";
import { portfolioContent } from "../../resources/strings.js"
import styled from "styled-components";
import * as lity from 'lity';
import '../../src/lity-2.4.1/assets/style.css';
import '../../src/lity-2.4.1/dist/lity.css';

const VideoCard = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
`

const Portfolio = () => {
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
                    onClick={() => { lity(edge.node.link); }}>
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
     <div className={container}>
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
            </div>
        </div>
    </div>        
  );
};
export default Portfolio;