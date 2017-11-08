/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'
import React, {Component} from 'react'
import actions from '../Flux/formActions'

export default class InputForm extends Component {
    render() {
        return (
            <div className={'formBackground'}>
                <div className={'formContainer'}>
                    <input type="text"/>
                    <input type="color"/>
                    <input type="submit"/>
                </div>
            </div>
        )
    }
}