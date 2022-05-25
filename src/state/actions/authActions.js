import { LOGIN_SUCCESS_ACTION, LOGIN_FAILED_ACTION, LOGOUT_ACTION, BUTTON_LOADING_ACTION, SIGNUP_SUCCESS_ACTION, SIGNUP_FAILED_ACTION, OTP_SUCCESS_ACTION, IMG_SUCCESS_ACTION, } from "./authTypes";
import { login, loginimg, loginotp } from '../../services/AuthService';

export function loginAction(user) {
    return (dispatch) => {
        login(user).then(response => {
            dispatch(otpSuccessAction(response.data));
            dispatch(buttonLoadingAction(false));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function otpAction(user) {
    return (dispatch) => {
        loginotp(user).then(response => {
            dispatch(ImageSuccessAction());
            dispatch(buttonLoadingAction(false));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}

export function imageVerificationAction(user) {
    return (dispatch) => {
        loginimg(user).then(response => {
            dispatch(loginSuccessAction(response.data));
            dispatch(buttonLoadingAction(false));
        })
            .catch(error => {
                if (error.response === undefined) {
                    dispatch(loginFailedAction('Make Sure You Are Connected To Internet'));
                    dispatch(buttonLoadingAction(false));
                }
                else if (error.response.status === 500) {
                    dispatch(loginFailedAction('Something Went Wrong'));
                    dispatch(buttonLoadingAction(false));
                } else {
                    dispatch(loginFailedAction(error.response.data.error));
                    dispatch(buttonLoadingAction(false));
                }
            })
    }
}



export function otpSuccessAction(user) {
    return {
        type: OTP_SUCCESS_ACTION,
        payload: user
    }
}

export function loginSuccessAction(user) {
    return {
        type: LOGIN_SUCCESS_ACTION,
        payload: user
    }
}

export function loginFailedAction(error) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: error
    }
}

export function logoutAction(navigate) {
    // eslint-disable-next-line
    return {
        type: LOGOUT_ACTION,
    }
}

export function buttonLoadingAction(data) {
    return {
        type: BUTTON_LOADING_ACTION,
        payload: data
    }
}

export function signupSuccessAction(data) {
    return {
        type: SIGNUP_SUCCESS_ACTION,
        payload: data
    }
}

export function signupFailedAction(error) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: error
    }
}

export function ImageSuccessAction(){
    return {
        type: IMG_SUCCESS_ACTION,
    }
}