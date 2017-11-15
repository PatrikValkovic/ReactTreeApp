/**
 * Created by Patrik Valkovic
 * 11/9/17.
 */


'use strict'
import dispatch from '../dispatcher'
import CONSTS from '../constants'

const treeActions = {
    createNewNode(content, useParentColor, color) {
        dispatch.dispatch({
            type: CONSTS.ACTIONS.NODES_CREATE_NEW,
            content, useParentColor, color,
        })
    },

    updateNode(id, content, useParentColor, color) {
        dispatch.dispatch({
            type: CONSTS.ACTIONS.NODE_EDIT,
            id, content, useParentColor, color,
        })
    },

    moveNode(id, target, toIndex){
        dispatch.dispatch({
            type: CONSTS.ACTIONS.NODE_MOVE,
            target, id,
            index: toIndex,
        })
    }
}

export default treeActions