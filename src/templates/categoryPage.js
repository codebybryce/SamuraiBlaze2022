import React from 'react';
import Layout from "../components/layout";
import "../templates/landingPageGrid.css";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const CategoryPageTemplate = ( { pageContext } ) => {


    console.log( pageContext );

    function createMarkup () {
        const htmlData = pageContext.data.childrenContentfulLandingPageContentTextTextNode[0].childMarkdownRemark.html;

        return { __html: htmlData };
    }

    return (
        <Layout>

            <div class="container">
                <div class="header" />
                <div class="content">


                    <div dangerouslySetInnerHTML={createMarkup()} />



                </div>
                <div class="menu">{""}</div>
                <div class="addSpace">
                    <div class="addOne"></div>
                    {""}
                    <div class="addTwo">
                        {""}
                    </div>
                </div>
                <div class="footer" />
            </div>

        </Layout>
    );
};
export default CategoryPageTemplate;
