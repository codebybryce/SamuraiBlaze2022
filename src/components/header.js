import * as React from "react"
import styled from 'styled-components'

const Header = ({ logo, search, cart, color, background, height }) => {
    return (
        <>
            <Container color={color} backgroundColor={background} height={height}>
                <Logo>{logo}</Logo>
                <Search>{search}</Search>
                <CartMenu>{cart}</CartMenu>
            </Container>

        </>
    )
}

export default Header

const Container = styled.div`
color: ${(props) => props.color};
background: ${(props) => props.backgroundColor};
height: ${(props) => props.height};
display: grid; 
grid-template-columns: 1fr 1fr 1fr 1fr; 
grid-template-rows: 1fr; 
padding: .5rem;
gap: 1px 10px; 
align-items: center;
justify-items: center;
justify-content: center;
align-content: stretch;
grid-template-areas: 
"logo search search cartMenu"; `

const Logo = styled.div`grid-area: logo; display:flex; width: 100%; justify-content: left;`
const Search = styled.div`grid-area: search; display:flex; width: 100%; justify-content: center;`
const CartMenu = styled.div`grid-area: cartMenu; display:flex; width: 100%; justify-content: right;`