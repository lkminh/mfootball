/**
 * Created by minhluong on 4/17/17.
 */
import { combineReducers } from 'redux'
import cachedFetch from '../utils/cachedFetch'
const REQUEST_COMPETITIONS = "REQUEST_COMPETITIONS";
export function requestCompetitions() {
    return {
        type: REQUEST_COMPETITIONS
    };
}

const RECEIVE_COMPETITIONS = "RECEIVE_COMPETITIONS";
export function receiveCompetitions(json) {
    return {
        type: RECEIVE_COMPETITIONS,
        competitions: json,
        receiveAt: Date.now()
    }
}

export function fetchCompetitions() {
    return function(dispatch) {
        dispatch(requestCompetitions());

        let apiKey = 'f732e293c8b34f54b32b6191c4eb62d3';
        let headers = new Headers({"X-Auth-Token": apiKey});
        let init = {
            method: "GET",
            headers: headers,
            dataType: 'json'
        };
        let url = 'http://api.football-data.org/v1/competitions';
        return cachedFetch(url, init)
            .then(res => res.json())
            .then(resJson => dispatch(receiveCompetitions(resJson)));
    };
}

const initialState = {
    isFetching: false,
    competitions: []
};
const competitionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_COMPETITIONS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_COMPETITIONS:
            return Object.assign({}, state, {
                isFetching: false,
                competitions: action.competitions
            });
        default:
            return state;
    }
};
export default competitionsReducer;
