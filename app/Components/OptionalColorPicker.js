/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'

import React, {Component} from 'react'

export default class OptionalColorPicker extends Component {

    render() {
        return (
            <div className={'form-group optional-color-picker'}>
                <label>
                    {this.props.label || 'Color'}:
                </label>
                <div className={'checkbox-container'}>
                    <span>
                        <input type="checkbox" checked={this.props.useDefaultValue || true}/>
                        {this.props.defaultValueText || 'Use default value'}
                    </span>
                </div>
                <input type="color" name="color"
                       className={'form-control'}/>
            </div>
        )
    }
}