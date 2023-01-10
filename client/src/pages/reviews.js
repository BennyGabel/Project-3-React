import React, { Component }  from 'react';


// Create function
const Reviews = () => {


  return (
    <div className='react-container'>
        <form className='review-forms'>
          <div className='review-greene'>
            <label htmlFor='username'>Email</label>
            <input type='username' className='form-input' id='username' placeholder='user email' />
          </div>
          <div className='review-greene'>
            <label htmlFor='product'>Product</label>
            <input type='product' className='form-input' id='productsearch' placeholder='product' />
          </div>
          <div className='review-greene'>
            <label htmlFor='review'>Review</label>
            <textarea type='review' className='greene-text-box' id='review' placeholder='review' />
          </div>
          <button type='submit' class='main-button' id='submit-btn'>Submit</button>
        </form>  
    </div>
    
    )
}

// Export Function 
export default Reviews