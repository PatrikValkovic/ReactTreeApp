/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'
import React, {Component} from 'react'
import actions from '../Flux/formActions'
import OptionalColorPicker from './OptionalColorPicker'

export default class InputForm extends Component {

    static disableClick(event) {
        return event.stopPropagation()
    }

    render() {
        return (
            <div className={'formBackground'} onClick={() => actions.hideForm()}>
                <div className={'formContainer'} onClick={InputForm.disableClick}>
                    <form className="update-form">
                        <div className={'form-group'}>
                            <label>
                                Content:
                            </label>
                            <textarea name="content"
                                      className={'form-control'}/>
                        </div>
                        <OptionalColorPicker/>
                        <input type="submit" value="Update"
                               className={'form-control'}/>
                    </form>
                </div>
            </div>
        )
    }
}