import React, { Component } from 'react';
import styled from 'styled-components';
import { LightGray } from '../colors';

const PortfolioMain = styled('div')`
  height: 100vh;
  background-color: ${LightGray};
`;

class Portfolio extends Component {
  render() {
    return <PortfolioMain>POTFOLIO</PortfolioMain>;
  }
}

export default Portfolio;
