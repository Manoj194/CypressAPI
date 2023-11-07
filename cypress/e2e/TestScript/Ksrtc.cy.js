///<reference types="cypress"/>

describe("",()=>{
    it("",()=>{
        cy.viewport(1920, 1080)
        cy.visit("https://www.ksrtc.in/oprs-web/")
        cy.get('[name="fromPlaceName"]').click().type("bangalo").wait(500)
        cy.xpath('(//ul[@tabindex="0"])[1]//li').contains("BANGALORE").click({force:true})
        cy.get('input[name="toPlaceName"]').click().type("go").wait(500)
        cy.xpath('(//ul[@tabindex="0"])[2]//li').contains('GOA').click()
        cy.get('[name="txtJourneyDate"]').click()
        cy.get('[title="Next"]').click()
        cy.xpath('//table[@class="ui-datepicker-calendar"]//tr/td/a[text()="3"]').click()
        cy.contains('Search for Bus').click({force:true})
        cy.get('[tickrate="1432"]').eq(0).then((ele)=>{
           var amo=ele.text()
           var rep=amo.replace(/\D/g, '')
           var numb=Number(rep)
          expect(numb).to.equal(1432)
        })
        let BusId="1844BNGPNJ"
        cy.xpath('//a[text()="'+BusId+'"]//ancestor::div[@class="s-result-list"]//input[@name="SrvcSelectBtnForward"]').click({force:true})
        cy.get('[id="LayoutForward1"] div[id="seatlayout-Forward1"] li').eq(8).click()
        cy.contains('Customer Details').click()
        cy.get('[name="mobileNo"]').type('9535790978')
        cy.get('[name="email"]').type('manuvirat772@gmail.com')
        cy.get('input[name="passengerName"]').click().type("manoj").wait(4000)
        cy.get('select[name="genderCodeId"]').select('MALE')
        cy.get('input[placeholder="Age"]').click().type('23')
        cy.get('select[name="concessionIds"]').select('1466060086837').wait(5000)
        cy.get('[class="max"]',{subjectType: 'drag-n-drop'})

    })
    it('Ksrtc',()=>{
        var busname
        var arr=[]
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.viewport(1920, 1080)
        cy.visit('https://ksrtc.karnataka.gov.in/info-2/Casual+Contract+(Hire+a+Bus)/en')
        cy.xpath('(//table/tbody)[1]/tr/td[1]').then((ele)=>{
             busname=ele.text()
        
             cy.log(arr[3])
    })   
    })
    it("Abvhibus",()=>{
        cy.viewport(1920, 1080)
        cy.visit("https://www.abhibus.com/")
        cy.get('div[class="container form-control  "]').first().click({force:true})
        cy.get('div[class="container auto-complete-drop-down "]>ul>li').contains('Bangalore').click({force:true})
        cy.get('div[class="container form-control  "]').eq(1).click({force:true})
        cy.get('[class="container auto-complete-drop-down "]>ul>li').contains('Hyderabad').click({force:true})
        cy.get('[placeholder="Onward Journey Date"]').click({force:true})
        var d=new Date()
        var date=d.getDate()
        cy.get('//div[@class="container date "]/span[text()="'+date+'"]').click({force:true})
    })
    it.only("SpiceJET",()=>{
        var From="Bengaluru"
        cy.viewport(1920, 1080)
        cy.visit('https://www.naukri.com/mnjuser/profile')
        cy.xpath('//div[@data-testid="to-testID-origin"]//input[@autocapitalize="sentences"]').click().type("Bang")
        cy.xpath('//div[@class="css-1dbjc4n r-knv0ih r-1k1q3bj r-ql8eny r-1dqxon3"]//div[text()="'+From+'"]').click({force:true})
        cy.xpath('//div[@data-testid="to-testID-destination"]//input[@autocapitalize="sentences"]').click().type("mu")
        cy.xpath('//div[@class="css-1dbjc4n r-19yat4t r-1rt2jqs"]//div[text()="Mumbai"]').click({force:true})
    })
})
