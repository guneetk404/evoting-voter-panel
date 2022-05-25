import { castvote, contestantload, electionload, electionresults, electionresultslist } from "../../services/VotingService";
import { buttonLoadingAction, loginFailedAction, signupSuccessAction } from "./authActions";
import { RESET_STATE, SET_CONTESTANT_DATA, SET_ELECTION_DATA, SET_ELECTION_RESULT, SET_ELECTION_RESULT_DATA } from "./votingTypes";

export function contestantLoadAction(election) {
    return (dispatch) => {
        contestantload(election).then(response => {
            dispatch(setcontestantdata(response.data));
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

export function castVoteAction(data) {
    return (dispatch) => {
        castvote(data).then(response => {
            dispatch(signupSuccessAction(response.data.success));
            dispatch(resetState());
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

export function electionsLoadAction(){
    return (dispatch) => {
        electionload().then(response => {
            dispatch(setelectiondata(response.data));
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

export function electionresultsLoadAction(){
    return (dispatch) => {
        electionresultslist().then(response => {
            dispatch(setelectionresult(response.data));
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

export function electionresultsAction(election){
    return (dispatch) => {
        electionresults(election).then(response => {
            dispatch(setelectionresultdata(response.data));
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


export function setcontestantdata(contestant) {
    return {
        type: SET_CONTESTANT_DATA,
        payload: contestant
    }
}

export function setelectiondata(elections) {
    return {
        type: SET_ELECTION_DATA,
        payload: elections
    }
}
export function setelectionresult(elections) {
    return {
        type: SET_ELECTION_RESULT,
        payload: elections
    }
}

export function setelectionresultdata(votes) {
    return {
        type: SET_ELECTION_RESULT_DATA,
        payload: votes
    }
}


export function resetState() {
    return {
        type: RESET_STATE
    }
}