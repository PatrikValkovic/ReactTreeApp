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

    render() {
        const connectDropTarget = this.props.connectDropTarget
        const style = TreeNode.fillMargins({}, this.props.marginLeft, this.props.marginRight)
        return connectDropTarget(<div className={'drop-node'} style={style}/>)
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