/**
 * Created by Patrik Valkovic
 * 17.11.2017.
 */

'use strict'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SyncCircle from './SyncCircle'

export default class SyncPanel extends Component {
    render() {
        return !this.props.show ? null : (
            <div className={'sync-panel'}>
                <div className={'sync-panel__inner'}>
                    <SyncCircle/>
                    <h1>Loading</h1>
                </div>
            </div>
        )
    }
}

SyncPanel.propTypes = {
    show: PropTypes.bool.isRequired,
}