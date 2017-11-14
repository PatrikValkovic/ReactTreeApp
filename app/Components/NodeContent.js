/**
 * Created by Patrik Valkovic
 * 11/14/17.
 */

'use strict'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CONSTS from '../constants'
import formActions from '../Flux/formActions'

export default class NodeContent extends Component {

    render(){
        const contentStyle = {
            backgroundColor: this.props.color || CONSTS.CONTENT_COLOR,
            opacity: this.props.isDragging ? 0.4 : 1,
        }

        return (<div className={'content'}
             style={contentStyle}
             onDoubleClick={() => formActions.showForm(this.props.id,
                 this.props.content,
                 !Boolean(this.props.color),
                 this.props.color)}>
            {this.props.content}
        </div>)
    }

}

NodeContent.propTypes = {
    color: PropTypes.string,
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    isDragging: PropTypes.bool.isRequired,
}