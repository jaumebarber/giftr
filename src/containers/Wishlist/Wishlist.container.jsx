import React, { Component } from 'react'
import GiftContainer from '../Gift/Gift.container'

class WishlistContainer extends Component {

  state = {
    gifts: []
  }

  addGift = gift => {
    this.setState(
      {gifts: [...this.state.gifts, gift] 
      }
    )
  }
 
  render = () => <GiftContainer addGift = {this.addGift} />
}

export default WishlistContainer