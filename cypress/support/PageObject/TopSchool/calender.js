class Calender{

    getCalenderBtn(){
        return cy.contains('Calendar')
    }
    getCreateNewBtn(){
        return  cy.get('div[class="calendarMeetingBtn"]').contains('Create New')
    }
    getArrowBtn(){
        return  cy.get('div[class="popover-arrow"]').eq(1)
    }

    sample(){
        this.getCalenderBtn().click({ force: true })
        this.getCreateNewBtn().click({ force: true })
        this.getArrowBtn().click({ force: true })
    }
}
module.exports=new Calender()