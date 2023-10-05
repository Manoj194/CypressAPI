describe("Post a request",function(){

    it("1st way using json data",()=>{

        cy.request({

            method:"POST",
            url:"https://www.google.com",
            body:{
                title:"Create a resource",
                id:5,
                Gmail:`${Math.random().toString(5).substring(2)}@gmail.com`
            }
        }).then((Response)=>{
            // Status Validatation
            expect(Response.status).to.eql(201)
            //Attribute value validation
            expect(Response.body.title).to.eq("Create a resource")
            expect(Response.body.Gmail).to.eq(body.Gmail)
        })
    })

    it('Using fixture file, here we store data in external file',()=>{

        cy.fixture('cypress/fixtures/Post.json').then((Data)=>{
            const POSTDATA=Data
    
        cy.request({
            method:"POST",
            url:"https://www.google.com",
            body:POSTDATA
        }).then((Response)=>{
            // Status Validatation
            expect(Response.status).to.eql(201)
        })
    })
})
})