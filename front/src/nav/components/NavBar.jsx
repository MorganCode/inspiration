import React from 'react'
import { NavLink } from "react-router-dom"
import styled from 'styled-components'
import { lighten } from 'polished'

const Nav = styled.nav`
display: flex;
justify-content: center;
margin-top: 1rem;
`
const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
    activeClassName: activeClassName,
})`
margin: 0.5rem;
text-decoration:none;
color: #000;
&.${activeClassName} {
    background: #87CEEB;
    color: #fff;
    font-weight:bold;
    border-radius:10%;
    padding:0.5rem;
  }
  &:focus{  color: #fff;
    font-weight:bold;
    border-radius:10%;
    padding:0.5rem;
    background-color: #87CEEB;
    }
  &:hover{  
    color: #fff;
    font-weight:bold;
    border-radius:10%;
    padding:0.5rem;
    background-color: ${lighten(0.2, '#87CEEB')}
    }`


const NavBar = () => {
    return (
        <Nav>
            <StyledNavLink exact to="/">Home</StyledNavLink>
            <StyledNavLink to="/hairstyle">Hairstyle</StyledNavLink>
            <StyledNavLink to="/top">Top</StyledNavLink>
            <StyledNavLink to="/bottoms">Bottoms</StyledNavLink>
            <StyledNavLink to="/shoes">Shoes</StyledNavLink>
            <StyledNavLink to="/accessory">Accessory</StyledNavLink>
        </Nav>
    )
}

export default NavBar