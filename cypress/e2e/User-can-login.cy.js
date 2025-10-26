describe('User can login to system', () => {
  //positive
  it('User can login with valid email and password', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('div:nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get('div:nth-child(3) > .form-control').type('password')
    cy.get('.btn').click();
    cy.get('.d-sm-none.d-lg-inline-block').should('contain', 'Hi, SuperAdmin')
  })

  //negative
  it('User cannot login with invalid email', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('div:nth-child(2) > .form-control').type('superadmi@gmail.com')
    cy.get('div:nth-child(3) > .form-control').type('password')
    cy.get('.btn').click();
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  });

  it.only('User cannot login with invalid password', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('div:nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get('div:nth-child(3) > .form-control').type('password1')
    cy.get('.btn').click();
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  });

   it.only('User cannot login with blank username and password', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('div:nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get('div:nth-child(3) > .form-control').type('password1')
    cy.get('.btn').click();
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  });

})