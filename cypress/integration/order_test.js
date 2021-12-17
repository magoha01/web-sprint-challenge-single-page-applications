describe('Order App', () => {
    beforeEach(() => {
      // Each test needs fresh state!
      // Never rely on state left over from previous tests
      // Every test should work in isolation (MUST)
      cy.visit('http://localhost:3000/pizza')
    })

    it('Sanity Check', () => {
        expect(2 + 2).to.equal(4);
        expect(2 + 2).not.to.equal(2);
        expect({}).to.eql({}); 
        expect({}).not.to.equal({});   
      })

      const nameInput = () => cy.get('input[id=name-input]');
      const specialInput = () => cy.get('input[name=special]');
      const submitBtn = () => cy.get('button[id=order-button]');
      const pepperoni = () => cy.get('input[name=pepperoni]');
      const sausage = () => cy.get('input[name=sausage]');
      const extraCheese = () => cy.get('input[name=extraCheese]');
      const threeCheese = () => cy.get('input[name=threeCheese]');
      const sizeInput = () => cy.get('select[id=size-dropdown]');

      it('can type in name and special input fields', () => {
        nameInput()
        .should('have.value', '')
        .type('name')
        .should('have.value', 'name')
        

        specialInput()
        .should('have.value', '')
        .type('special input')
        .should('have.value', 'special input')
       
      })

      it('can select multiple toppings', () => {

        pepperoni().check()
        sausage().check()
        threeCheese().check()
        extraCheese().check()

      })

      it('can submit form', () => {

        submitBtn().should('be.disabled')

        nameInput()
        .type('name')

        sizeInput()
        .select('small')
        
        pepperoni().check()
        sausage().check()

        specialInput()
        .type('special input')

        submitBtn().should('not.be.disabled')

        submitBtn().click()

      })


})

