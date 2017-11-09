/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import dispatch from '../dispatcher'
import CONSTS from '../constants'

const formActions = {
    showNewForm(){
        dispatch.dispatch({
            type: CONSTS.ACTIONS.FORM_NEW
        })
    },

    hideForm(){
        dispatch.dispatch({
            type: CONSTS.ACTIONS.FORM_HIDE
        })
    },

    contentChanged(newContent){
        dispatch.dispatch({
            type: CONSTS.ACTIONS.FORM_CONTENT_CHANGED,
            content: newContent,
        })
    },

    defaultChanged(useDefault){
        dispatch.dispatch({
            type: CONSTS.ACTIONS.FORM_DEFAULT_COLOR_CHANGED,
            useDefault: useDefault,
        })
    },

    colorChanged(newColor){
        dispatch.dispatch({
            type: CONSTS.ACTIONS.FORM_COLOR_CHANGED,
            color: newColor,
        })
    },

    submitted(){
        dispatch.dispatch({
            type: CONSTS.ACTIONS.FORM_SUBMITTED
        })
    }
}

export default formActions