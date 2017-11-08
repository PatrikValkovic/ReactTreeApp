/**
 * Created by Patrik Valkovic
 * 11/8/17.
 */

'use strict'
import React, {Component} from 'react'

export default class InputForm extends Component{
    render(){
        return (
            <div>
                <input type="text" />
                <input type="color" />
                <input type="submit" />
            </div>
        )
    }
}