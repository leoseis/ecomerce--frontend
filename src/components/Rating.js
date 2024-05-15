import React from 'react'

function Rating({value,text,color}) {
  return (
    <div className='rating'>
      <spam>
      <i
  style={{ color }}
  className={
    value >= 1 ? 'fas fa-star' // solid star
      : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star' // half star or empty star
  }
></i>
      </spam>
      
    </div>
  )
}

export default Rating
