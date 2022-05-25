import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { votingactionCreators } from '../state';

const Contests = (props) => {
    const { onSelectionElection } = props;
    const elections = [];
    const getelections = useSelector(state => state.vote.elections);
    const dispatch = useDispatch();
    const { electionsLoadAction } = bindActionCreators(votingactionCreators, dispatch);
    if (getelections.length > 0) {
        for (let election of getelections) {
            elections.push(<Link to="#" key={election.id} onClick={() => onSelectionElection(election)} className="list-group-item list-group-item-action checkactive">Election: {election.electiontype} <span className='float-end'>Election No: {election.contestno}</span></Link>)
        }
    }
    useEffect(() => {
        electionsLoadAction();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <div className='container mt-3'>
                <h2 className='text-center mt-1'>Live Elections list</h2>
                <div className="list-group mt-4">
                    {elections.length>0 ? elections : <div className='text-center'>No Elections live</div>}
                </div>
            </div>
        </>
    )
}

export default Contests