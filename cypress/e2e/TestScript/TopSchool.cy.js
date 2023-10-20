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
    afterEach(() => {
        cy.Topschool_Logout()
    })

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
        cy.contains('Notice type*').click({ force: true })

    })
})