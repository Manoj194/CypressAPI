///<reference types="cypress"/>

describe("Shadow element",function(){
    beforeEach(()=>{
        cy.visit("https://selectorshub.com/xpath-practice-page/")

    })

    // 1 way to handle shadow element
    it("GET",()=>{
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        cy.get('#userName').scrollIntoView().wait(3000).shadow().find('[id="app2"]').shadow().find('[id="pizza"]').type("Order pizza")
        
    })

    //2nd way
    it('2nd way',()=>{
        //shadow element make it global in cyp.conf.js, so shadow() method not required in testscript
        //  "includeShadowDom":true
        cy.get('input[id="pizza"]').type("Order pizza")
    })
})
it('3rd way',()=>{
    // make it as local
    cy.get('input[id="pizza"]',{includeShadowDom:true}).type("Order pizza")

})
// hii manoj