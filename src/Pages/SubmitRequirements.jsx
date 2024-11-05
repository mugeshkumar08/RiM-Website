import React from 'react'
import '../Pages/SubmitRequirements.css'

const SubmitRequirements = () => {
  return (
    <div className="submitContainer mt-5">
    <h4 className=" sideHeading mb-4">Tell us what you need, and we'll help you get quotes</h4>
    <form>
      <div className="row mb-3 align-items-center">
        <label className="col-sm-3 col-form-label">Product Name</label>
        <div className="col-sm-9">
          <input type="text" className="form-controls" value="AC Outdoor Stand" readOnly />
        </div>
      </div>
      <div className="row mb-3 align-items-center">
        <label className="col-sm-3 col-form-labels">Mobile Number</label>
        <div className="col-sm-9">
          <input type="tel" className="form-controls" placeholder="Enter Your Mobile Number" />
        </div>
      </div>
      <div className="row mb-3 align-items-center">
        <label className="col-sm-3 col-form-label">Name</label>
        <div className="col-sm-9">
          <input type="text" className="form-controls" placeholder="Enter Your Name" />
        </div>
      </div>
      <div className="row mb-3 align-items-center">
        <label className="col-sm-3 col-form-label">Quantity</label>
        <div className="col-sm-9">
          <div className="input-group">
            <input type="number" className="form-cont" placeholder="Enter Quantity" />
            <span className="input-group-text">Piece</span>
          </div>
        </div>
      </div>
      <button type="submit" className="btn submitReq">Submit Requirement</button>
    </form>
  </div>
  )
}

export default SubmitRequirements