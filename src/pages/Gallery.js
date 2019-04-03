import React, { Component } from 'react';
import styled from 'styled-components';
import { Black, DarkBlue } from '../colors';

const MainWrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const One = styled('div')`
  background-color: ${DarkBlue};
  height: 340px;
  width: 500px;
`;
const Two = styled('div')`
  background-color: ${Black};
  height: 500px;
  width: 340px;
`;
const Three = styled('div')`
  background-color: ${DarkBlue};
  height: 340px;
  width: 500px;
`;
const Four = styled('div')`
  background-color: ${Black};
  height: 500px;
  width: 340px;
`;
const Five = styled('div')`
  background-color: ${DarkBlue};
  height: 340px;
  width: 500px;
`;
const Six = styled('div')`
  background-color: ${Black};
  height: 500px;
  width: 340px;
`;
const Seven = styled('div')`
  background-color: ${DarkBlue};
  height: 340px;
  width: 500px;
`;
const Eight = styled('div')`
  background-color: ${Black};
  height: 500px;
  width: 340px;
`;
const Nine = styled('div')`
  background-color: ${DarkBlue};
  height: 340px;
  width: 500px;
`;

class Gallery extends Component {
  render() {
    return (
      <MainWrapper>
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <Seven />
        <Eight />
        <Nine />
      </MainWrapper>
    );
  }
}

export default Gallery;
