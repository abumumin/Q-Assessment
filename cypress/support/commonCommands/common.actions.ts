Cypress.Commands.add('typeAText', (field, text) => { 
    cy.get(field).should('exist').type(text)
});

// Add the selectValue command
Cypress.Commands.add('selectvalue', (element, value) => {
    cy.get(element).should('exist').select(value);
  });

