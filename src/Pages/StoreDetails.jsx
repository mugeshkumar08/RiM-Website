import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '../Pages/StoreDetails.css'
import storeImg from '../Assets/store-img.png'
import rating from '../Assets/rating.png'

const StoreDetails = () => {
  return (
    <>
            <div class="search-container">
              <input type="text" class="search-input" placeholder="Search" />
              <div class="search-icons">
                <i class="bi bi-x-lg"></i> 
                <div class="divider"></div>
                <i class="bi bi-mic-fill"></i>
                <i class="bi bi-search"></i>
              </div>
           </div>

           <div className='nav-links'>
              <button> <i class="bi bi-box-seam"></i>  Forum</button>
                <div className='nav-container'>
                  <ul>
                    <li> <input className='loc-search' type="text" placeholder='Enter your Location here' /></li>
                    <li><a href=""> <i class="bi bi-crosshair" style={{width: '24px', height: '24px'}}></i> Near Me</a></li>
                    <li><a href="">Coimbatore</a></li>
                    <li><a href="">Chennai</a></li>
                    <li><a href="">Kerala</a></li>
                    <li><a href="">Goa</a></li>
                    <li><a href="">Bangalore</a></li>
                    <li><a href="">Pune</a></li>
                  </ul>
                </div>
           </div>
        <div className='card-section'>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>    
       </div>

     <div className='card-section'>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>    
     </div>

     <div className='card-section'>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>    
     </div>

     <div className='card-section'>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>    
     </div>

     <div className='card-section'>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>
            <div className='card'>
                <img src={storeImg} alt="" />
                <p className='p1' style={{fontSize: '22px', fontWeight: '700'}}>Smart Accessories</p>
                <p className='p2' style={{fontSize: '18px', fontWeight: '600'}}>AC Spare Part Wholesalers </p>
                <p className='p3' style={{fontSize: '18px', fontWeight: '600'}}>Gandhipuram Coimbatore</p>
                <img className='rating' src={rating} alt="img" style={{width: '122px', height: '40px'}} />
                <p className='p4'><i class="bi bi-telephone-fill" style={{color: 'blue', fontSize: '20px'}}> View Mobile Number</i></p>
                <button className='btn'>Contact Supplier</button>
            </div>    
     </div>
    </>
  )
}

export default StoreDetails