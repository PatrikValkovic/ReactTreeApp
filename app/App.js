import React, {Component} from 'react'
import {render} from 'react-dom'
import TaskContainer from './Components/TaskContainer'
import NodeAdder from './Components/NodeAdder'

class App extends Component {
    render() {
        return (
            <div>
                <TaskContainer/>
                <NodeAdder/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'))
