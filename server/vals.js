/**
 * Created by Patrik Valkovic
 * 11/15/17.
 */

'use strict'

module.exports = {
    id: 0,
    content: 'TopMost',
    childs: [
        {
            id: 1,
            content: 'Upper1',
            color: '#FF0000',
            childs: [
                {
                    id: 2,
                    content: 'Middle1',
                    color: '#ff651c',
                    childs: [],
                },
                {
                    id: 3,
                    content: 'Middle2',
                    color: '#ff2c47',
                    childs: [],
                },
            ],
        },
        {
            id: 4,
            content: 'Upper2',
            color: '#00FF00',
            childs: [
                {
                    id: 5,
                    content: 'Middle3',
                    childs: [],
                },
                {
                    id: 6,
                    content: 'Middle4',
                    color: '#14ff8f',
                    childs: [
                        {
                            id: 7,
                            content: 'Down1',
                            color: '#146d33',
                            childs: [],
                        },
                    ],
                },
                {
                    id: 8,
                    content: 'Middle5',
                    color: '#98ff1e',
                    childs: [
                        {
                            id: 9,
                            content: 'Down2',
                            color: '#b8ff27',
                            childs: [],
                        },
                        {
                            id: 10,
                            content: 'Down3',
                            color: '#dfff2e',
                            childs: [
                                {
                                    id: 11,
                                    content: 'TEST1',
                                    childs: [
                                        {
                                            id: 12,
                                            content: 'TEST1',
                                            childs: [
                                                {
                                                    id: 13,
                                                    content: 'TEST1',
                                                    childs: [
                                                        {
                                                            id: 14,
                                                            content: 'TEST1',
                                                            childs: [],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
}