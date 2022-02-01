import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../assets/gradlogo.svg";
import Footer from "./footer.js";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart"

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
        logo={<AiOutlineMenu size='1.5rem' fill='rgba(1,1,1,.5)' />}
        search={<Link to='/'><Logo height='3rem' fill='black' cursor='pointer' /></Link>}
        cart={<Link to='/cart'><AiOutlineShoppingCart size='1.5rem' fill='rgba(1,1,1,.5) ' /></Link>}
        height='4rem'
        background='rgba(255,255,255,0)'

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
