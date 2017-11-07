/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React, {Component} from 'react'
import values from '../Tree'
import TreeNode from './TreeNode'
import NodeAdder from './NodeAdder'

export default class TaskContainer extends Component {
    constructor(){
        super()
        this.state = {
            tasks: values
        }
    }

    render() {
        return (
            <div>
                <TreeNode data={this.state.tasks}/>
                <NodeAdder/>
            </div>
        )
    }
}