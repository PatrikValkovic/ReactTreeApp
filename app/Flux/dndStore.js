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
            dragging: false,
            dragging_id: null,
        }
    }

    reduce(state, action) {
        switch (action.type) {
            case CONSTS.ACTIONS.DRAGGING_CHANGED:
                return update(state, {
                    dragging: {$set: action.dragging},
                    dragging_id: {$set: action.id},
                })
            default:
                return state
        }
    }
}

export default new DndStore(dispatch)
