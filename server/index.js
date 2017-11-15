/**
 * Created by Patrik Valkovic
 * 11/15/17.
 */

'use strict'

const crypto = require('crypto')
const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const vals = require('./vals.js')

const app = new Koa()
app.use(bodyparser())

const intro = JSON.stringify(vals)
const data = {}

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
        ctx.body = link ? data[link] || intro : intro
    }
})

app.listen(3000)