import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from '../constants/User';

const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {};
        case LOGIN_SUCCESS:
            return {};
        case LOGIN_FAIL:
            return {};
        case LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
}