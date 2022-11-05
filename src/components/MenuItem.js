import React from 'react'

const MenuItem = ({img,title,price,desc}) => {
  return (
    <article className='menu-item-container'>

      <div className="img-container">
        <img src={img} alt=":(" />
      </div>

      <div className="food_info-container">
        <header>
          <h3>{title}</h3>
          <span>{`$${price}`}</span>
        </header>
        <p className='desc'>{desc}</p>
      </div>
    </article>
  )
}

export default MenuItem;
