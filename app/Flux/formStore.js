/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'

import {ReduceStore} from 'flux/utils'
import dispatch from '../dispatcher'
import update from 'immutability-helper'
import CONSTS from '../constants'

class FormStore extends ReduceStore {
    getInitialState() {
        return {
            showForm: true,
        }
    }

    reduce(state, action) {
        switch (action.type) {
            case CONSTS.ACTIONS.SHOW_NEW:
                return update(state, {showForm: {$set: true}})
            default:
                return state
        }
    }
}

export default new FormStore(dispatch)
