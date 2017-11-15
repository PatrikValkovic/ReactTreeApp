/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'
import React, {Component} from 'react'
import actions from '../Flux/formActions'
import OptionalColorPicker from './OptionalColorPicker'
import PropTypes from 'prop-types'

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
                                      className={'form-control'}
                                      onChange={this.props.handlers.contentChanged}
                                      value={this.props.content}/>
                        </div>
                        <OptionalColorPicker useDefault={this.props.useParentColor}
                                             defaultText={'Use parent\'s color'}
                                             color={this.props.color}
                                             colorChanged={this.props.handlers.colorChanged}
                                             defaultChanged={this.props.handlers.defaultChanged}
                                             colorClicked={this.props.handlers.colorClicked}/>
                        <div className={'form-group form-inline button-container'}>
                            <button className={'form-control'}
                                    onClick={this.props.handlers.updated}>
                                {this.props.buttonLabel}
                            </button>
                            <button className={'form-control btn btn-danger'}
                                    onClick={this.props.handlers.updated}>
                                {this.props.deleteLabel}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

InputForm.propTypes = {
    useParentColor: PropTypes.bool.isRequired,
    color: PropTypes.string,
    content: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired,
    deleteLabel: PropTypes.string.isRequired,
    handlers: PropTypes.shape({
        contentChanged: PropTypes.func.isRequired,
        defaultChanged: PropTypes.func.isRequired,
        colorChanged: PropTypes.func.isRequired,
        updated: PropTypes.func.isRequired,
        colorClicked: PropTypes.func,
    }),
}

InputForm.defaultProps = {
    handlers: {
        colorClicked: () => {
        },
    },
}