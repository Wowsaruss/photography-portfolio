import React, { Component } from 'react';
import styled from 'styled-components';
import { LightRed } from '../colors';

const NavMain = styled('div')`
  height: 125px;
  background-color: white;
  color: black;
  border-bottom: 0.2px solid ${LightRed};
`;

class Navbar extends Component {
  render() {
    return <NavMain>HELLO WORLD</NavMain>;
  }
}

export default Navbar;
