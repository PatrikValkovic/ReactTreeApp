/**
 * Created by Patrik Valkovic
 * 11/14/17.
 */

'use strict'

import {ReduceStore} from 'flux/utils'
import dispatch from '../dispatcher'
import update from 'immutability-helper'
import CONSTS from '../constants'

class DndStore extends ReduceStore {
    getInitialState() {
        return {
            dragging: true,
            dragging_id: null,
        }
    }

    reduce(state, action) {
        switch (action.type) {
            default:
                return state
        }
    }
}

export default new DndStore(dispatch)
