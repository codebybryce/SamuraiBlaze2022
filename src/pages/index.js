import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/sections/Hero";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import "@fontsource/open-sans"; // Defaults to weight 400.
import BestSellers from "../components/sections/BestSellers";
import NewProducts from "../components/sections/NewProducts"
import firebase from "gatsby-plugin-firebase"




const IndexPage = (  ) => {
    const image = getImage( data.contentfulAsset.gatsbyImageData );
    const [api, setapi] = React.useState(null)

    const [data, setData] = React.useState(null)

    React.useEffect(()=>{
        firebase.database()
    })



    return (
        <>
            <Helmet></Helmet>

            <Layout>
                <Hero
                    
                    background={'black'}
                    content={<GatsbyImage image={image} alt="new pipe" zIndex="10" />}
                    brand="Brand"
                    ProductDescription="product description"
                    ProductTitle="Title"

                />
                <BestSellers />
            </Layout>
        </>
    );
};

export default IndexPage;


export const query = graphql`
  {
    contentfulAsset(id: { eq: "04bde1fa-9409-53e3-85a3-afca0a6ecc17" }) {
      gatsbyImageData(
        placeholder: TRACED_SVG
        resizingBehavior: SCALE
        sizes: "400"
        formats: AUTO
        cropFocus: CENTER
        height: 400
      )
    }
  },
`;