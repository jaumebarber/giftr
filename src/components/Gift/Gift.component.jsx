import React from 'react'

const Gift = ({sendGift, giftTitle, handleChange}) => 
    <div className="card">
      <input className= "card-header" data-testid = "gift-name" onChange={handleChange} value={giftTitle} />
      <button className="btn btn-primary" data-testid= "add-gift" onClick={sendGift}>Add Gift</button>
    </div>

export default Gift