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
      <spam>
      <i
  style={{ color }}
  className={
    value >= 2 ? 'fas fa-star' // solid star
      : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star' // half star or empty star
  }
></i>
      </spam>
      
      <spam>
      <i
  style={{ color }}
  className={
    value >= 3 ? 'fas fa-star' // solid star
      : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star' // half star or empty star
  }
></i>
      </spam>
      <spam>
      <i
  style={{ color }}
  className={
    value >= 4 ? 'fas fa-star' // solid star
      : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star' // half star or empty star
  }
></i>
      </spam>
    </div>
  )
}

export default Rating
