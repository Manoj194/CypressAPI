// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress")


Cypress.Commands.add('MoveToElement', function (element) {
    cy.get(element).trigger('mouseover')
})


Cypress.Commands.add("TopSchoolAdminLogin", (Us_Name, Pwd) => {
    cy.get('div[class="home-btn-container"] h4').should('have.text', 'Welcome!')
    cy.contains('Log in as ' + "" + 'Admin').click({ force: true }).wait(1000)
    cy.get('input[name="userName"]').type(Us_Name)
    cy.get('input[name="password"]').type(Pwd)
    cy.get('input[name="rememberMe"]').click({ force: true })
    cy.contains('Log In').click().wait(1500)
    cy.get('div[data-testid="alertBox"]').should('have.text', 'Logged in successfully')

})

Cypress.Commands.add("Topschool_Logout", () => {
    cy.contains('My Profile').click({ force: true }).wait(1000)
    cy.contains('Logout').click({ force: true }).wait(4000)
    cy.get('body').each(($el) => {
        if ($el.find('a.link_404').length > 0) {
            cy.get('a.link_404').click().wait(2000)
        }
    })
})

Cypress.Commands.add("Creat_New_Teacher",(Teacher_Name,Teacher_Mail,Teacher_contactNumb,Teacher_Adrs,Pincode)=>{
    var d = new Date()
   var currentDate = d.getDate()
    cy.get('input[name="fullName"]').type(Teacher_Name)
        cy.get('input[name="email"]').type(Teacher_Mail)
        cy.get('button[aria-label="Choose date"]').click({force:true})
        cy.get('button[aria-label="calendar view is open, switch to year view"]').click()
        cy.get('div[class*="MuiYearPicker-root css"] button').contains('2000').click()
        cy.xpath('//div[@role="grid"]//button[text()="' + currentDate + '"]').click({ force: true })
        cy.get('div[id="mui-component-select-gender"]').click()
        cy.get('ul[role="listbox"] li').first().click()
        cy.get('input[name="contact"]').type(Teacher_contactNumb)
        cy.get('input[name="address_one"]').type(Teacher_Adrs).wait(2000)
        cy.get('input[name="pincode"]').type(Pincode).wait(2000)
        cy.contains('Continue').click({force:true}).wait(700)
        cy.get('[class="form-row-out"] div[id="demo-simple-select"]').eq(0).click({force:true})
        cy.get('ul[role="listbox"] li').eq(6).click()
        cy.contains('Continue').click({force:true}).wait(700)
        cy.get('div[id="opt-subjects"]').click()
        cy.get('ul[role="listbox"] li').last().click()
        cy.get('body').click()
        cy.get('div[class="left-cls"] input[type="checkbox"]').click()
        cy.get('div[id="opt-subjects"]').last().click()
        cy.get('ul[role="listbox"] li').eq(1).click().wait(700)
        cy.get('body').click()
        cy.contains('Continue').click({force:true}).wait(700)
        cy.get('div[class="MuiAlert-message css-1xsto0d"]').should('have.text','Teacher Added Successfully')
        cy.get('div[class="TeacherDashboard_studentMeta__3kQfU"] p[class*="MuiTypography-root MuiTypography-body1 cs"]').each((ele,index)=>{
        
            var Names=ele.text()
            if (Names.includes(Teacher_Name)) {
                cy.get('button[aria-label="Delete Teacher"]').eq(index).click({force:true})
                cy.get('div[class="container-popover MuiBox-root css-0"]').contains('Delete Account').click({force:true})
                cy.contains('Delete account').click()
            }
        })
    

})
