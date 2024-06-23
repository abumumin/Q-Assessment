import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

//A User should be able to interact with the input form and Alert and modals
Given(/^I launch the app$/, () => {
    cy.visit('/', { failOnStatusCode: false })
});

When(/^I click on Input Forms button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.inputForms)
    })
});

When(/^I click on Simple Form Demo button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.simpleFormDemo)
    })
});

Then(/^I enter Single Input text$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.typeAText(sel.singleInputFiled, sel.singleInputText);
    })
});

Then(/^I click on show message button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.showMessageButton)
    })
});

Then(/^I should see text entered$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.text)
            .invoke('text')
            .then((text) => {
                cy.log('Text value:', text.trim());
            });
    })
});

When(/^I enter number in Enter a field$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.typeAText(sel.enterAField, sel.enterAText);
    })
});

When(/^I enter number in Enter b field$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.typeAText(sel.enterBField, sel.enterBText);
    })
});

When(/^I click on Get Total button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.getTotalButton)
    })
});

When(/^I should verify total result text$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.verifyTestResult).should('contain.text', '9');
    })
});

When(/^I click on Select Dropdown List$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.inputForms);
        cy.clickElement(sel.selectDropdownList);
    })
});

When(/^I click on any day of the week$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.get(sel.day).select('Tuesday').should('have.value', 'Tuesday')
    })
});

When(/^I should see Day selected$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.get(sel.seeDay).should('have.text', 'Day selected :- Tuesday').then((element) => {
            cy.log(element.text());
        });
    })
});

When(/^I click on multiple cities in the list$/, () => {

    cy.fixture('selectors').then((sel) => {
        // Select Ohio and Florida
        cy.get(sel.multipleCities).select(['Ohio', 'Florida']);

        // Verify Ohio is selected
        cy.get(sel.multipleCities).find('option:selected').should('have.length', 2);
        cy.get(sel.multipleCities).find('option:selected').eq(0).should('have.text', 'Florida');
        cy.get(sel.multipleCities).find('option:selected').eq(1).should('have.text', 'Ohio');
    })
});

When(/^I click on First city selected button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.firstCity);
    })
});

When(/^I should see First city selected$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.get(sel.city).invoke('text').then((text) => {
            // Log the trimmed text content
            cy.log(text.trim());
        });
    })
});

When(/^I click on Get All selected button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.getAllSelected);
    })
});

When(/^I should see All selected cities$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.get(sel.getAllSelected).invoke('text').then((text) => {
            cy.log(text.trim());
        });
    })
});

When(/^I click on Alerts & Modals$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.alertsAndModals);
    })
});

When(/^I click on Bootstrap Alerts button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.bootstrapAlert);
        cy.clickElement(sel.alert1);
        cy.clickElement(sel.alert2);
        cy.clickElement(sel.alert3);
        cy.clickElement(sel.alert4);
        cy.clickElement(sel.alert5);
        cy.clickElement(sel.alert5);
        cy.clickElement(sel.alert7);
        cy.clickElement(sel.alert8);
    })
});

When(/^I should see Bootstrap Alerts messages$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.get(sel.bootstrapAlertView).invoke('text').then((text) => {
            cy.log('Text from h2 element:', text.trim());
        });
    })
});

When(/^I click on Alerts & Modal$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.alert);
    })
});

When(/^I click on Bootstrap Modals button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.bootstrap);
    })
});

When(/^I click on Launch modal button on Single Modal Example$/, () => {

    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.launch1);
    })
});

When(/^I should see Modal title Alerts messages$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.get(sel.viewModalTitleMessage).invoke('text').then((text) => {
            cy.log('Text from modal body:', text.trim());
        });
    })
});

When(/^I should be able to click on save change button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.save1);
    })
});

When(/^I click on Launch modal button on Multiple Modal Example$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.multipleModal);
    })
});

When(/^I should see First Modal title Alerts messages$/, () => {

    cy.fixture('selectors').then((sel) => {
        cy.get(sel.firstModal).invoke('text').then((text) => {
            cy.log('Text content of modal body:', text.trim());
        });
    })
});

When(/^I should be able to click on Launch Modal button to view the second modal$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.secondModal);
    })
});

Then(/^I should be able to click on save changes button$/, () => {
    cy.fixture('selectors').then((sel) => {
        cy.clickElement(sel.save);
    })
});
