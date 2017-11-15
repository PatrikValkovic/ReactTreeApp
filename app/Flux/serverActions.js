/**
 * Created by Patrik Valkovic
 * 11/15/17.
 */

'use strict'

import fetch from 'cross-fetch'
import CONSTS from '../constants'
import dispatch from '../dispatcher'

export default {

    async loadData() {
        let url = CONSTS.SERVER.URL
        const code = window.location.hash
        if (code)
            url += `?${CONSTS.SERVER.REQ_NAME}=${code.substr(1)}`
        const response = await fetch(url)
        const data = await response.json()
        dispatch.dispatch({
            type: CONSTS.ACTIONS.DATA_LOADED,
            data,
        })
    },

    async sendData(data){
        const payload = JSON.stringify(data)
        const respRaw = await fetch(CONSTS.SERVER.URL,{
            method: 'POST',
            body: `data=${payload}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const resp = await respRaw.json()
        if(!resp.success){
            console.error("Cannot send data to server") //TODO
            return
        }
        window.history.pushState(null,'ReactTree', `#${resp.url}`)
    }

}