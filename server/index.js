/**
 * Created by Patrik Valkovic
 * 11/15/17.
 */

'use strict'

const crypto = require('crypto')
const Koa = require('koa')
const Https = require('https')
const  fs = require('fs')
const bodyparser = require('koa-bodyparser')
//const throttle = require('koa-throttle')
const vals = require('./vals.js')

const app = new Koa()
app.use(bodyparser())

const intro = JSON.stringify(vals)
const data = {}

/*
app.use(throttle({
    rate: 1000,
    chunk: 999999992,
}))
*/

app.use(async (ctx) => {
    ctx.response.set('Access-Control-Allow-Origin', '*')
    const op = ctx.request.method
    if (op === 'POST') {
        const req = ctx.request.body['data']
        if (!req) {
            ctx.body = JSON.stringify({success: false, reason: 'No data passed'})
            return ctx
        }
        const hash = crypto.createHash('md5').update(req).digest('hex')
        data[hash.toString()] = req
        setTimeout(() => {
            delete data[hash]
        }, 3600 * 1000)
        ctx.body = JSON.stringify({success: true, url: hash})
    }
    else {
        const link = ctx.request.query.link
        console.log("Attemp of get data")
        console.log(link)
        console.log(data)
        console.log("Object property")
        console.log(data[link])
        ctx.body = link ? data[link] || intro : intro
    }
})

app.listen(3000)
