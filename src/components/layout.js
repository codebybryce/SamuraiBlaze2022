import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../assets/gradlogo.svg";
import Footer from "./footer.js";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { CookiesProvider, useCookies } from "react-cookie";
import { Helmet } from "react-helmet";
import "@fontsource/open-sans";
import Header from "./header";
import "./layout.css";
import styled from "styled-components";
import MenuDrawer from "../components/MenuDrawer";


const headHeight = '4rem';
const Layout = ( { children, left, position, } ) => {
    const [over21, setOver21] = useState( false );
    const [cookies, setCookies] = useCookies( ["isOver21"] );
    const [drawer, setDrawer] = useState( false );


    function closeDrawer () {
        setDrawer( false );

    }




    return (
        <>
            <CookiesProvider>

                <Helmet></Helmet>
                {drawer ? <MenuDrawer left={'0'} position={'fixed'} onClickModal={() => closeDrawer()} /> : <MenuDrawer left={'-100%'} position={'absolute'} />}

                <Header

                    logo={<AiOutlineMenu className='button-style' size="1.5rem" fill="var(--blackThemeText)" onClick={() => setDrawer( !drawer )} />}
                    search={
                        <Link to="/">
                            <Logo height="3rem" fill="black" cursor="pointer" />
                        </Link>
                    }
                    cart={
                        <button>
                            <Link to="/cart">
                                <AiOutlineShoppingCart size="1.5rem"
                                    fill="var(--blackThemeText)" />
                            </Link>


                        </button>}

                    height={headHeight}
                    background="var(--blackTheme)"

                />
                <div>
                    {over21 && (
                        <AgeGate style={{ textAlign: "center" }}>
                            <h1>
                                Welcome to Samurai Blaze <br /> online smoke shop
              </h1>
                            <h3>You must be 21 to enter</h3>
                            <button onClick={() => setOver21( true )}>I am over 21</button>
                        </AgeGate>
                    )}

                    <div className='page-wrapper'>

                        {children}
                    </div>




                </div>

                <Footer />

            </CookiesProvider>
        </>
    );
};


export default Layout;

const AgeGate = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: #7de2d1;
  position: absolute;
  top: 0;
  opacity: ${ props => props.opacity };
  display: flex;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

