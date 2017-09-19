Feature('Fees Register Admin Console Edit Categories')

Before((I, Idam) => {
    I.amOnPage('/hello')
})

Scenario('Admin Console Create New Categories', (I) => {
    I.getWelcomePage()
})