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
    static getStores(){
        return [formStore]
    }
    static calculateState(prevState){
        return formStore.getState()
    }

    createForm(){
        if(this.state.showForm || false)
            return <InputForm />
    }

    render(){
        return (
            <div>
                <NodeAdder />
                {this.createForm()}
            </div>
        )
    }
}

export default Container.create(FormContainer)
