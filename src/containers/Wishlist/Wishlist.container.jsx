import React, { Component } from 'react'
import Wishlist from '../../components/Wishlist/Wishlist.component'

class WishlistContainer extends Component {

  state = {
    giftTitle: ''
  }
  
  clearValue = () => {
    this.setState ({
      giftTitle: ''
    })
  }

  handleChange = event => this.setState({
    giftTitle: event.target.value
  })

  render = () => <Wishlist clearValue={this.clearValue} giftTitle={this.state.giftTitle} handleChange={this.handleChange} />
}

export default WishlistContainer