describe('login website case',functin() {
   beforeEach(()=>{cy.visit('http:/..../user-login.html')})
   it('login case',function(){
       //input username
       cy.get('#account').type('admin')
          .should('have.value','admin')
       //input password
       cy.get('[name="password"]').type('eva@2021')
          .should('have.value',"eva@2021")
       //submit form
       cy.get('#submit').click()
       //judge whether the page is redirected /.../../
       cy.url().should('include','/.../../')
       //judge 'some specific texts'in page
       cy.get('body').should('contain','the specific texts')
    
   })