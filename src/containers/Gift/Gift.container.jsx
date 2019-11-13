import React, { Component } from 'react'
import Gift from '../../components/Gift/Gift.component'

class GiftContainer extends Component {

  state = {
    giftTitle: ''
  }
  
  sendGift = () => {
    const {addGift} = this.props
    addGift(this.state)

    this.setState ({
      giftTitle: ''
    })
  }

  handleChange = event => this.setState({
    giftTitle: event.target.value
  })



  render = () => <Gift handleChange= {this.handleChange} clearValue={this.clearValue} giftTitle={this.state.giftTitle} sendGift = {this.sendGift} />

}

export default GiftContainer