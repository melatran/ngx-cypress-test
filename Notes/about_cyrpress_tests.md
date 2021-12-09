# Interaction with Web Elements

## Test Structure
- start structure with either describe() or context()
- can also have many multiple describe sections in a single test file

```
describe('Our first suite', () => {
    describe ('suite section' () => {

        beforeEach('code for every test', () => {
            //repetive code such as login information
            //this beforeEach will only apply to any tests within this describe
            //anything in first, second, and third test cannot use this beforeEach
        })

        it('some test name', () => {

        })
    })
    it('first test', () => {

    })

    it('second test', () => {

    })

    it('third test', () => {

    })
})

```

## Types of Locators
- add to the top of test file so we can use cypress methods "/// <reference types = "cypress" />"

