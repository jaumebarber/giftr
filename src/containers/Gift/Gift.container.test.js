import React from 'react';
import GiftContainer from './Gift.container'
import {
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react'

describe('A Gift', () => {
  
  let getByTestId
  afterEach(cleanup)

  describe('by clicking the Add Gift button', () => {
    beforeEach(()=>{
      ({ getByTestId } = render(<GiftContainer/>))

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

  it('should know how to add a gift', () => {

    expect()
  })
  
  it('should clear the text field after adding a gift', () => {
    
    expect(getByTestId('gift-name').value).toEqual('')
  })
  })
})