/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'

import {ReduceStore} from 'flux/utils'
import dispatch from '../dispatcher'
import update from 'immutability-helper'
import CONSTS from '../constants'

const vals = {
    id: 10,
    content: 'TopMost',
    childs: [
        {
            id: 0,
            content: 'Upper1',
            color: '#FF0000',
            childs: [
                {
                    id: 2,
                    content: 'Middle1',
                    color: '#ff651c',
                    childs: [],
                },
                {
                    id: 3,
                    content: 'Middle2',
                    color: '#ff2c47',
                    childs: [],
                },
            ],
        },
        {
            id: 1,
            content: 'Upper2',
            color: '#00FF00',
            childs: [
                {
                    id: 5,
                    content: 'Middle3',
                    childs: [],
                },
                {
                    id: 4,
                    content: 'Middle4',
                    color: '#14ff8f',
                    childs: [
                        {
                            id: 7,
                            content: 'Down1',
                            color: '#146d33',
                            childs: [],
                        },
                    ],
                },
                {
                    id: 6,
                    content: 'Middle5',
                    color: '#98ff1e',
                    childs: [
                        {
                            id: 8,
                            content: 'Down2',
                            color: '#b8ff27',
                            childs: [],
                        },
                        {
                            id: 9,
                            content: 'Down3',
                            color: '#dfff2e',
                            childs: [
                                {
                                    id: 10,
                                    content: 'TEST1',
                                    childs: [
                                        {
                                            id: 11,
                                            content: 'TEST1',
                                            childs: [
                                                {
                                                    id: 12,
                                                    content: 'TEST1',
                                                    childs: [
                                                        {
                                                            id: 13,
                                                            content: 'TEST1',
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}


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
            default:
                return state
        }
    }
}

export default new NodesStore(dispatch)
