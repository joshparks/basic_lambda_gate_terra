'use strict';

export async function (event, context) {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify(
            { message: 'The function executed successfully!' },
            null,
            2
        )
    }
}