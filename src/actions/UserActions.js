import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from '../constants/User';

export function login(payload) {
    return {
        type: LOGIN_REQUEST,
    };
}

export function logout() {
    return {
        type: LOGOUT_SUCCESS,
    };
}
