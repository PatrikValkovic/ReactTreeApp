/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class OptionalColorPicker extends Component {
    render() {
        const useDefault = this.props.useDefault
        return (
            <div className={'form-group optional-color-picker'}>
                <label>
                    {this.props.label || 'Color'}:
                </label>
                <div className={'checkbox-container'}>
                    <span>
                        <input type="checkbox" checked={useDefault} onChange={this.props.defaultChanged}/>
                        {this.props.defaultText}
                    </span>
                </div>
                <div className={'color-picker-container'}>
                    <input type="color" name="color"
                           className={'form-control'}
                           onChange={this.props.colorChanged}
                           disabled={useDefault}
                           value={this.props.color}/>
                    <div onClick={this.props.colorClicked} className={'picker-overlay'} style={{display: this.props.useDefault ? 'block' : 'none'}}/>
                </div>
            </div>
        )
    }
}

OptionalColorPicker.propTypes = {
    useDefault: PropTypes.bool.isRequired,
    defaultText: PropTypes.string,
    defaultChanged: PropTypes.func.isRequired,
    colorChanged: PropTypes.func.isRequired,
    colorClicked: PropTypes.func,
    color: PropTypes.string,
}

OptionalColorPicker.defaultProps = {
    defaultText: 'Use default value',
    color: '',
    colorClicked: () => {},
}