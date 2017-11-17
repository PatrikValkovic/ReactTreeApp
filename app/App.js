import React, {Component} from 'react'
import {render} from 'react-dom'
import NodesContainer from './Components/NodesContainer'
import FormContainer from './Components/FormContainer'
import SyncContainer from './Components/SyncContainer'
import serverActions from './Flux/serverActions'

class App extends Component {
    render() {
        return (
            <div>
                <NodesContainer/>
                <FormContainer/>
                <SyncContainer/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'))

serverActions.loadData()

