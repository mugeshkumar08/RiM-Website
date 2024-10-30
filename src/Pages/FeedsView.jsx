import React from 'react'
import '../Pages/FeedsView.css'
import compressor from '../Assets/compressor-img.png'
import Propic from'../Assets/profile-pic.png'

const FeedsView = () => {
  return (
    <>
         <div className='Mob-nav'>
            <div><i class="bi bi-list"></i></div>
            <div>Mobile Site Product</div>
            <div><img src= {Propic} alt="" /></div>
          </div>

     <div className='search'>
         <div class="searchInput" id='searchBox'>
              <input type="text" class="search-input" placeholder="Search" />
              <div class="search-icons">
                <i class="bi bi-x-lg"></i> 
                <div class="divider"></div>
                <i class="bi bi-mic-fill"></i>
                <i class="bi bi-search"></i>
              </div>
          </div>
          <div className='feed-btn'><button> <i class="bi bi-box-seam">  </i>Add Post</button></div>
     </div>

     <div className="product-card">
  <div className="product-card-container">
    <div className="row no-gutters align-items-center">
      {/* Image Section */}
      <div className="col-md-4 product-image-container">
        <img src={compressor} alt="Product" className="product-image" />
      </div>
      
      {/* Details Section */}
      <div className="col-md-8 product-details-container ">
        <div className="product-details row align-items-center justify-content-between mt-3">
          <div className="details-row">
            <span className="label">Product Name :</span>
            <span className="value">Emerson Refrigerator Compressor New</span>
          </div>
          <div className="details-row">
            <span className="label">Needed Quality :</span>
            <span className="value">2 Quality</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors :</span>
            <span className="value">Tools Mart</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors Location :</span>
            <span className="value">Chennai</span>
          </div>
        </div>
        
        {/* Close Date and Button Section */}
        <div className="row align-items-center justify-content-between mt-3">
          <div className="col">
            <p className="close-date">Close Date: 24-Sep-2024</p>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary take-btn">Take</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="product-card-container">
    <div className="row no-gutters align-items-center">
      {/* Image Section */}
      <div className="col-md-4 product-image-container">
        <img src={compressor} alt="Product" className="product-image" />
      </div>
      
      {/* Details Section */}
      <div className="col-md-8 product-details-container ">
        <div className="product-details row align-items-center justify-content-between mt-3">
          <div className="details-row">
            <span className="label">Product Name :</span>
            <span className="value">Emerson Refrigerator Compressor New</span>
          </div>
          <div className="details-row">
            <span className="label">Needed Quality :</span>
            <span className="value">2 Quality</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors :</span>
            <span className="value">Tools Mart</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors Location :</span>
            <span className="value">Chennai</span>
          </div>
        </div>
        
        {/* Close Date and Button Section */}
        <div className="row align-items-center justify-content-between mt-3">
          <div className="col">
            <p className="close-date">Close Date: 24-Sep-2024</p>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary take-btn">Take</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="product-card-container">
    <div className="row no-gutters align-items-center">
      {/* Image Section */}
      <div className="col-md-4 product-image-container">
        <img src={compressor} alt="Product" className="product-image" />
      </div>
      
      {/* Details Section */}
      <div className="col-md-8 product-details-container ">
        <div className="product-details row align-items-center justify-content-between mt-3">
          <div className="details-row">
            <span className="label">Product Name :</span>
            <span className="value">Emerson Refrigerator Compressor New</span>
          </div>
          <div className="details-row">
            <span className="label">Needed Quality :</span>
            <span className="value">2 Quality</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors :</span>
            <span className="value">Tools Mart</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors Location :</span>
            <span className="value">Chennai</span>
          </div>
        </div>
        
        {/* Close Date and Button Section */}
        <div className="row align-items-center justify-content-between mt-3">
          <div className="col">
            <p className="close-date">Close Date: 24-Sep-2024</p>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary take-btn">Take</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="product-card-container">
    <div className="row no-gutters align-items-center">
      {/* Image Section */}
      <div className="col-md-4 product-image-container">
        <img src={compressor} alt="Product" className="product-image" />
      </div>
      
      {/* Details Section */}
      <div className="col-md-8 product-details-container ">
        <div className="product-details row align-items-center justify-content-between mt-3">
          <div className="details-row">
            <span className="label">Product Name :</span>
            <span className="value">Emerson Refrigerator Compressor New</span>
          </div>
          <div className="details-row">
            <span className="label">Needed Quality :</span>
            <span className="value">2 Quality</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors :</span>
            <span className="value">Tools Mart</span>
          </div>
          <div className="details-row">
            <span className="label">Distributors Location :</span>
            <span className="value">Chennai</span>
          </div>
        </div>
        
        {/* Close Date and Button Section */}
        <div className="row align-items-center justify-content-between mt-3">
          <div className="col">
            <p className="close-date">Close Date: 24-Sep-2024</p>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary take-btn">Take</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    

    </>
  )
}

export default FeedsView