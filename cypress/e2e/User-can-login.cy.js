describe('User can login to system', () => {
  //positive
  it('User can login with valid email and password', () => {
    cy.visit('/login')
    cy.get('[data-id="email"]').type('user@gmail.com')
    cy.get('[data-id="password"]').type('password')
    cy.get('[data-id="submit"]').click()
    cy.url().should('include', '/dashboard')
    cy.get('.d-sm-none.d-lg-inline-block').should('contain', 'Hi, user')
  })

  it('Superadmin can login with valid email and password', () => {
    cy.visit('/login')
    cy.get('[data-id="email"]').type('superadmin@gmail.com')
    cy.get('[data-id="password"]').type('password')
    cy.get('[data-id="submit"]').click()
    cy.url().should('include', '/dashboard')
    cy.get('.d-sm-none.d-lg-inline-block').should('contain', 'Hi, SuperAdmin')
  })

  //negative
  it('User cannot login with invalid email and password', () => {
    cy.visit('/login')
    cy.get('[data-id="email"]').type('superadmi@gmail.com')
    cy.get('[data-id="password"]').type('password1')
    cy.get('[data-id="submit"]').click()
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  });
  
  it('User cannot login with invalid email', () => {
    cy.visit('/login')
    cy.get('[data-id="email"]').type('superadmi@gmail.com')
    cy.get('[data-id="password"]').type('password')
    cy.get('[data-id="submit"]').click()
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  });

  it('User cannot login with invalid password', () => {
    cy.visit('/login')
    cy.get('[data-id="email"]').type('superadmin@gmail.com')
    cy.get('[data-id="password"]').type('password1')
    cy.get('[data-id="submit"]').click()
    cy.get('.invalid-feedback').should('have.text', 'These credentials do not match our records.')
  });

   it('User cannot login with blank email and password', () => {
    cy.visit('/login')
    cy.get('[data-id="submit"]').click();
    cy.get('.invalid-feedback').eq(0).should('have.text', 'The email field is required.')
    cy.get('.invalid-feedback').eq(1).should('have.text', 'The password field is required.')
  });

  it('User cannot login with blank email', () => {
     cy.visit('/login')
     cy.get('[data-id="password"]').type('password')
     cy.get('[data-id="submit"]').click()
     cy.get('.invalid-feedback').eq(0).should('have.text', 'The email field is required.')
  });
  
  it('User cannot login with blank password', () => {
     cy.visit('/login')
     cy.get('[data-id="email"]').type('superadmin@gmail.com')
     cy.get('[data-id="submit"]').click()
     cy.get('.invalid-feedback').eq(0).should('have.text', 'The password field is required.')
  });
  
})