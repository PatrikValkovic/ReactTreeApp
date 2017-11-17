/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React, {Component} from 'react'
import {Container} from 'flux/utils'
import {DragDropContext} from 'react-dnd'
import HTMLBackend from 'react-dnd-html5-backend'
import TreeNode from './TreeNode'
import nodesStore from '../Flux/nodesStore'
import dndStore from '../Flux/dndStore'


class NodesContainer extends Component {
    static getStores() {
        return [nodesStore, dndStore]
    }

    static calculateState(prevState) {
        return {
            nodes: nodesStore.getState(),
            dnd: dndStore.getState(),
        }
    }

    render() {
        return !this.state.nodes ? null : (
            <TreeNode data={this.state.nodes} dnd={this.state.dnd} renderUpper={this.state.dnd.dragging}/>
        )
    }
}

export default DragDropContext(HTMLBackend)(Container.create(NodesContainer))