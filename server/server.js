/**
 * Created by minhluong on 4/16/17.
 */
import express from 'express'
import request from 'request'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import App from '../common/App'
import configureStore from '../common/store/configureStore'

const app = express();
app.get('/api', (req, res) => {
    res.send({
        message: 'I am a server route and can also be hot reloaded!'
    });
});
app.get('*', (req,res) => {
    let options = {
        url: 'http://api.football-data.org/v1/competitions',
        headers: {
            "X-Auth-Token": "f732e293c8b34f54b32b6191c4eb62d3"
        }
    };

    request(options, (error, response, body) => {
        const initialState = {
            isFetching: false,
            competitions: JSON.parse(body)
        };

        const store = configureStore(initialState);

        let html = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const finalState = store.getState();
        res.send(renderFullPage(html, finalState))
    });
});

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html class="no-js" lang="">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>M Football</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width,  initial-scale=1">
            <link rel="stylesheet" href="http://localhost:3001/styles.css">
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
            </script>
            <script src="http://localhost:3001/client.js"></script>
        </body>
    </html>`;
}
export default app