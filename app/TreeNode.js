/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React, {Component} from 'react'
import CONSTS from './constants'

export default class TreeNode extends Component {

    createStyle() {
        const obj = {}
        if (!this.props.marginLeft)
            obj.marginLeft = 0
        if (!this.props.marginRight)
            obj.marginRight = 0
        return obj
    }

    createChilds() {
        const childLength = this.props.data.childs.length
        return this.props.data.childs.map((child, childIndex) => {
            child.color = child.color || this.props.data.color || CONSTS.CONTENT_COLOR
            return (<TreeNode data={child}
                              key={child.id}
                              marginLeft={childIndex !== 0}
                              marginRight={childIndex !== childLength - 1}/>)
        })
    }

    render() {
        const contentStyle = {
            backgroundColor: this.props.data.color || CONSTS.CONTENT_COLOR,
        }
        return (
            <div className={'child'} style={this.createStyle()}>
                <div className={'content'} style={contentStyle}>{this.props.data.content}</div>
                <div className={'childContainer'}>
                    {this.createChilds()}
                </div>
            </div>
        )
    }
}
