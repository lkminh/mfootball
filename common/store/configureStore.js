/**
 * Created by minhluong on 4/18/17.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import competitionsReducer from './competition.js'

export default function configureStore(initialState) {
    return createStore(
        competitionsReducer,
        initialState,
        compose(applyMiddleware(thunk))
    );
}