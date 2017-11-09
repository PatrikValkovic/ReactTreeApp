/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React, {Component} from 'react'
import CONSTS from '../constants'

export default class TreeNode extends Component {

    render() {
        const contentStyle = {
            backgroundColor: this.props.data.color || this.props.color || CONSTS.CONTENT_COLOR,
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
                              color={this.props.data.color || this.props.color || CONSTS.CONTENT_COLOR}
                              key={child.id}
                              marginLeft={childIndex !== 0}
                              marginRight={childIndex !== childLength - 1}/>)
        })
    }
}
