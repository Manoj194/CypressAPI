///<reference types="cypress"/>

describe('mouseHover',()=>{

    it("mouseHoverElement",()=>{

        cy.visit('https://www.amazon.in/')
        cy.MoveToElement('span[id="nav-link-accountList-nav-line-1"]')
    })
})