import React, { Component } from 'react';
import styled from 'styled-components';
import { DarkBlue, LightGray, Blue, LimeGreen } from '../colors';
import '../App.css';

const Hero = styled('div')`
  background-color: ${DarkBlue};
  height: 79vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Title = styled('code')`
  margin-bottom: 135px;
`;
const G = styled('span')`
  font-size: 4em;
  padding-bottom: 60px;
  color: ${LightGray};
`;
const B = styled('span')`
  font-size: 4em;
  padding-bottom: 60px;
  color: ${Blue};
`;
const L = styled('span')`
  font-size: 4em;
  padding-bottom: 60px;
  color: ${LimeGreen};
`;

class HeroPage extends Component {
  render() {
    return (
      <Hero>
        <Title>
          <G>{'const { '}</G>
          <B>{'Russell'}</B>
          <G>{', '}</G>
          <B>{'Hayes'}</B>
          <G>{' }'}</G>
          <L>{' = '}</L>
          <B>{'helloMyNameIs'}</B>
          <G>{';'}</G>
        </Title>
      </Hero>
    );
  }
}

export default HeroPage;
