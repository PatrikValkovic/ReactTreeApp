import React, {Component} from 'react'
import {render} from 'react-dom'
import NodesContainer from './Components/NodesContainer'
import FormContainer from './Components/FormContainer'

class App extends Component {
    render() {
        return (
            <div>
                <NodesContainer/>
                <FormContainer/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'))
