import { BUTTON_LOADING_ACTION, IMG_SUCCESS_ACTION, LOGIN_FAILED_ACTION, LOGIN_SUCCESS_ACTION, LOGOUT_ACTION, OTP_SUCCESS_ACTION, SIGNUP_FAILED_ACTION, SIGNUP_SUCCESS_ACTION } from "../actions/authTypes";


const initialState = {
    auth: {
        'token': null,
    },
    errorMessage: '',
    successMessage: '',
    isAuthenticated: false,
    otp_verification: false,
    buttonloading: false,
    otpsent: false,
}

export default function UserAuth(state = initialState, action) {
    if (action.type === OTP_SUCCESS_ACTION) {
        return {
            ...state,
            errorMessage: '',
            successMessage: 'Otp Sent Successfully',
            buttonloading: false,
            otpsent: true,
        }
    }
    if(action.type === IMG_SUCCESS_ACTION){
        return {
            ...state,
            otp_verification: true,
        }
    }
    if (action.type === LOGIN_SUCCESS_ACTION) {
        return {
            ...state,
            auth: action.payload,
            errorMessage: '',
            successMessage: 'Login Successful',
            buttonloading: false,
            otpsent: false,
            isAuthenticated: true,
        }
    }
    if (action.type === LOGIN_FAILED_ACTION || action.type === SIGNUP_FAILED_ACTION) {
        return {
            ...state,
            errorMessage: action.payload,
            successMessage: '',
            buttonloading: false,
        }
    }
    if (action.type === SIGNUP_SUCCESS_ACTION) {
        return {
            ...state,
            successMessage: action.payload,
            errorMessage: '',
            buttonloading: false,
        }
    }
    if (action.type === LOGOUT_ACTION) {
        return initialState
    }
    if (action.type === BUTTON_LOADING_ACTION) {
        return {
            ...state,
            buttonloading: action.payload,
            errorMessage: '',
            successMessage: '',
        }
    }
    return state;
}
