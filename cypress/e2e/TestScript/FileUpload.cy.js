

///<reference types="cypress"/>

describe('Upload file', () => {

    beforeEach(()=>{
        cy.on('uncaught:exception', (err, runnable) => {

          return false
            
        })
    })

    it('File upload and validation', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('input[name="filesToUpload"]').selectFile('cypress/fixtures/es.txt')
        cy.get('p strong').eq(0).should('have.text', 'Upload Files:')
        cy.get('ul[id="fileList"]').should('have.text', 'es.txt')
    })

    it('File upload and Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('[id="drag-drop-upload"]').attachFile("cypress/fixtures/es.txt", { subjectType: 'drag-n-drop' })
    })

    it('Upload multiple file', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('input[name="filesToUpload"]').selectFile(['cypress/fixtures/es.txt', 'cypress/fixtures/black-cool-dark-laptop-background-wallpaper-preview.jpg'])
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:')
        cy.get('[id="fileList"] li').each((ele) => {
            var files = ele.text()
            var arr = [files]
            cy.log(arr)
            expect(arr).to.be.an('array').length(2)
            expect(arr).to.be.an('array').includes("black-cool-dark-laptop-background-wallpaper-preview.jpg" || "es.txt")


        })


    })
})