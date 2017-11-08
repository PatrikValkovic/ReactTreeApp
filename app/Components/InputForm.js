/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'
import React, {Component} from 'react'
import actions from '../Flux/formActions'

export default class InputForm extends Component {

    static disableClick(event) {
        return event.stopPropagation()
    }

    createDiv() {
        const content = 'Not set'
        return (
            <div className={'color-div'} style={{backgroundColor: null,}}>
                {content}
            </div>
        )
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
                        <div className={'form-group'}>
                            <div className={'color-label-container'}>
                                <label>
                                    Color:
                                </label>
                                {this.createDiv()}
                            </div>
                            <input type="color" name="color"
                                   className={'form-control'}/>
                        </div>
                        <input type="submit" value="Update"
                               className={'form-control'}/>
                    </form>
                </div>
            </div>
        )
    }
}