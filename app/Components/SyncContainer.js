/**
 * Created by Patrik Valkovic
 * 17.11.2017.
 */


'use strict'

import React, {Component} from 'react'
import {Container} from 'flux/utils'
import serverStore from '../Flux/serverStore'
import SyncPanel from './SyncPanel'

class ServerStore extends Component {
    static getStores(){
        return [serverStore]
    }
    static calculateState(prevState){
        return serverStore.getState()
    }

    render(){
        return <SyncPanel show={this.state.loading}/>
    }
}

export default Container.create(ServerStore)