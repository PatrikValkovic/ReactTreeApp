/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CONSTS from '../constants'
import formActions from '../Flux/formActions'

export default class TreeNode extends Component {

    render() {
        const contentStyle = {
            backgroundColor: this.props.data.color || this.props.color || CONSTS.CONTENT_COLOR,
            opacity: this.props.data.id === this.props.dnd.dragging_id ? 0.4 : 1,
        }
        return (
            <div className={'child'} style={this.createStyle()}>
                <div className={'content'}
                     style={contentStyle}
                     onDoubleClick={() => formActions.showForm(this.props.data.id,
                         this.props.data.content,
                         !Boolean(this.props.data.color),
                         this.props.data.color)}>
                    {this.props.data.content}
                </div>
                <div className={'childContainer'}>
                    {this.createChilds()}
                </div>
            </div>
        )
    }

    createStyle() {
        const obj = {}
        if (!this.props.marginLeft)
            obj.marginLeft = 0
        if (!this.props.marginRight)
            obj.marginRight = 0
        return obj
    }

    createChilds() {
        const childs = this.props.data.childs || []
        const childLength = childs.length
        return childs.map((child, childIndex) => {
            return (<TreeNode data={child}
                              dnd={this.props.dnd}
                              color={this.props.data.color || this.props.color || CONSTS.CONTENT_COLOR}
                              key={child.id}
                              marginLeft={childIndex !== 0}
                              marginRight={childIndex !== childLength - 1}/>)
        })
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