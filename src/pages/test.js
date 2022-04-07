import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import ProductPageGrid from '../components/sections/layoutGrids/ProductPageGrid';

const Data = []
const Test = () => {


    return (

        <Layout>
            <Page>





            </Page>
            <section>
                {Data.fields.productContextMd["en-US"]}


            </section>

            <ExpanderDivCart />
        </Layout > );

};

export default Test;


const ActiveImage = styled.div`

width: clamp(200px, 500px, 80vw);
display: flex;
padding: .5rem;
`;
const InactiveImage = styled.div`
width: 100px;
height: 100px;
display: flex;
padding: .5rem;
`;


const Page = styled.div`
display: flex;
position: relative;

height: 100%;
justify-content: center;
background: var(--secondaryBackground);
`;

const Image = styled.img`
width: clamp(200px, 500px, 80vw);
height: auto;
`;


const ExpanderDivCart = styled.div`
background: fixed;
height: 9vh;
width: 100vw;
border-radius: 10% 10% 0 0;
background: var(--tealGradient);
position: relative;
bottom: 0;
position: fixed;
`;

