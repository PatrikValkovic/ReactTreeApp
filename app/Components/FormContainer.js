/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'
import React, {Component} from 'react'
import formStore from '../Flux/formStore'
import NodeAdder from './NodeAdder'
import {Container} from 'flux/utils'

class FormContainer extends Component {
    static getStores(){
        return [formStore]
    }
    static calculateState(){
        return formStore.getState()
    }
    render(){
        return <NodeAdder />
    }
}

export default Container.create(FormContainer)
