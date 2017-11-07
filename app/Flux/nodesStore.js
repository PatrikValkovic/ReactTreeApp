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
                            childs: [],
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

    reduce(state, action) {
        switch (action.type) {
            default:
                return state
        }
    }
}

export default new NodesStore(dispatch)
