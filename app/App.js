import React, { Component } from 'react';
import {render} from 'react-dom';
import values from './Tree'
import TreeNode from './TreeNode'

class App extends Component {
  render(){
    return (
      <TreeNode data={values}/>
    );
  }
}

render(<App />, document.getElementById('root'));
