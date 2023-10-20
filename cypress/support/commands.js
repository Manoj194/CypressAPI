// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress")


Cypress.Commands.add('MoveToElement', function (element) {
    cy.get(element).trigger('mouseover')
})


Cypress.Commands.add("TopSchoolAdminLogin", (Us_Name, Pwd) => {
    cy.get('div[class="home-btn-container"] h4').should('have.text', 'Welcome!')
    cy.contains('Log in as ' + "" + 'Admin').click({ force: true }).wait(1000)
    cy.get('input[name="userName"]').type(Us_Name)
    cy.get('input[name="password"]').type(Pwd)
    cy.get('input[name="rememberMe"]').click({ force: true })
    cy.contains('Log In').click().wait(1500)
    cy.get('div[data-testid="alertBox"]').should('have.text', 'Logged in successfully')

})

Cypress.Commands.add("Topschool_Logout", () => {
    cy.contains('My Profile').click({ force: true }).wait(1000)
    cy.contains('Logout').click({ force: true }).wait(4000)
    cy.get('body').each(($el) => {
        if ($el.find('a.link_404').length > 0) {
            cy.get('a.link_404').click().wait(2000)
        }
    })
})
