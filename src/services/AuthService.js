import axios from "axios";



export function login(user) {
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/accounts/voter1/`, user)
}


export function loginotp(user) {
    return axios.put(`${process.env.REACT_APP_HOST_URL_LINK}/accounts/voter1/`, user)
}

export function loginimg(user) {
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/accounts/voter2/`, user)
}
