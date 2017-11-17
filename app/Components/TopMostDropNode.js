/**
 * Created by Patrik Valkovic
 * 17.11.2017.
 */

'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import DropNode from './DropNode'
import CONSTS from '../constants'

export default class TopMostDropNode extends DropNode {
    render() {
        return (
            <div className={'drop-node-topmost'}>
                {super.render()}
            </div>
        )
    }
}

TopMostDropNode.propTypes = {
    parent_id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
}

TopMostDropNode.defaultProps = {
    parent_id: CONSTS.ROOT_NODE,
    index: CONSTS.ROOT_NODE,
}