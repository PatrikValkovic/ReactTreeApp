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
            useParentColor: true,
            content: '',
        }
    }

    reduce(state, action) {
        switch (action.type) {
            case CONSTS.ACTIONS.SHOW_NEW:
                return update(state, {showForm: {$set: true}})
            case CONSTS.ACTIONS.HIDE_FORM:
                return update(state, {showForm: {$set: false}})
            default:
                return state
        }
    }
}

export default new FormStore(dispatch)
