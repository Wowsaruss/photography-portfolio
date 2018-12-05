import React, { Component } from 'react';
import styled from 'styled-components';
import { DarkBlue } from '../colors';

const BlogMain = styled('div')`
  height: 100vh;
  background-color: ${DarkBlue};
`;

class Blog extends Component {
  render() {
    return <BlogMain>BLOG</BlogMain>;
  }
}

export default Blog;
