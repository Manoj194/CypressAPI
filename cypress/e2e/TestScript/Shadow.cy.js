///<reference types="cypress"/>

describe("Shadow element",function(){

    it("GET",()=>{
        cy.visit("https://books-pwakit.appspot.com/")
        cy.get('book-app')

.shadow()

.find('app-header')

.find('.toolbar-bottom')

.find('book-input-decorator')

.find('#input')

.type('Math', { force: true })

.click()
        
    })
})
// hii manoj