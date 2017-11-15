/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'

import {ReduceStore} from 'flux/utils'
import update from 'immutability-helper'
import dispatch from '../dispatcher'
import nodesActions from './nodesActions'
import CONSTS from '../constants'


class FormStore extends ReduceStore {
    getInitialState() {
        return {
            showForm: false,
            useParentColor: true,
        }
    }

    reduce(state, action) {
        switch (action.type) {
            case CONSTS.ACTIONS.FORM_NEW:
                return update(state, {
                    showForm: {$set: true},
                    acceptButtonLabel: {$set: 'Create'},
                    deleteButtonLabel: {$set: 'Cancel'},
                    content: {$set: ''},
                    creating: {$set: true},
                })
            case CONSTS.ACTIONS.FORM_EDIT:
                return update(state, {
                    showForm: {$set: true},
                    acceptButtonLabel: {$set: 'Update'},
                    deleteButtonLabel: {$set: 'Delete'},
                    content: {$set: action.content},
                    useParentColor: {$set: action.useParent},
                    color: {$set: action.color},
                    id: {$set: action.id},
                    creating: {$set: false},
                })
            case CONSTS.ACTIONS.FORM_SUBMITTED:
                if(state.creating)
                    setTimeout(() => nodesActions.createNewNode(state.content, state.useParentColor, state.color), 0)
                else
                    setTimeout(() => nodesActions.updateNode(state.id,state.content, state.useParentColor, state.color), 0)
            case CONSTS.ACTIONS.FORM_HIDE:
                return update(state, {showForm: {$set: false}})
            case CONSTS.ACTIONS.FORM_CONTENT_CHANGED:
                return update(state, {content: {$set: action.content}})
            case CONSTS.ACTIONS.FORM_COLOR_CHANGED:
                return update(state, {color: {$set: action.color}})
            case CONSTS.ACTIONS.FORM_DEFAULT_COLOR_CHANGED:
                return update(state, {useParentColor: {$set: action.useDefault}})
            default:
                return state
        }
    }
}

export default new FormStore(dispatch)
