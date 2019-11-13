import React from 'react'

const Wishlist = ({clearValue, giftTitle, handleChange}) => 
    <div className="card">
      <input className= "card-header" data-testid = "gift-name" onChange={handleChange} value={giftTitle} />
      <button className="btn btn-primary" data-testid= "add-gift" onClick={clearValue}>Add Gift</button>
    </div>

export default Wishlist