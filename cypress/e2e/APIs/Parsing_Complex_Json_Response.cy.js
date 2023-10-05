
///<reference types="cypress"/>
describe("",()=>{

    it("Parsing_Complex_Json_Response",()=>{

         var TotalPrice=0
        cy.request({
            method:"GET",
            url:"https://fakestoreapi.com/products",
            qs:{limit:5}// for example i have 10 data but i want 5 data in such case limit method it will return specified data
        }).then((response)=>{
             
            expect(response.status).to.equal(200)

            response.body.forEach(element => {
                TotalPrice=TotalPrice+element.price
            
            });
            cy.log(TotalPrice)
            expect(TotalPrice).to.equal(899.23)
        })
    })
})