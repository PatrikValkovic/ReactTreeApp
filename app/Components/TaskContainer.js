/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React, {Component} from 'react'
import {Container} from 'flux/utils'
import TreeNode from './TreeNode'
import formStore from '../Flux/formStore'
import nodesStore from '../Flux/nodesStore'


class TaskContainer extends Component {
    static getStores(){
        console.log('getStores')
        return [formStore, nodesStore]
    }
    static calculateState(prevState){
        console.log('calcualte')
        return {
            form: formStore.getState(),
            nodes: nodesStore.getState()
        }
    }
    render() {
        console.log(this.state)
        return (
            <TreeNode data={this.state.nodes}/>
        )
    }
}

export default Container.create(TaskContainer)