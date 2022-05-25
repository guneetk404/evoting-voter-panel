import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import './Dashboard.css'
import { bindActionCreators } from 'redux';
import { votingactionCreators } from '../state';

const Dashboard = () => {
  const user = useSelector(state => state.auth.auth.user);
  const dispatch = useDispatch();
  const { resetState } = bindActionCreators(votingactionCreators, dispatch);
  useEffect(() => {
    resetState();
    // eslint-disable-next-line
  }, [])
  
  return <>
    <Navbar />
    <div className='container mt-3'>
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
            <input type="number" className="form-control" id="exampleInputEmail1" value={user.Mobile} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Aadhaar</label>
            <input type="number" className="form-control" id="exampleInputEmail1" value={user.Aadhaar} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" value={user.Email} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={user.Name} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Father Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={user.FatherName} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Gender</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={user.Gender} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
            <textarea className="form-control" id="exampleInputEmail1" value={user.Address} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">City</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={user.City} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">State</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={user.State} disabled/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Pin Code</label>
            <input type="text" className="form-control" id="exampleInputEmail1" value={user.Pincode} disabled/>
          </div>
          <div className="mb-3 form-check">
            <label className="form-check-label" htmlFor="exampleCheck1">Please Contact Your BLO to update information</label>
          </div>
        </form>
      </div>
    </div>
  </>
}

export default Dashboard