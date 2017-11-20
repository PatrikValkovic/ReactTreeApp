/**
 * Created by Patrik Valkovic
 * 11/15/17.
 */

'use strict'

let index = 0;

module.exports = {
    id: index++,
    content: 'App development',
    childs: [
        {
            id: index++,
            content: 'Requirements gathering and analyse',
            childs: [
                {
                    id: index++,
                    content: 'Communication with client',
                    childs: [
                        {
                            id: index++,
                            content: 'Initialization meeting',
                            childs: [],
                        },
                        {
                            id: index++,
                            content: 'Requirements gathering',
                            childs: [],
                        },
                        {
                            id: index++,
                            content: 'Formmulation of requirements',
                            childs: [],
                        },
                    ],
                },
                {
                    id: index++,
                    content: 'Analyse',
                    childs: [
                        {
                            id: index++,
                            content: 'market research',
                            childs: [
                                {
                                    id: index++,
                                    content: 'Potential users',
                                    childs: [],
                                },
                                {
                                    id: index++,
                                    content: 'Competetion',
                                    childs: [],
                                },
                            ],
                        },
                        {
                            id: index++,
                            content: 'Research of suitable technologies',
                            childs: [],
                        },
                    ],
                },
                {
                    id: index++,
                    content: 'Resource management',
                    childs: [
                        {
                            id: index++,
                            content: 'Project team assembly',
                            childs: [],
                        },
                        {
                            id: index++,
                            content: 'Schedule',
                            childs: [],
                        },
                        {
                            id: index++,
                            content: 'Financial plan',
                            childs: [],
                        },
                    ],
                },
            ],
        },
        {
            id: index++,
            content: 'Architecture',
            childs: [
                {
                    id: index++,
                    content: 'Choice of technologies',
                    childs: [],
                },
                {
                    id: index++,
                    content: 'Database',
                    childs: [],
                },
                {
                    id: index++,
                    content: 'App architecture',
                    childs: [],
                },
            ],
        },
        {
            id: index++,
            content: 'Development',
            childs: [
                {
                    id: index++,
                    content: 'Write yourself :)',
                    childs: [],
                },
            ],
        },
        {
            id: index++,
            content: 'Testing',
            childs: [
                {
                    id: index++,
                    content: 'Course',
                    childs: [
                        {
                            id: index++,
                            content: 'Unit testing',
                            childs: [],
                        },
                        {
                            id: index++,
                            content: 'UX testing',
                            childs: [],
                        },
                        {
                            id: index++,
                            content: 'User testing',
                            childs: [],
                        },
                    ],
                },
                {
                    id: index++,
                    content: 'Conclusions',
                    childs: [],
                },
            ],
        },
    ],
}
