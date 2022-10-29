import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    container2,
    innerContainer,
    wrapper,
    videoSection,
    videoImage,
    playButton,
} from "./portfolio.module.css";
import styled from "styled-components";
import * as lity from 'lity';

const VideoCard = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
`

const Portfolio2 = () => {
    const data = useStaticQuery(graphql`
            query MorePortfolioQuery {
                allMorePortfolioJson {
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
    data.allMorePortfolioJson.edges.map(edge => {
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
     <div id="portfolio2" className={container2}>
        <div className={innerContainer}>
            <div className={wrapper}>  
                <div className={videoSection}>
                    {getPortfolio(data)}
                </div>
            </div>
        </div>
    </div>        
  );
};
export default Portfolio2;