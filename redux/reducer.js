import * as types from './types';
const initialState = {
    loginPage: {
        email: '',
        password: '',
    },
    signupPage: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: ''
    },
    isloggedIn: false,
    loading: false
}

export default function reducer(state = initialState, action) {
    const oldState = { ...state };
    if (action.type == types.UPDATE_FIRST_NAME) {
        oldState.signupPage.firstName = action.payload.firstName;
        return oldState;
    }
    if (action.type == types.UPDATE_LAST_NAME) {
        oldState.signupPage.lastName = action.payload.lastName;
        return oldState;
    }
    if (action.type == types.UPDATE_SIGNUP_EMAIL) {
        oldState.signupPage.email = action.payload.email;
        return oldState;
    }
    if (action.type == types.UPDATE_SIGNUP_PASSWORD) {
        oldState.signupPage.email = action.payload.email;
        return oldState;
    }

    return state;
}