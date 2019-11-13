import React from 'react';
import WishlistContainer from './Wishlist.container'
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react'

describe('A Wishlist', () => {
  
  let getByTestId
  afterEach(cleanup)

  describe('by clicking the Add Gift button', () => {
    beforeEach(()=>{
      ({ getByTestId } = render(<WishlistContainer/>))

      fireEvent.change(
        getByTestId('gift-name'),
        {
         target: {
           value: 'New gift'
         }
        }
      )

      fireEvent.click(getByTestId('add-gift'))
    })

  
  it('should clear the text field', () => {
    
    expect(getByTestId('gift-name').value).toEqual('')
  })
  })
})