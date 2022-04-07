import React, {useState, useEffect} from "react";
import { graphql } from "gatsby";


import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = ( { data } ) => {

                    return (
                        <Layout>
                            <div className='page-wrapper'>
                                <Seo title="404: Not found" />
                                
                                <h1>404: Not Found</h1>
                                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                            </div>
                        </Layout>
                    );
                }
        


;

export default NotFoundPage;



