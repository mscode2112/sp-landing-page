import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavItem = styled(AnchorLink)` 
    text-decoration: none;
    color: #111;
    display: inline-block;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;
    font-family: 'Lato Regular', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.2px;

    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: var(--orange);
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: var(--orange);

        ::after {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 1.5rem;
        z-index: 6;
    }
`

export const CallButton = styled.button`
    border-radius: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 22px;
    margin-left: 20px;
    width: 225px;
    height: 35px;
    border: 1.5px solid var(--orange);
    background-color: var(--white);
    color: var(--orange);
    font-family: 'Lato Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.46px;
    cursor: pointer;
    transition: .3s;

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`

export const QuoteButton = styled(AnchorLink)`
    text-decoration: none;
    border-radius: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 22px;
    margin-left: 20px;
    width: 156px;
    height: 35px;
    border: 1.5px solid var(--orange);
    background-color: var(--white);
    color: var(--orange);
    font-family: 'Lato Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.46px;
    cursor: pointer;
    transition: .3s;

    :hover {
        background-color:var(--orange);
        color: var(--white);
        border: var(--white)
        transition: 0.7s;
    }

    @media (max-width: 768px) {
        margin-top: 20px;
    }
`
