/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'
import React, {Component} from 'react'
import formStore from '../Flux/formStore'
import InputForm from './InputForm'
import NodeAdder from './NodeAdder'
import {Container} from 'flux/utils'

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
                              handlers={{
                                  updated: (e) => console.log(e),
                                  defaultChanged: (e) => console.log(e),
                                  colorChanged: (e) => console.log(e),
                                  contentChanged: (e) => console.log(e),
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
