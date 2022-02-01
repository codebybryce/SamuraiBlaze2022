import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../assets/gradlogo.svg";
import Footer from "./footer.js";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"


import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [gate, setGate] = useState(true)






  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <>
      <Header
        logo={<AiOutlineMenu size='1.5rem' fill='rgba(1,1,1,.5)' />}
        search={<Link to='/'><Logo height='3rem' fill='black' cursor='pointer' /></Link>}
        cart={<Link to='/cart'><AiOutlineShoppingCart size='1.5rem' fill='rgba(1,1,1,.5) ' /></Link>}
        height='4rem'
        background='rgba(255,255,255,0)'

      />
      <div>
        <div>
          <AgeGate>



            <h1 style={{}}>Welcome to Samurai Blaze online smoke shop</h1>

            <h3>You must be 21 to enter</h3>

            <button >I am over 21</button>



          </AgeGate>



        </div>
        {children}
      </div>

      <Footer />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const AgeGate = styled.div`
width: 100vw;
height:100vh;
z-index: 100;
background: rgba(255,255,255);
position: absolute;
top:0;
opacity: ${(props) => props.opacity};
display: flex;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
align-items: center;


`