/**
 * Created by Patrik Valkovic
 * 11/15/17.
 */

'use strict'

import dispatch from '../dispatcher'
import CONSTS from '../constants'

export default {

    changeDragging(performDragging, id){
        setTimeout(() => dispatch.dispatch({
            type: CONSTS.ACTIONS.DRAGGING_CHANGED,
            dragging: performDragging,
            id,
        }), 0)
    }

}