# Cypress

## Cypress Installation

- **npm install cypress --save-dev**
    - node package manager will install cypress
    - save dev will add it as a dependency to the package (cypress with be installed with npm install)
- **npx cypress open**
    - this will open cypress to run the tests
    - it may take some time, but I do not need to keep clicking on a task multiple times (be patient)
- a cypress folder will be automatically created with the structure:
    - **fixtures**
        - keeps data objects and mock objects needed for test
        - usually mock json objects
    - **integration**
        - this is the main folder where tests will live in
        - cypress runner will look in this folder for the test files
        - files end in *spec.js*
    - **plugins**
        - *index.js*: extend cypress functionality
    - **support**
        - *index.js*: this is the first file cypress looks into when executing tests (executed at the first moment) so such as importing any libraries
        - *commands.js*: this is the file to add commonly used functions in different tests such as login
- **cypress.json** was created in the root folder of project
    - configuration file where you can change the settings for cypress

## Cypress Configuration
- https://docs.cypress.io/guides/references/configuration#cypress-json
- change viewportHeight and viewportWidth to fit with today's devices were most are HD
- this warning message is expected since it's base URL is a local host and local host is not running
<img width="1000" alt="Screen Shot 2021-12-09 at 10 43 20 AM" src="https://user-images.githubusercontent.com/59414750/145448835-9f69872b-ff6f-425b-9fbf-c1f9b84a2fd8.png">