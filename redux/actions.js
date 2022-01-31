import * as types from './types';

export function updateFirstName(payload) {
    return {
        type: types.UPDATE_FIRST_NAME,
        payload
    }
}

export function updateLastName(paylaod) {
    return {
        type: types.UPDATE_LAST_NAME,
        paylaod
    }
}

export function updateSignupEmail(paylaod) {
    return {
        type: types.UPDATE_SIGNUP_EMAIL,
        paylaod
    }
}
export function updateSignupPassword(paylaod) {
    return {
        type: types.UPDATE_SIGNUP_PASSWORD,
        paylaod
    }
}
export function updateSignupConfirmPassword(paylaod) {
    return {
        type: types.UPDATE_CONFIRM_SIGNUP_PASSWORD,
        paylaod
    }
}