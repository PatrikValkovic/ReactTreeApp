import React, { Component } from 'react';
import {render} from 'react-dom';
import TaskContainer from './Components/TaskContainer'

class App extends Component {
  render(){
    return <TaskContainer/>
  }
}

render(<App />, document.getElementById('root'));
