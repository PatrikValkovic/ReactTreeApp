/**
 * Created by Patrik Valkovic
 * 11/15/17.
 */


'use strict'

import fetch from 'cross-fetch'
import CONSTS from '../constants'
import dispatch from '../dispatcher'

const cache = {}

const serverActions = {

    saveToCache(hash, data){
        cache[hash.toString()] = data
    },

    isInCache(hash){
        return cache.hasOwnProperty(hash.toString())
    },

    getFromCache(hash){
        if(this.isInCache(hash))
            return cache[hash.toString()]
        return null
    },

    async loadData() {
        let code = window.location.hash
        if(code)
            code = code.substr(1)
        //try cache
        if(this.isInCache(code)){
            dispatch.dispatch({
                type: CONSTS.ACTIONS.DATA_LOADED,
                data: this.getFromCache(code),
            })
            return
        }
        //download data
        let url = CONSTS.SERVER.URL
        if (code)
            url += `?${CONSTS.SERVER.REQ_NAME}=${code}`
        const response = await fetch(url)
        const data = await response.json()
        //save downloaded data
        this.saveToCache(code, data)
        //dispatch event
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
        this.saveToCache(resp.url, data)
        window.history.pushState(null,'ReactTree', `#${resp.url}`)
    }
}

window.onhashchange = () => {
    serverActions.loadData()
}

export default serverActions