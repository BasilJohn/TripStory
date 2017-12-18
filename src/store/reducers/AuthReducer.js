import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED, USERNAME_CHANGED, FULLNAME_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCESS,
    LOGIN_USER_FAIL,
    ON_IMAGE_PICKED,
    LOAD_USER_INFORMATION
} from '.././actions/types';

const INITIAL_STATE = {
    email: '',
    password: '', error: '', loading: false,
    username: '', fullname: '', profileImage: null
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case USERNAME_CHANGED:
            return { ...state, username: action.payload }
        case FULLNAME_CHANGED:
            return { ...state, fullname: action.payload }
        case LOGIN_USER:
            return { ...state, error: '', loading: true }
        case LOGIN_USER_SUCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload }
        case ON_IMAGE_PICKED:
            return { ...state, profileImage: action.payload }
        case LOAD_USER_INFORMATION:
            return { ...state, userInformation: action.payload }
        case LOGIN_USER_FAIL:
            return {
                ...state, ...INITIAL_STATE,
                user: action.payload,
                error: 'Authentication Failed',
                loading: false
            }
        default:
            return state;
    }
}
