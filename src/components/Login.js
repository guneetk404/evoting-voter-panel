import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authactionCreators } from '../state/index'
import './Login.css'
import { WebcamCapture } from './Webcamcapture';

const Login = () => {
    const [user, setUser] = useState({ Aadhaar: "620512341234",otp:'12345678' });
    const buttonloading = useSelector(state => state.auth.buttonloading);
    const otpsent = useSelector(state => state.auth.otpsent);
    const otp_verification = useSelector(state => state.auth.otp_verification);
    const dispatch = useDispatch();
    const { loginAction, buttonLoadingAction, otpAction, loginFailedAction, imageVerificationAction } = bindActionCreators(authactionCreators, dispatch);
    const [userimage, setImage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()
        buttonLoadingAction(true);
        loginAction(user);
    }
    // arrow function to handle on change event
    const onChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }
    const handleOtpSubmit = () => {
        buttonLoadingAction(true);
        otpAction(user);
    }
    const handleImageSubmit = () => {
        if (userimage === '') {
            loginFailedAction('Please capture your image');
            buttonLoadingAction(false);
        }
        else {
            const formData = {
                Aadhaar: user.Aadhaar,
                Photo: userimage
            }
            buttonLoadingAction(true);
            imageVerificationAction(formData);
        }
    }
    // login button loading feature
    let button = <button className="w-100 btn btn-lg btn-primary" type="submit">Login In</button>
    let otp = <></>
    let image = <></>
    let mobile = <div className="form-floating mb-2">
        <input type="number" value="620512341234" className="form-control" id="floatingInput" placeholder="Aadhaar" name='Aadhaar' onChange={onChange} />
        <label htmlFor="floatingInput">Aadhaar No</label>
    </div>
    if (otpsent) {
        otp = <div className="form-floating mb-2">
            <input type="number" value="12345678" className="form-control" id="floatingPassword" placeholder="Otp" name='otp' onChange={onChange} />
            <label htmlFor="floatingPassword">Otp</label>
        </div>
        mobile = <div className="form-floating mb-2">
            <input type="number" className="form-control" id="floatingInput" placeholder="Aadhaar" name='Aadhaar' value={user.Aadhaar} disabled />
            <label htmlFor="floatingInput">Aadhaar</label>
        </div>
        button = <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleOtpSubmit}>Login In</button>
    }

    if (otp_verification) {
        otp = <></>
        mobile = <></>
        image = <>
            <h3>Image Processing currently responding as true in demo mode please capture and continue</h3>
            <WebcamCapture image={userimage} setImage={setImage} />
        </>
        button = <button className="w-100 btn btn-lg btn-primary" type="button" onClick={handleImageSubmit}>Login In</button>
    }
    if (buttonloading) {
        button =
            <button className="w-100 btn btn-lg btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                &nbsp;&nbsp;Please Wait...
            </button>
    }
    return (
        <>
            <div className="text-center">
                <main className="form-signin">
                    <form onSubmit={handleSubmit}>
                        <img className="mb-4" src="/logo192.png" alt="" width="80" height="80" />
                        <h1 className="h3 mb-3 fw-normal">E-Voting System</h1>
                        <hr />
                        <h3 className="h3 mb-3 fw-normal">Login Below</h3>
                        {mobile}
                        {otp}
                        {image}
                        {button}
                        <p className="mt-5 mb-3 text-muted">E-Voting System 2021</p>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Login