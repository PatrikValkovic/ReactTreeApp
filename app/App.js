import React, { Component } from 'react';
import {render} from 'react-dom';
import values from './Tree'
import TreeNode from './TreeNode'
import NodeAdder from './NodeAdder'

class App extends Component {
  render(){
    return (
        <div>
            <TreeNode data={values}/>
            <NodeAdder/>
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
