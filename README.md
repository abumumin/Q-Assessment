# Assessment
****************************************************************

This repo contains e2e tests for a portion on Saucedemo website written in Cypress with Typescript

# Test Setup

Installations You need to have Node.js installed before using Cypress. Typescript, and Cucumber dependenies must be installed as well

Run Tests The test can be run in GUI mode Run npx cypress open --e2e to launch Cypress and select desired browser

# Tools, Framework and Liberaries Used
****************************************************************
# Framework: Cypress

Any IDE that support TYPESCRIPT can be used, VS code is light weight and easy to use. Thus it is recommeneded.

Framework Version: 9.7.0 Supporting Language: Javascript

# Supporting Libraries:

Node.js (12 or Higher)
Cypress Fill Command [https://www.npmjs.com/package/cypress-fill-command#installation]
cypress-cucumber-preprocessor [https://www.npmjs.com/package/cypress-cucumber-preprocessor#installation]
# Local Setup
After cloning this repo to the local machine, open a terminal inside the project then execute to install from the <package.json file>.


# Supported Browsers
The following are the supported browsers as of this version; 10.0.0
****************************************************************

* Chrome
* Edge
* Electron (default)
* Firefox

# Getting Started
Clone the code from thr repository address with 'git clone https://github.com/abumumin/RedAcre.git' Navigate into the repository after successfully cloning it and and launch the IDE. Run 'npm i' or 'npm install' to install all the dependencies. you can equally run 'npm ci' if you want to run a clean install from the package-lock.json instead. The easier option is 'npm install'. Open terminal and run the code with 'npm run headless-chrome' to run the script.

# Script Focus: What Does The Script Do?
The following activities were carried out on the Script
****************************************************************

* Launch web url 

## Improvement and Recommendations

* 1. Upon clicking on Simple form demo, the page should have a header Simple form demo to inform the user the page he is interacting with

* 2. Grammatical issues like :
- Change First Let us try be very simple with only one input field and a Button to "First, let us try to be very simple with only one input field and a button."
- First Let us try with Two input fields and a Button should be  displayed as "First, let us try with two input fields and a button."
- Change First Let us try with Two input fields and a Button

Enter Value for a
Enter Value for b
Click on 'Get Total' button to display the sum of two numbers 'a and b'

to 

First, let us try with two input fields and a button.
Enter value for a.
Enter value for b.
Click on the 'Get Total' button to display the sum of the two numbers 'a' and 'b'.

- Change "This would be your first example on select dropd down list to with Selenium." to "This would be your first example on selecting a dropdown list with Selenium."

- Change By clicking on the buttons, you can get value from the list which will display just below the buttons to By clicking on the buttons, you can get a value from the list, which will display just below the buttons.

* 3. When a user clicks on more than one city in the Multi Select List Demo page and then clicks on the *First Selected* button, the data returned is the last city the user clicked on

* 4. When a user clicks on more than one city in the Multi Select List Demo page and then clicks on the *Get All Selected* button, the data returned is the last city the user clicked on.

* 5. When a user clicks on more than one city in the Multi Select List Demo page and then clicks the 'Get All Selected' button, the returned data should display the values of all selected options, not 'Options selected are'.

* 6. When the user clicks on 'Launch modal' in the Single Modal Example, the header of the page upon display should be 'Single Modal Title' or corresponding text instead of 'Modal Title'.

* 7. "When the user clicks 'Launch modal' in the 'Multiple Modal Example', the header of the page should display the title 'Multiple Modal Example' instead of 'First Modal'. Additionally, when the user clicks 'Launch modal' on the 'First Modal' page, they should see the title 'Second Modal' instead of 'Modal 2'."

