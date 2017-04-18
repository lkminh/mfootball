/**
 * Created by minhluong on 4/16/17.
 */
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import App from '../common/App'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__
const store = configureStore(preloadedState);

const toRender = () => {
    return (
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>
    );
};

render(toRender(), document.getElementById('root'))
if (module.hot) {
    module.hot.accept('../common/App', () => {
        render(toRender(), document.getElementById('root'))
    })
}