import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../assets/gradlogo.svg";
import Footer from "./footer.js";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { CookiesProvider, useCookies } from "react-cookie";

import { Helmet } from "react-helmet";
import styled from "styled-components";
import "@fontsource/open-sans";
import Header from "./header";
import "./layout.css";







const Layout = ( { children } ) => {
    const [over21, setOver21] = useState( false );
    const [cookies, setCookies] = useCookies( ['isOver21'] );










    const data = useStaticQuery( graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);



    return (
        <>
            <CookiesProvider>


                <Helmet>

                </Helmet>
                <Header
                    logo={<AiOutlineMenu size='1.5rem' fill='rgba(1,1,1,.5)' />}
                    search={<Link to='/'><Logo height='3rem' fill='black' cursor='pointer' /></Link>}
                    cart={<Link to='/cart'><AiOutlineShoppingCart size='1.5rem' fill='rgba(1,1,1,.5) ' /></Link>}
                    height='4rem'
                    background='rgba(255,255,255,0)'

                />
                <div>
                    {over21 &&
                        <AgeGate style={{ textAlign: 'center' }}>
                            <h1 >Welcome to Samurai Blaze <br /> online smoke shop</h1>
                            <h3>You must be 21 to enter</h3>
                            <button onClick={() => setOver21( true )}>I am over 21</button>
                        </AgeGate>}



                    {children}
                </div>

                <Footer />

            </CookiesProvider>

        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;


const AgeGate = styled.div`
width: 100%;
height:100vh;
z-index: 100;
background: #7de2d1;
position: absolute;
top:0;
opacity: ${( props ) => props.opacity};
display: flex;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
align-items: center;


`;