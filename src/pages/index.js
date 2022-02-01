import * as React from "react";
import styled from 'styled-components';

import Layout from "../components/layout";

const IndexPage = ({data}) => {
  
    return(
        <Layout>
            <Hero>
                <Dot>
                    
                </Dot>
               


            </Hero>
   
     </Layout>)

}
    

export default IndexPage



const Hero = styled.div`
width: 100vw;
height: calc(80vh - 3rem);
margim-top: 3rem;
background: black;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
transform: 1s;

`
const Dot = styled.div`
height: 200px;
width: 200px;
background: linear-gradient(180deg, #36B4A0 0%, #7DE2D1 100%);
border-radius: 50%;
position: relative;

`
