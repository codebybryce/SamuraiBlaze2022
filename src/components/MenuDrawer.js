import React from 'react';
import { graphql } from "gatsby";
import styled from "styled-components";



const MenuDrawer = ( { left, position, onClickModal } ) => {

    return ( <>

        <MenuContainer left={left} position={position}>
 

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
position: ${( props ) => props.position || 'absolute'};
z-index: 100;
left: ${( props ) => props.left};
transition-timing-function: ease-in;
transition: 500ms;
display: flex;


`;

const Modal = styled.div`
background: var(--backdrop);
top: 0;
left: 0;
right: 0;
bottom: 0;
height: 100%;
width: 100%;
backdrop-filter: blur(2px);
position: ${( props ) => props.position || 'absolute'};
transition-timing-function: ease-in;
z-index: 98;
left: ${( props ) => props.left};
transition: .2s;


`;