import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authactionCreators, votingactionCreators } from '../state';
import Contestant from './Contestant';
import Contests from './Contests'
import Navbar from './Navbar'

const Elections = () => {
  const contestantsdata = [];
  const contestants = useSelector(state => state.vote.contestants);
  const dispatch = useDispatch();
  const { contestantLoadAction,castVoteAction } = bindActionCreators(votingactionCreators, dispatch);
  const { buttonLoadingAction } = bindActionCreators(authactionCreators, dispatch);
  const onSelectionElection = (election) => {
    const data = {
      contestid: election.id,
    }
    contestantLoadAction(data);
  }
  const onCastVote = (contestant) => {
    castVoteAction(contestant);
    buttonLoadingAction(true);
  }
  const [election] = useState(<Contests onSelectionElection={onSelectionElection} />)
  if (contestants.length > 0) {
    for (let contestant of contestants) {
      contestantsdata.push(<Contestant contestant={contestant} onCastVote={onCastVote} key={contestant.id} />)
    }
  }
  return (
    <>
      <Navbar />
      {contestantsdata.length > 0 ? <div className='container mt-2'>{contestantsdata}</div> : election}
    </>
  )
}

export default Elections