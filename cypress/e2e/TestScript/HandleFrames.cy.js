///<reference types="cypress"/>

///<reference types="cypress-iframe" />


describe('Frames',()=>{

    it('handling single frame',()=>{
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.contains('Practice Page').should('have.text','Practice Page')
        cy.frameLoaded('iframe[id="courses-iframe"]')
        cy.iframe().find('[class="new-navbar-highlighter"]').eq(0).click()
        cy.go('back')
        
    })

})