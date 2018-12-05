import React, { Component } from 'react';
import styled from 'styled-components';
import HeroPage from './pages/Hero';
import Navbar from './pages/Navbar';
import AboutMe from './pages/AboutMe';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ScrollableAnchor from 'react-scrollable-anchor';
import { DarkBlue } from './colors';

const MainWrapper = styled('div')`
  background-color: ${DarkBlue};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MainWrapper>
        <Navbar />
        <ScrollableAnchor id={'home'}>
          <HeroPage />
        </ScrollableAnchor>
        <ScrollableAnchor id={'about'}>
          <AboutMe />
        </ScrollableAnchor>
        <ScrollableAnchor id={'services'}>
          <Services />
        </ScrollableAnchor>
        <ScrollableAnchor id={'portfolio'}>
          <Portfolio />
        </ScrollableAnchor>
        <ScrollableAnchor id={'blog'}>
          <Blog />
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
      </MainWrapper>
    );
  }
}

export default App;
