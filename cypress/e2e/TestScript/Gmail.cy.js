///<reference types="cypress"/>

describe("Shadow element",function(){

    it("GET",()=>{
        var d=new Date()
        var d1=d.getDate()
        var d2=d.getMonth()
        var d3=d.getFullYear()
        var tt=(`${d1}-${d2}-${d3}`).trim()
        cy.log(tt)
        cy.visit("https://mail.google.com/mail/u/0/#inbox")
        cy.url().should('include','mail.google')
        cy.get('input[id="identifierId"]').should('be.visible').type('manojkumar.bh@testyantra.com').wait(1000)
        cy.get('button[name="action"]').type('{enter}')
        cy.get('div[jsname="paFcre"]').should('have.text','Couldn’t sign you in')
        cy.get('div[class="iEhbme"]').then((ele)=>{
            var text=ele.text()
            expect(text).to.equal('This browser or app may not be secure. Learn moreTry using a different browser. If you’re already using a supported browser, you can try again to sign in.')
        })        
    })
})
//