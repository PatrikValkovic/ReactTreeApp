/**
 * Created by Patrik Valkovic
 * 11/14/17.
 */

'use strict'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {DropTarget} from 'react-dnd'
import CONSTS from '../constants'
import TreeNode from './TreeNode'
import nodesActions from '../Flux/nodesActions'

let counter = 1000

class DropNode extends Component {

    computeMargins(styles, useMarginleft, useMarginRight) {
        if (!useMarginleft) {
            styles.marginLeft = 0
            styles.width = '30px'
        }
        if (!useMarginRight) {
            styles.marginLeft = '-30px'
            styles.width = '30px'
        }
        return styles
    }

    render() {
        const connectDropTarget = this.props.connectDropTarget
        const style = this.computeMargins({}, this.props.marginLeft, this.props.marginRight)
        return connectDropTarget(
            <div className={'drop-node'}>
                <div className={'inner-node'} style={style}>
                </div>
            </div>,
        )
    }

    static getId() {
        return ++counter
    }

}

DropNode.propTypes = {
    marginLeft: PropTypes.bool,
    marginRight: PropTypes.bool,
    parent_id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
}

DropNode.defaultProps = {
    marginLeft: true,
    marginRight: true,
}

const nodeTarget = {
    drop(props, monitor) {
        nodesActions.moveNode(monitor.getItem().id, props.parent_id, props.index)
    },
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
    }
}

export default DropTarget(CONSTS.DND.ITEM_TYPE, nodeTarget, collect)(DropNode)