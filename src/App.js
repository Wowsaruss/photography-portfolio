import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarV2 from './pages/NavbarV2';
import Gallery from './pages/Gallery';
import { White } from './colors';

const MainWrapper = styled('div')`
  height: 100vh;
  background-color: ${White};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MainWrapper>
        <NavbarV2 />
        <Gallery />
      </MainWrapper>
    );
  }
}

export default App;
