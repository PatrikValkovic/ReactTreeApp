/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class OptionalColorPicker extends Component {
    constructor(props) {
        super(props)
        this.defaultChanged = this.defaultChanged.bind(this)
        this.colorChanged = this.colorChanged.bind(this)
    }

    defaultChanged() {
        const fn = this.props.defaultChanged || (() => {
            console.error('OptionalColorPicker.defaultChanged is not set')
        })
        fn()
    }

    colorChanged() {
        const fn = this.props.colorChanged || (() => {
            console.error('OptionalColorPicker.colorChanged is not set')
        })
        fn()
    }


    render() {
        const useDefault = this.props.useDefault || true
        return (
            <div className={'form-group optional-color-picker'}>
                <label>
                    {this.props.label || 'Color'}:
                </label>
                <div className={'checkbox-container'}>
                    <span>
                        <input type="checkbox" checked={useDefault} onChange={this.defaultChanged}/>
                        {this.props.defaultText || 'Use default value'}
                    </span>
                </div>
                <input type="color" name="color"
                       className={'form-control'}
                       onChange={this.colorChanged}
                       disabled={useDefault}/>
            </div>
        )
    }
}

OptionalColorPicker.propTypes = {
    useDefault: PropTypes.bool,
    defaultText: PropTypes.string,
    defaultChanged: PropTypes.func.isRequired,
    colorChanged: PropTypes.func.isRequired,
}