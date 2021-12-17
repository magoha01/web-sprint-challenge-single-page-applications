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
      const submitBtn = () => cy.get('button[order-button]');
      
})

