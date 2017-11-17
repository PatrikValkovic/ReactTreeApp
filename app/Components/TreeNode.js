/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */


'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CONSTS from '../constants'
import NodeContent from './NodeContent'
import ChildContainer from './ChildContainer'
import DropNode from './DropNode'
import TopMostDropNode from './TopMostDropNode'

class TreeNode extends Component {

    render() {
        let upper = this.props.renderUpper ? <TopMostDropNode/> : null
        return (
            <div className={'child'} style={this.createStyle()}>
                {upper}
                <NodeContent id={this.props.data.id}
                             content={this.props.data.content}
                             isDragging={this.props.dnd.dragging_id === this.props.data.id}
                             color={this.props.data.color || this.props.color || CONSTS.CONTENT_COLOR}/>
                <ChildContainer childs={this.props.data.childs || []}
                                parent_id={this.props.data.id}
                                dnd={this.props.dnd}
                                color={this.props.data.color || this.props.color || CONSTS.CONTENT_COLOR}/>
            </div>
        )
    }

    static fillMargins(obj, marginLeft, marginRight) {
        if (!marginLeft)
            obj.marginLeft = 0
        if (!marginRight)
            obj.marginRight = 0
        return obj
    }

    createStyle() {
        return TreeNode.fillMargins({},
            this.props.marginLeft,
            this.props.marginRight)
    }
}

TreeNode.propTypes = {
    marginLeft: PropTypes.bool,
    marginRight: PropTypes.bool,
    color: PropTypes.string,
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string,
        color: PropTypes.string,
    }),
    dnd: PropTypes.shape({
        dragging: PropTypes.bool,
        dragging_id: PropTypes.number,
    }),
    renderUpper: PropTypes.bool,
}

TreeNode.defautProps = {
    renderUpper: false,
}

export default TreeNode