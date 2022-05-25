import axios from "./AxiosInstance";


export function contestantload(election){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/voting/getcontestant/`,election)
}

export function electionload(){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/voting/getelections/`)
}

export function electionresultslist(){
    return axios.get(`${process.env.REACT_APP_HOST_URL_LINK}/voting/getelectionresultlist/`)
}

export function electionresults(election){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/voting/getelectionresultlist/`,election)
}


export function castvote(data){
    return axios.post(`${process.env.REACT_APP_HOST_URL_LINK}/voting/castvote/`, data)
}