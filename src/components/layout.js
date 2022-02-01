import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../assets/gradlogo.svg";
import Footer from "./footer.js";
import {AiOutlineMenu} from "@react-icons/all-files/ai/AiOutlineMenu";
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
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
    logo={<AiOutlineMenu size='1.5rem' fill='white'/>}
    search={<Link to='/'><Logo height='3rem' fill='white' cursor='pointer'/></Link>}
    cart={<Link to='/cart'><AiOutlineShoppingCart size='1.5rem' fill='white'/></Link>}
    height='4rem'
    background='#282729'

    />
    <div>
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
