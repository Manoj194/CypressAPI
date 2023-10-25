///<reference types="cypress"/>

describe('TopSchool', () => {
    var currentDate;
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit("https://jerry.staging.topschool.co.in/").wait(2000)
        cy.TopSchoolAdminLogin("jerry", "Test@12345")
        cy.get('div[class="side-nav-content "]').trigger('mouseover').wait(500)
        var d = new Date()
        currentDate = d.getDate()
    })
    // afterEach(() => {
    //     cy.Topschool_Logout()
    // })

    it('Create_Holiday_Calender', () => {
        cy.contains('Calendar').click({ force: true })
        cy.get('div[class="calendarMeetingBtn"]').contains('Create New').click()
        cy.get('div[class="popover-arrow"]').eq(1).click({ force: true }).wait(500)
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
        cy.get('span[class="BulkUpload_deleteIcon__Aq6ef"]').click({ force: true })
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
    it.only("CreateTemplate", () => {
        function aa(){
        cy.viewport(1920, 1080)
        cy.contains('Reports').click().wait(400)
        cy.get('div[class="content-popover-reports"]').eq(0).find('div[class="popover-arrow"]', { timeout: 300 }).click({ force: true })
        cy.xpath('//p').first().should('contains.text', 'Student Gradebook')
        cy.xpath('//span[contains(.,"Create Template")]').click()
        cy.xpath('//div[@role="button"]').eq(0).click()
        cy.get('ul[role="listbox"]>li').contains('Grade 20').click()
        cy.xpath('//div[@role="button"]').eq(1).click()
        cy.get('ul[role="listbox"]>li').contains('A').click()
        cy.get('body').click()
        cy.xpath('//div[@role="button"]').eq(2).click()
        cy.get('ul[role="listbox"]>li').contains('1').click()
        cy.xpath('//div[@role="button"]').eq(3).click()
        cy.get('ul[role="listbox"]>li').contains('Grade').click()
        cy.xpath('//button[contains(.,"Continue")]').click().wait(700)
        cy.xpath('//button[contains(.,"+ Add Test Type")]').click()
        cy.get('div[aria-haspopup="listbox"]').eq(4).click()
        cy.get('ul[role="listbox"]>li').contains('1').click()
        cy.get('body').click()
        cy.get('div[aria-haspopup="listbox"]').eq(5).click()
        cy.get('ul[role="listbox"]>li').contains('Half Yearly').click()
        cy.get('div[aria-haspopup="listbox"]').eq(6).click()
        cy.get('ul[role="listbox"]>li').contains('100').click()
        cy.xpath('//button[contains(.,"Continue")]').click().wait(700)
        cy.xpath('//button[contains(.," + Add Subject ")]').click()
        cy.get('div[aria-haspopup="listbox"]').eq(7).click()
        cy.get('ul[role="listbox"]>li').contains('course20').click()
        cy.xpath('//button[contains(.,"+ Add Theory and Practical")]').click()
        cy.get('div[aria-haspopup="listbox"]').eq(8).click()
        cy.get('ul[role="listbox"]>li').contains('Half Yearly').click().wait(700)
        cy.get('input[name="practicalMarks"]').clear().type('50')
        cy.xpath('//button[contains(.,"Continue")]').click().wait(700)
        cy.xpath('//button[contains(.,"+ Add Activity")]').click()
        cy.get('input[name="activity"]').click().type("NothingAAAA")
        cy.xpath('//button[contains(.,"Continue")]').click().wait(700)
        cy.contains('Cancel').click()
        cy.contains('Continue Without Saving').click().wait(700)
        cy.xpath('//p').first().should('contains.text', 'Student Gradebook')

        }
       // aa()
       //////







    })
})