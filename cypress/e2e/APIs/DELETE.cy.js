///<reference types="cypress"/>

describe("DELETE",function(){

    it("DELETE a Data",()=>{

          failonstatuscose=false
        cy.request({
            method:"DELETE",
            url:"https://fakestoreapi.com/products",
            qs:{limit:2}
        }).then((response)=>{
            expect(response.status).to.eq(204)
        })
    })
})
