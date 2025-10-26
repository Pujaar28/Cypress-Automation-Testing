describe('User can login to system', () => {
  //positive
  it('User can login with valid email and password', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('div:nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get('div:nth-child(3) > .form-control').type('password')
    cy.get('.btn').click()
    cy.get('.d-sm-none.d-lg-inline-block').should('contain', 'Hi, SuperAdmin')
  })

  //negative
  it('User cannot login with invalid email', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('div:nth-child(2) > .form-control').type('superadmi@gmail.com')
    cy.get('div:nth-child(3) > .form-control').type('password')
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  });

  it('User cannot login with invalid password', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('div:nth-child(2) > .form-control').type('superadmin@gmail.com')
    cy.get('div:nth-child(3) > .form-control').type('password1')
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  });

   it('User cannot login with blank email and password', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('.btn').click();
    cy.get('.invalid-feedback').eq(0).should('have.text', 'The email field is required.')
    cy.get('.invalid-feedback').eq(1).should('have.text', 'The password field is required.')
  });

  it('User cannot login with blank email', () => {
     cy.visit('http://127.0.0.1:8000/')
     cy.get('div:nth-child(3) > .form-control').type('password')
     cy.get('.btn').click()
     cy.get('.invalid-feedback').eq(0).should('have.text', 'The email field is required.')
  });
  
  it('User cannot login with blank password', () => {
     cy.visit('http://127.0.0.1:8000/')
     cy.get('div:nth-child(2) > .form-control').type('superadmin@gmail.com')
     cy.get('.btn').click()
     cy.get('.invalid-feedback').eq(0).should('have.text', 'The password field is required.')
  });
  
})