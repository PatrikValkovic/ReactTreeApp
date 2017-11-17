/**
 * Created by Patrik Valkovic
 * 17.11.2017.
 */

'use strict'


import {ReduceStore} from 'flux/utils'
import update from 'immutability-helper'
import dispatch from '../dispatcher'
import nodesActions from './nodesActions'
import CONSTS from '../constants'


class ServerStore extends ReduceStore {
    getInitialState() {
        return {
            loading: true,
        }
    }

    reduce(state, action) {
        switch (action.type) {
            default:
                return state
        }
    }
}

export default new ServerStore(dispatch)

