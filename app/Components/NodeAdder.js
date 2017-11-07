/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React, {Component} from 'react'
import formActions from '../Flux/formActions'

export default class NodeAdder extends Component {
    render() {
        return (
            <a href="#" className={'addLink'}
               onClick={formActions.showNewForm}>
                &#10133;
            </a>
        )
    }
}