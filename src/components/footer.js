import styled from "styled-components"
import React from "react"

const Footer = ({headerOne, headerTwo, headerThree, contentOne, contentTwo, contentThree }) =>{

    return(
        
        <StyledFooter>
        <Container>
        <HeaderOne>
            {headerOne}
        </HeaderOne>
        <HeaderTwo>
            {headerTwo}
        </HeaderTwo>
        <HeaderThree>
            {headerThree}
        </HeaderThree>
        <ContentOne>{contentOne}</ContentOne>
        <ContentTwo>{contentTwo}</ContentTwo>
        <ContentThree>{contentThree}</ContentThree>
        
        </Container>
        </ StyledFooter>

        
    )

}

export default Footer

const StyledFooter = styled.div`
bottom: 0;
left: 0;
position: fixed;


`
const Container = styled.div`
    height: max-content;
   display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.4fr 1.6fr;
    gap: 1px 10px;
    grid-auto-flow: row;
    grid-template-areas:
      "HeaderOne HeaderTwo HeaderThree"
      "ContentOne ContentTwo ContentThree";
  `
  
const HeaderOne = styled.div` grid-area: HeaderOne; `
  
const HeaderTwo = styled.div` grid-area: HeaderTwo; `
  
const HeaderThree = styled.div`grid-area: HeaderThree; `
  
const ContentOne = styled.div` grid-area: ContentOne; `
  
const ContentTwo = styled.div `grid-area: ContentTwo; `
  
const ContentThree = styled.div` { grid-area: ContentThree; `
  