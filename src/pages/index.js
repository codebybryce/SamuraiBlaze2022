import * as React from "react";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout";

const IndexPage = ({ data }) => {

    return (
        <Layout>
            <Hero>
                <StaticImage src='..src\images\SumoMainBlack.webp' alt="Sumo Pipe" zindex='10' />






                <Dot scale='scale(3)' zindex='3' />
                <Dot background='black' scale='scale(2.75)' zindex='4' />
                <Dot scale='scale(2.5)' zindex='5' />
                <Dot background='black' scale='scale(2.25)' zindex='6' />
                <Dot scale='scale(2)' zindex='6' />






            </Hero>

        </Layout>)

}


export default IndexPage



const Hero = styled.div`
width: 100vw;
height: calc(80vh - 3rem);
background: black;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
transform: 1s;
overflow: hidden;

`
const Dot = styled.div`
height: 20vh;
width: 20vh;
background: ${(props) => props.background || 'linear-gradient(180deg, #36B4A0 0%, #7DE2D1 100%)'};
border-radius: 50%;
position: absolute;
transform: ${(props) => props.scale || `scale(1)`};
z-index:${(props) => props.zindex};


`
