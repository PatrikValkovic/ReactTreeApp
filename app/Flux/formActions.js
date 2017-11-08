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
            type: CONSTS.ACTIONS.SHOW_NEW
        })
    },

    hideForm(){
        dispatch.dispatch({
            type: CONSTS.ACTIONS.HIDE_FORM
        })
    },
}

export default formActions