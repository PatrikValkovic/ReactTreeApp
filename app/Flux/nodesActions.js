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
        console.log("Updating", ...arguments)
    },
}

export default treeActions