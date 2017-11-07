import React, {Component} from 'react'
import {render} from 'react-dom'
import NodesContainer from './Components/NodesContainer'
import NodeAdder from './Components/NodeAdder'

class App extends Component {
    render() {
        return (
            <div>
                <NodesContainer/>
                <NodeAdder/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'))
