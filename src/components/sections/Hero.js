import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";





const Hero = ( { content, themeSecondary, background, brand, ProductTitle, ProductDescription, marginTop } ) => {
    const R1 = useRef();
    const R2 = useRef();
    const R3 = useRef();
    const dot = useRef();
    const tl = useRef();


    useEffect( () => {
        tl.current = gsap.timeline()
            .to( dot.current, { scaleX: 2.1, scaleY: 2.1, opacity: .5, yoyo: true, repeat: Infinity, duration: 2 } )
            .to( R1.current, { scaleX: 2.6, scaleY: 2.6, yoyo: true, repeat: Infinity, duration: 2, } )
            .to( R2.current, { scaleX: 3.1, scaleY: 3.1, opacity: .5, yoyo: true, repeat: Infinity, duration: 2, } );

    } );
    return (
        <>


            <StyledDiv background={background} marginTop={`4rem`}>


                <Dot background={themeSecondary} ref={R2} scale="scale(3)" zindex="3" />
                <Dot background={background} scale="scale(2.75)" zindex="4" />
                <Dot background={themeSecondary} ref={R1} scale="scale(2.5)" zindex="5" />
                <Dot background={background} scale="scale(2.25)" zindex="6" />
                <Dot background={themeSecondary} ref={dot} scale="scale(2)" zindex="6" />
                <TextBox className='title'>
                    <StyledH2>{ProductTitle}</StyledH2>
                    <StyledP>
                        {ProductDescription}
                    </StyledP>

                </TextBox>
                <TextBox className='brand'>
                    <StyledH3>{brand}</StyledH3>
                </TextBox>
                <TextBox className='button'>
                    <Button buttonColor={themeSecondary}>Learn More</Button>
                </TextBox>
                {content}

            </StyledDiv>

        </>
    );
};

export default Hero;


const StyledDiv = styled.div`
margin-top: ${( props ) => props.marginTop};

    position:relative;
  width:100%;
  height: calc(80vh - 3rem);
  background: ${( props ) => props.background || 'black'};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  transform: 1s;
  overflow: hidden;
`;
const Dot = styled.div`
  height: 20vh;
  width: 20vh;
  background: ${props =>
        props.background || "linear-gradient(180deg, #36B4A0 0%, #7DE2D1 100%)"};
  border-radius: 50%;
  position: absolute;
  transform: ${props => props.scale || `scale(1)`};
  z-index: ${props => props.zindex};
`;

const TextBox = styled.div`
z-index: 6;
&.title{
    position:absolute;

    top: 1rem;
    left: 1rem;

    @media(min-width: 1180px){
        top: 28%;
        left: 10vw;
    }

}&.brand{
    position:absolute;
    top: 1rem;
    right: 1rem;

    @media(min-width: 1180px){
        top: 25%;
        left: 10vw;
    }

}&.button{
    position:absolute;
    bottom: 1rem;
    left: 1rem;

    @media(min-width:1180px){
        top: 80%;
        left: 10vw;
    }

`;
const StyledH2 = styled.h2`
color: white;

`;

const StyledH3 = styled.h3`
color: white;

`;
const StyledP = styled.p`
color: white;
`;

const Button = styled.button`
color: var(--teal);
border: 2px solid var(--teal);
transition: .8s;
:hover{
    background: var(--teal);
    color: ${( props ) => props.background || 'black'};
    transition: .8s;
}

`;

