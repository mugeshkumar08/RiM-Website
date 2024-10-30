import React from 'react'
import '../Pages/SubmitRequirement.css'


const SubmitRequirement = () => {
  return (
    <div className="container my-3">
    <div className="p-3">
      <h4 className="mb-5 h4r" >Tell us what you need, and we'll help you get quotes</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <div className="input-group">
            <input type="text" className="form-control" id="productName" placeholder="AC Outdoor Stand" />
            <button className="btn addBtn" type="button">+</button>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <div className="input-group">
              <input type="number" className="form-control" id="quantity" placeholder="" />
              <span className="input-group-text">Piece</span>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="distributorName" className="form-label">Distributors Name</label>
          <input type="text" className="form-control" id="distributorName" placeholder="Enter Your Name" />
        </div>

        <div className="mb-3">
          <label htmlFor="distributorLocation" className="form-label">Distributors Location</label>
          <input type="text" className="form-control" id="distributorLocation" placeholder="" />
        </div>

        <div className="row g-3 mb-3">
          <div className="col">
            <label htmlFor="distributorPhoneNumber" className="form-label">Distributors Phone Number</label>
            <input type="text" className="form-control" id="distributorPhoneNumber" placeholder="" />
          </div>
        </div>

        <div className="text-end">
          <button type="submit" className="btn btnSubmit">
            Submit Requirement
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SubmitRequirement