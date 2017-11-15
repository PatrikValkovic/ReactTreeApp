/**
 * Created by Patrik Valkovic
 * 11/15/17.
 */

'use strict'

import fetch from 'cross-fetch'
import CONSTS from '../constants'
import dispatch from '../dispatcher'

export default {

    async loadData(code = null) {
        let url = CONSTS.SERVER.URL
        if (code)
            url += `/${CONSTS.SERVER.REQ_NAME}=${code}`
        const response = await fetch(url)
        const data = await response.json()
        dispatch.dispatch({
            type: CONSTS.ACTIONS.DATA_LOADED,
            data,
        })
    },

}