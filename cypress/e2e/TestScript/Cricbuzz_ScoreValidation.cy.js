///<reference types="cypress"/>
 describe("cricbuzz",()=>{
    var run=[]
    var score
    it("ScoreValidation",()=>{

        cy.visit("https://www.cricbuzz.com/live-cricket-scorecard/81767/sl-vs-afg-quarter-final-3-asian-games-mens-t20i-2023")
        cy.get('h1[itemprop="name"]').should('have.text','Sri Lanka vs Afghanistan, Quarter Final 3 - Live Cricket Score, Commentary')
        
            cy.xpath('//a[text()=" Gulbadin (c) "]/ancestor::div[2]//child::div[3]').nextAll().get('[title="view Highlights of Noor Ali Zadran"]').wait(1000).click({force:true})
                   
        })

        it.only('fileYUpload',()=>{
             cy.visit('https://nxtgenaiacademy.com/multiplewindows/')
             cy.get('[id="button1"]').eq(2).invoke('removeAttr','target').click({force:true}).wait(4000)
            // cy.get('h2[class="elementor-heading-title elementor-size-default').should('have.text',"Welcome To India's Most Affordable Selenium Online Course")
             cy.go(-1)
        })
    })