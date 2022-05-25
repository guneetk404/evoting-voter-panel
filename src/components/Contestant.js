import React from 'react'
import { useSelector } from 'react-redux';

const Contestant = (props) => {
    const { contestant, onCastVote } = props;
    const buttonloading = useSelector(state => state.auth.buttonloading);
    let button = <button type='button' className="btn btn-primary" onClick={() => onCastVote(contestant)}>Cast Vote</button>
    if (buttonloading) {
        button =
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                &nbsp;&nbsp;Please Wait...
            </button>
    }
    return <>
        <div className="card m-1">
            <img src={`${process.env.REACT_APP_HOST_URL_LINK}${contestant.photo}`} className="rounded mx-auto d-block imagesize" alt="please wait loading" />
            <div className="card-body">
                <h5 className="card-title">Name: {contestant.name}</h5>
                <p className="card-text">Contestant No:{contestant.contestantid} </p>
                <p className="card-text">Party Name:{contestant.party} </p>
                {button}
            </div>
        </div>
    </>
}

export default Contestant