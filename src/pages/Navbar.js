import React, { Component } from 'react';
import styled from 'styled-components';
import hamburger from '../assets/hamburger.svg';
import { LightRed } from '../colors';

const NavMain = styled('div')`
  height: 125px;
  background-color: white;
  color: black;
  border-bottom: 0.2px solid ${LightRed};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Hamburger = styled('img')``;

const NavLink = styled('a')`
  text-decoration: none;
  color: black;
`;

class Navbar extends Component {
  render() {
    return (
      <NavMain>
        <Hamburger src={hamburger} alt="" />
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/">ABOUT</NavLink>
        <NavLink href="/">SERVICE</NavLink>
        <NavLink href="/">PORTFOLIO</NavLink>
        <NavLink href="/">BLOG</NavLink>
        <NavLink href="/">CONTACT</NavLink>
      </NavMain>
    );
  }
}

export default Navbar;
