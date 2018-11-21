import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import { LightRed } from './colors';

const Navbar = styled('div')`
  height: 125px;
  background-color: white;
  color: black;
  border-bottom: 0.2px solid ${LightRed};
`;

const Hero = styled('div')`
  height: 81vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const AboutMe = styled('div')`
  height: 400px;
  background-color: ${LightRed};
`;

const Code = styled('code')`
  font-size: 3em;
  color: black;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>HELLO WORLD</Navbar>
        <Hero>
          <Code>{'const {Russell, Hayes} = helloMyNameIs;'}</Code>
          <img src={logo} className="App-logo" alt="logo" />
        </Hero>
        <AboutMe />
      </div>
    );
  }
}

export default App;
