/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'
import React, {Component} from 'react'
import {Container} from 'flux/utils'
import formStore from '../Flux/formStore'
import formActions from '../Flux/formActions'
import InputForm from './InputForm'
import NodeAdder from './NodeAdder'

class FormContainer extends Component {
    static getStores() {
        return [formStore]
    }

    static calculateState(prevState) {
        return formStore.getState()
    }

    createForm() {
        if (this.state.showForm || false)
            return <InputForm useParentColor={this.state.useParentColor}
                              color={this.state.color || ''}
                              content={this.state.content}
                              buttonLabel={this.state.buttonLabel}
                              handlers={{
                                  updated: (e) => formActions.submitted(),
                                  defaultChanged: (e) => formActions.defaultChanged(e.target.checked),
                                  colorChanged: (e) => formActions.colorChanged(e.target.value),
                                  contentChanged: (e) => formActions.contentChanged(e.target.value),
                                  colorClicked: () => formActions.defaultChanged(false),
                              }}/>
    }

    render() {
        return (
            <div>
                <NodeAdder/>
                {this.createForm()}
            </div>
        )
    }
}

export default Container.create(FormContainer)
