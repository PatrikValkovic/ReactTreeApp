/**
 * Created by Patrik Valkovic
 * 17.11.2017.
 */

'use strict'
import React from 'react'
import DropNode from './DropNode'

export default class TopMostDropNode extends DropNode {
    render() {
        return (
            <div className={'drop-node-topmost'}>
                {super.render()}
            </div>
        )
    }
}