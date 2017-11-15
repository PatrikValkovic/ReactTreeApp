/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'

import {ReduceStore} from 'flux/utils'
import dispatch from '../dispatcher'
import update from 'immutability-helper'
import CONSTS from '../constants'
import vals from './vals'


class NodesStore extends ReduceStore {
    getInitialState() {
        return vals
    }

    iter(tree) {
        const stack = []
        stack.push({el: tree, parent: null})
        return {
            [Symbol.iterator]: () => {
                return {
                    next: () => {
                        if (stack.length === 0)
                            return {done: true}
                        const elem = stack.pop();
                        (elem.el.childs || []).forEach((child, pos) => stack.push({el: child, parent: elem, pos: pos,})) //TODO
                        return {
                            value: elem,
                            done: false,
                        }
                    },
                }
            },
        }
    }

    nextId(tree) {
        let max_id = tree.id
        for (const el of this.iter(tree))
            max_id = el.el.id > max_id ? el.el.id : max_id
        return ++max_id
    }

    find(tree, id) {
        for (const el of this.iter(tree))
            if (el.el.id === id)
                return el
    }

    replaceChild(el, transform_fn) {
        //find parents
        let copy = el
        const parents = []
        while (copy.parent !== null) {
            parents.push(copy.pos)
            copy = copy.parent
        }
        parents.reverse()
        //build update object
        let obj = {$apply: transform_fn}
        while (parents.length !== 0) {
            const arrayIndex = parents.pop()
            obj = {childs: {[arrayIndex]: obj}}
        }
        return obj
    }

    deleteNode(state, id){
        const nodeToDelete = this.find(state, id)
        if (nodeToDelete.parent === null) {
            if (nodeToDelete.el.childs.length !== 1) {
                console.error('You cannot delete top most node') //TODO
                return state
            }
            return nodeToDelete.el.childs[0]
        }
        const childs = nodeToDelete.el.childs
        const deletePth = this.replaceChild(nodeToDelete.parent, (node) => {
            return update(node, {
                childs: {
                    $splice: [
                        [nodeToDelete.pos, 1],
                        [nodeToDelete.pos, 0, ...childs],
                    ],
                },
            })
        })
        return update(state, deletePth)
    }

    reduce(state, action) {
        switch (action.type) {
            case CONSTS.ACTIONS.NODES_CREATE_NEW:
                const obj = {
                    id: this.nextId(state),
                    content: action.content,
                }
                obj.color = action.useParentColor ? null : action.color
                obj.childs = [state]
                return obj
            case CONSTS.ACTIONS.NODE_EDIT:
                const el = this.find(state, action.id)
                const mergePath = this.replaceChild(el, (node) => {
                    return update(node, {
                        content: {$set: action.content},
                        color: {$set: action.useParentColor ? null : action.color},
                    })
                })
                return update(state, mergePath)
            case CONSTS.ACTIONS.NODE_MOVE:
                //get old element
                const newId = this.nextId(state)
                const originalElement = this.find(state, action.id)
                const nodeToAdd = Object.assign({}, originalElement.el, {
                    id: newId,
                    childs: [],
                })
                //delete node
                const deletedState = this.deleteNode(state, action.id)
                //add element
                const parent = this.find(deletedState, action.target)
                const addPath = this.replaceChild(parent, (node) => {
                    console.log('node', node)
                    return update(node, {
                        childs: {
                            $splice: [[action.index, 0, nodeToAdd]],
                        },
                    })
                })
                return update(deletedState, addPath)
            case CONSTS.ACTIONS.NODE_DELETE:
                return this.deleteNode(state, action.id)
            default:
                return state
        }
    }
}

export default new NodesStore(dispatch)
