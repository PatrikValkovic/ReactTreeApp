/**
 * Created by Patrik Valkovic
 * 11/14/17.
 */

'use strict'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Zip from 'zip-array'
import flatten from 'array-flatten'
import TreeNode from './TreeNode'
import DropNode from './DropNode'


class ChildContainer extends Component {

    createChilds(childs, createDropNodes) {
        childs = childs || []
        const childLength = childs.length
        //create childs
        let childNodes = childs.map((child, childIndex) => {
            return (<TreeNode data={child}
                              dnd={this.props.dnd}
                              color={this.props.color || CONSTS.CONTENT_COLOR}
                              key={child.id}
                              marginLeft={childIndex !== 0 || this.props.dnd.dragging}
                              marginRight={childIndex !== childLength - 1 || this.props.dnd.dragging}/>)
        })
        //create drop nodes
        if (createDropNodes) {
            const fillNodes = childs.map((el, index) => {
                return <DropNode key={DropNode.getId()}
                                 marginLeft={index !== 0}
                                 index={index}
                                 parent_id={this.props.parent_id}/>
            })
            childNodes = Zip.zip(fillNodes, childNodes)
            childNodes = flatten(childNodes)
            childNodes.push(<DropNode key={DropNode.getId()}
                                      marginRight={true}
                                      index={childs.length}
                                      parent_id={this.props.parent_id}/>)
        }
        return childNodes
    }

    render() {
        return (
            <div className={'childContainer'}>
                {this.createChilds(this.props.childs, this.props.dnd.dragging)}
            </div>
        )
    }
}

ChildContainer.propTypes = {
    childs: PropTypes.array.isRequired,
    dnd: PropTypes.shape({
        dragging: PropTypes.bool,
        dragging_id: PropTypes.number,
    }).isRequired,
    color: PropTypes.string.isRequired,
    parent_id: PropTypes.number.isRequired,
}

export default ChildContainer