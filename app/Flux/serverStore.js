/**
 * Created by Patrik Valkovic
 * 17.11.2017.
 */

'use strict'


import {ReduceStore} from 'flux/utils'
import update from 'immutability-helper'
import dispatch from '../dispatcher'
import CONSTS from '../constants'


class ServerStore extends ReduceStore {
    getInitialState() {
        return {
            loading: true,
        }
    }

    reduce(state, action) {
        switch (action.type) {
            case CONSTS.ACTIONS.SERVER_LOADING:
                return update(state, {loading: {$set: true}})
            case CONSTS.ACTIONS.SERVER_LOADED:
                return update(state, {loading: {$set: false}})
            default:
                return state
        }
    }
}

export default new ServerStore(dispatch)

