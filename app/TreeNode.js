/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'
import React,{Component} from 'react'

export default class TreeNode extends Component {
    render(){
        const childs = this.props.data.childs.map((child) => {
            return <TreeNode data={child} key={child.id}/>
        })
        return (
            <div>
                <p>{this.props.data.content}</p>
                <div>
                    {childs}
                </div>
            </div>
        )
    }
}
