///<reference types="cypress"/>

describe("Get a response",function(){

    it("GET",()=>{

        var d = new Date()
        cy.log(d.getTime())
        cy.log(d.getFullYear())
        var queryString={page:2}
        cy.request({

            method:"GET",
            url:"https://reqres.in/api/users",
            qs:queryString
        }).then((Response)=>{
            expect(Response.status).to.eql(200)
        expect(Response.body.data).has.length(6)
        expect(Response.body.data[1]).have.property('id',8)
        expect(Response.body.page).to.eq(2)
        })
    })
    
})