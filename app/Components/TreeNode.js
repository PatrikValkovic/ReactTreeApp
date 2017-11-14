/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Zip from 'zip-array'
import flatten from 'array-flatten'
import CONSTS from '../constants'
import DropNode from './DropNode'
import NodeContent from './NodeContent'

class TreeNode extends Component {

    render() {
        return (
            <div className={'child'} style={this.createStyle()}>
                <NodeContent id={this.props.data.id}
                             content={this.props.data.content}
                             isDragging={this.props.dnd.dragging_id === this.props.data.id}
                             color={this.props.data.color || this.props.color}/>
                <div className={'childContainer'}>
                    {this.createChilds(this.props.dnd.dragging)}
                </div>
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

    createChilds(createDropNodes) {
        const childs = this.props.data.childs || []
        const childLength = childs.length
        let childNodes = childs.map((child, childIndex) => {
            return (<TreeNode data={child}
                              dnd={this.props.dnd}
                              color={this.props.data.color || this.props.color || CONSTS.CONTENT_COLOR}
                              key={child.id}
                              marginLeft={childIndex !== 0 || this.props.dnd.dragging}
                              marginRight={childIndex !== childLength - 1 || this.props.dnd.dragging}/>)
        })
        if (createDropNodes) {
            const {connectDropTarget} = this.props
            const fillNodes = childs.map((el, index) => {
                return connectDropTarget(<DropNode key={DropNode.getId()}
                                                   marginLeft={index !== 0}/>)
            })
            childNodes = Zip.zip(fillNodes, childNodes)
            childNodes = flatten(childNodes)
            childNodes.push(connectDropTarget(<DropNode key={DropNode.getId()}
                                                        marginRight={true}/>))
        }
        return childNodes
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
}

export default TreeNode