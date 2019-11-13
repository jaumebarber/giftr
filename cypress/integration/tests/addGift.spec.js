context('Giftr Wishlist', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('can add a gift', () => {
    cy.get('.add-gift').click()
      .get('.wishlist')
      .should('have.descendants')
  })
})