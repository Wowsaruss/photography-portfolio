import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import '../App.css';

const Code = styled('code')`
  font-size: 3em;
  padding-bottom: 60px;
  color: black;
`;

const Hero = styled('div')`
  height: 79vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

class HeroPage extends Component {
  render() {
    return (
      <Hero>
        <Code>{'const {Russell, Hayes} = helloMyNameIs;'}</Code>
        <img src={logo} className="App-logo" alt="logo" />
      </Hero>
    );
  }
}

export default HeroPage;
