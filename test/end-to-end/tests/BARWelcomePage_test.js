Feature('BAR Home Screen')

Before((I, Idam) => {
    I.amOnPage('/login')
    I.see('BAR')
    I.click({css: '[type="submit"]'})
    I.see("Add payment instruction")
})

Scenario('Login Screen', (I) => {
    I.getWelcomePage()
})

Scenario('Add Payment Instruction', (I) => {
    I.seeElement('.button.button-blue');
    I.click({css: '#part-remission'})
    I.seeElement('.button.button-blue.view-payment-log-disabled');
})

Scenario('View Payments Log Validations', (I) => {
    I.seeElement('.button.button-blue');
I.click({css: '#payment-type-1'})
I.click({css: '#payment-type-2'})
I.click({css: '#payment-type-3'})
I.click({css: '#payment-type-4'})
I.click({css: '#payment-type-5'})
I.click({css: '#payment-type-6'})
I.seeElement('.button.button-blue.view-payment-log-disabled');
})

Scenario('View Payments Log Validations With PayeeName', (I) => {
    I.seeElement('.button.button-blue');
I.fillField('#payee-name', 'john');
//I.fillField('Amount*', '123456');
I.seeElement('.button.button-blue.view-payment-log-disabled');
})

Scenario('View Payments Log Validations With Amount', (I) => {
    I.seeElement('.button.button-blue');
I.fillField('#amount', '123456');
I.seeElement('.button.button-blue.view-payment-log-disabled');
})