///<reference types="cypress"/>
var Cal_Page = require("../../support/PageObject/TopSchool/calender")
describe('TopSchool', () => {
    var currentDate;
    var Data;
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit("https://jerry.staging.topschool.co.in/").wait(2000)
        cy.TopSchoolAdminLogin("jerry", "Test@12345")
        cy.get('div[class="side-nav-content "]').trigger('mouseover').wait(500)

        var d = new Date()
        currentDate = d.getDate()

        cy.fixture('TopSchool/Topschool').each((TopSchoolData) => {
            Data = TopSchoolData
        })
    })

    afterEach(() => {
        cy.Topschool_Logout()
    })
    it('Create_Holiday_Calender', () => {
        Cal_Page.sample()
        cy.get('input[placeholder="Enter Holiday Title"]').type('Dasara Holidy').wait(500)
        cy.contains('Start date').click({ force: true }).wait(500)
        cy.xpath('//div[@role="grid"]//button[text()="' + currentDate + '"]').click({ force: true })
        cy.contains('End date').click({ force: true }).wait(500)
        cy.xpath('//div[@role="grid"]//button[text()="' + currentDate + '"]').click({ force: true })
        cy.contains('Save Holiday').click({ force: true }).wait(1000)
        cy.get('div[class="md-custom-event-title holiday-title-text float-left"]').click({ force: true })
        cy.contains('Delete').click({ force: true })
        cy.contains('Delete Holiday').click({ force: true }).wait(1000)
        cy.get('div[class="side-nav-content "]').invoke('show').wait(500)

    })

    it("Upload_File_In csv", () => {
        cy.contains('Calendar').click({ force: true })
        cy.contains('Upload CSV').click()
        cy.get('div[class="calendar-popper-sub-list"] ').click({ force: true })
        cy.get('label[for="file-input"]').selectFile('cypress/fixtures/Holidays_20-10-2023 10_52_09.xlsx').wait(1000)
        cy.get('p[class="BulkUpload_filename__3Xkwa"]').should('have.text', 'Holidays_20-10-2023 10_52_09.xlsx').wait(700)
        cy.get('span[class="BulkUpload_deleteIcon__Aq6ef"]').click({ force: true }).wait(700)
        cy.get('svg[data-testid="CloseIcon"]').click({ force: true })
    })

    it("TimeTableManageMent", () => {

        cy.contains('School').click({ force: true })
        cy.contains('Create notice').should('be.visible').click({ force: true })
        cy.get('[data-testid="select-button"]').click({ force: true })
        cy.get('[role="listbox"] li:nth-child(2)').click()
        cy.get('button[aria-label="Choose date"]').click()
        cy.xpath('//div[@role="grid"]//button[text()="' + currentDate + '"]').click({ force: true })
        cy.get('input[placeholder="h:mm (a|p)m"]').eq(0).click({ force: true })
        for (let i = 0; i < 1; i++) {
            cy.get('body').type('{downArrow}')
            cy.wait(500)
        }
        cy.xpath("//span[text()='AM']/parent::button").click()
        //cy.contains('Notice type*').click({ force: true })
        // cy.get('svg[data-testid="closeIcon"]').click({force:true})
        cy.get('div[class="side-nav-content "]').trigger('mouseover')


    })
    it('Tc-001 Verify that School admin can add Teachers successfully when entered a valid data', () => {
        var random = Math.floor(Math.random() * 100)
        cy.contains('Users').click()
        cy.get('div[aria-label="Add teacher(s)"]').click()
        cy.Creat_New_Teacher("joseph", `joseph${random}@gmail.com`, `99999999${random}`, "basavanagudipalya", "561101").wait(3000)
        cy.get('div[class="side-nav-content "]').trigger('mouseover')
    })
    it("CreateTemplate", () => {

        cy.CreateNewTemplate(Data.PractcalMark, Data.ActvityName)

    })
    it("Feemanagement",()=>{
        cy.contains('Fee Management').scrollIntoView().click({force:true}).wait(700)
        cy.get('div[class*="css-1ofxt"] a:nth-of-type(4)').click({force:true})
        cy.get('[class="css-70qvj9"]>p').each((ele,index)=>{
               var Names= ele.text()
               if (Names.includes('Grade RRR')) {
                cy.get('img[alt="editIcon"]').eq(index).click({force:true})
                cy.xpath('//button[contains(.,"Fee Type (3)")]').click({force:true})
               }
        })
        cy.get('[data-testid="feeTypeAmount"]').each((ele1)=>{
            var amount=ele1.text()
            cy.log(amount)
        })
    })
})