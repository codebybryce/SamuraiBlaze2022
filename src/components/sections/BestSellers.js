import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { gsap } from "gsap";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";



const BestSellersCard = ( { bestSellerCardImage, bestSellerCardText, categoryLink } ) => {
    return (

        <>
            <ProductCard >
                <Link to={categoryLink}>
                    <GridContainer>
                        <GridImage>
                            {bestSellerCardImage}
                        </GridImage>
                        <GridText>
                            {bestSellerCardText}
                        </GridText>
                    </GridContainer>
                </Link>


            </ProductCard>
        </>

    );

};



const BestSellers = ( background ) => {
    const data = useStaticQuery( graphql`
    {
      allContentfulCategoryPage(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            categoryTitle
            node_locale
            slug
            categoryImage {
              gatsbyImageData(
                cropFocus: CENTER
                formats: AUTO
                resizingBehavior: SCALE
                cornerRadius: 30
                layout: CONSTRAINED
                height: 200
                sizes: "200"
                width: 200
              )
            }
          }
        }
      }
    }
  `);





    return (
        <>
            <div className="section-title"><h2>Best Sellers</h2></div>
            <Container background={background}>

                {data.allContentfulCategoryPage.edges.map( ( { node }, i ) => (

                    <BestSellersCard key={i} bestSellerCardImage={
                        <GatsbyImage
                            image={node.categoryImage.gatsbyImageData}
                            alt={node.categoryTitle}

                        />}
                        bestSellerCardText={node.categoryTitle}
                        categoryLink={node.slug} /> ) )}




            </Container>
        </>
    );
};

export default BestSellers;




const Container = styled.div`

@media(max-width:768px){
    position:relative;
    height: calc(max-content + 1rem);
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
}
@media(min-width:769px){
position:relative;
    height: calc(max-content + 1rem);
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

`;

const ProductCard = styled.div`
width: 300px;
min-width:300px;
height: 300px;
color: var(--text-black);
margin: 1rem;
overflow: hidden;
box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.5);
border-radius: 30px;
`;


const GridContainer = styled.div`
display: grid;
justify-items: center;
align-items: center;
align-content: stretch;
grid-template-columns: 1fr;
grid-template-rows: 1.4fr 0.6fr;
gap: 0px 0px;
width: 300px;
height:300px;
grid-template-areas: 
"image"
"text"


`;


const GridImage = styled.div`
grid-area: image
`;

const GridText = styled.div`
grid-area: text
`;


