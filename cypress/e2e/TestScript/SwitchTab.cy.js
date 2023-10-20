///<reference types="cypress"/>
describe('Tabs',()=>{

    it('Switch tab',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="opentab"]').invoke('removeAttr','target').click().wait(500)
       // cy.contains('Courses').should('have.text','Courses')
        cy.go('back').wait(2000)
        cy.contains('Practice Page').should('have.text','Practice Page')

    })
})