import * as React from "react";
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";




const IndexPage = ( { data } ) => {
    console.log( data.contentfulAsset.gatsbyImageData );
    const image = getImage( data.contentfulAsset.gatsbyImageData );

    function dots() {

    }



    return (
        <>
            <Helmet>

            </Helmet>
            <Layout>

                <Hero>
                    <Dot scale='scale(3)' zindex='3' />
                    <Dot background='black' scale='scale(2.75)' zindex='4' />
                    <Dot scale='scale(2.5)' zindex='5' />
                    <Dot background='black' scale='scale(2.25)' zindex='6' />
                    <Dot scale='scale(2)' zindex='6' />
                    <GatsbyImage image={image} alt='new pipe' zIndex='10' />
                </Hero>

            </Layout>
        </>
    );


};


export default IndexPage;

export const query = graphql`
  {
    contentfulAsset(id: {eq: "04bde1fa-9409-53e3-85a3-afca0a6ecc17"}) {
      gatsbyImageData(
        placeholder: TRACED_SVG
        resizingBehavior: SCALE
        sizes: "400"
        formats: AUTO
        cropFocus: CENTER
        height: 400
      )
    }
  }
`;





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

`;
const Dot = styled.div`
height: 20vh;
width: 20vh;
background: ${( props ) => props.background || 'linear-gradient(180deg, #36B4A0 0%, #7DE2D1 100%)'};
border-radius: 50%;
position: absolute;
transform: ${( props ) => props.scale || `scale(1)`};
z-index:${( props ) => props.zindex};


`;
