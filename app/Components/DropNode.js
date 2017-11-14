/**
 * Created by Patrik Valkovic
 * 11/14/17.
 */

'use strict'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TreeNode from './TreeNode'

let counter = 1000

export default class DropNode extends Component {

    render() {
        const style = TreeNode.fillMargins({}, this.props.marginLeft, this.props.marginRight)
        return <div className={'drop-node'} style={style}/>
    }

    static getId() {
        return ++counter
    }

}

DropNode.propTypes = {
    marginLeft: PropTypes.bool,
    marginRight: PropTypes.bool,
}

DropNode.defaultProps = {
    marginLeft: true,
    marginRight: true,
}