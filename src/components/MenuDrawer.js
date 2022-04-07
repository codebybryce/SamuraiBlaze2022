import React, { useEffect, useState, useRef } from 'react';
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { Link } from "gatsby";
import { gsap } from "gsap";





const MenuDrawer = ( { left, position, onClickModal, link, linkTitle } ) => {
    const data = useStaticQuery( graphql`
    {
      site(siteMetadata: {}) {
        siteMetadata {
          author
          description
          siteUrl
          title
          menuLinks {
            link
            page
          }
        }
      }
    }
  `);

    const R1 = useRef();
    const R2 = useRef();
    const R3 = useRef();
    const dot = useRef();



    const links = data.site.siteMetadata.menuLinks;

    return ( <>

        <MenuContainer left={left} position={position}>



            <ul>
                {links.map( ( link, i ) => <li key={i} ref={R1}><Link className='text-on-dark' to={link.link}>{link.page}</Link></li> )}

            </ul>



        </MenuContainer>
        <Modal left={left} position={position} onClick={onClickModal} />


    </> );
};


export default MenuDrawer;


const MenuContainer = styled.div`
height: 100vh;
border-radius: 0px 30px 0px 0px;
width: clamp(200px, 300px, 60vw );
background: var(--blackTheme);
position: ${ ( props ) => props.position || 'absolute' };
z-index: 100;
left: ${ ( props ) => props.left };
transition-timing-function: ease-in;
transition: 500ms;
padding: 2rem;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-between;
align-items: flex-start;

`;

const Modal = styled.div`
background: black;
opacity: .8;
top: 0;
left: 0;
right: 0;
bottom: 0;
height: 100%;
width: 100%;
backdrop-filter: blur(10);
position: ${ ( props ) => props.position || 'absolute' };
transition-timing-function: ease-in;
z-index: 98;
left: ${ ( props ) => props.left };
transition: .2s;
`;

