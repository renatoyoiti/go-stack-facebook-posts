import React, { Component } from 'react';

import './style.css';

import PostList from '../PostList';

class Main extends Component {
  render() {
    return (
      <main>
        <PostList></PostList>
      </main>
    )
  }
}

export default Main;
