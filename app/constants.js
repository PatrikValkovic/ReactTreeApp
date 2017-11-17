/**
 * Created by Patrik Valkovic
 * 11/7/17.
 */

'use strict'

export default {
    CONTENT_COLOR: '#FFFFFF',
    ROOT_NODE: -1,
    ACTIONS: {
        FORM_NEW: 0,
        FORM_HIDE: 1,
        FORM_CONTENT_CHANGED: 2,
        FORM_DEFAULT_COLOR_CHANGED: 3,
        FORM_COLOR_CHANGED: 4,
        FORM_SUBMITTED: 5,
        NODES_CREATE_NEW: 6,
        FORM_EDIT: 7,
        NODE_EDIT: 8,
        DRAGGING_CHANGED: 9,
        NODE_MOVE: 10,
        FORM_CANCELED: 11,
        NODE_DELETE: 12,
        DATA_LOADED: 13,
    },
    DND: {
        ITEM_TYPE: 'node',
    },
    SERVER: {
        URL: 'http://localhost:3000',
        REQ_NAME: 'link',
        SEND_NAME: 'data'
    },
}