/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React, {Component} from 'react'
import {Container} from 'flux/utils'
import TreeNode from './TreeNode'
import nodesStore from '../Flux/nodesStore'


class TaskContainer extends Component {
    static getStores(){
        return [nodesStore]
    }
    static calculateState(prevState){
        return {
            nodes: nodesStore.getState()
        }
    }
    render() {
        return (
            <TreeNode data={this.state.nodes}/>
        )
    }
}

export default Container.create(TaskContainer)