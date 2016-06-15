import test = require('blue-tape');

import glue = require('glue');

test('glue', (t) => {
    const manifest = {
        server: {
        },
        connections: [
            {
                port: 8000,
                labels: ['web']
            },
            {
                port: 8001,
                labels: ['admin']
            }
        ],
        registrations: [
            {
                plugin: {
                    register: './pluginTest',
                    options: {
                    }
                }
            }
        ]
    };

    const options = {
        relativeTo: __dirname + '/plugins'
    };

    let a: any = { };

    glue.compose(manifest, options, (err:any) => {
        a.err = err;
        t.pass('glue start hapi well');
        t.end();
    });

});
