/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'
import React, {Component} from 'react'
import actions from '../Flux/formActions'

export default class InputForm extends Component {

    static disableClick(event){
        return event.stopPropagation()
    }

    render() {
        return (
            <div className={'formBackground'} onClick={()=>actions.hideForm()}>
                <div className={'formContainer'} onClick={InputForm.disableClick}>
                    <input type="text"/>
                    <input type="color"/>
                    <input type="submit"/>
                </div>
            </div>
        )
    }
}