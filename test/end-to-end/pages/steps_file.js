'use strict'
// in this file you can append custom step methods to 'I' object
const jsdom = require('jsdom')
const Factory = require('rosie').Factory
const faker = require('faker')
const fixedFee = faker.name.firstName()
const PercentageFee = faker.name.firstName()
const RangeGroupName = faker.name.firstName()
const CategoryName = faker.name.firstName()

module.exports = function () {

  return actor({
    login: function (email, password) {
      this.fillField('Email address', email)
      this.fillField('Password', password)
      this.waitForElement({css: '[type="submit"]'}, 30)
      this.click({css: '[type="submit"]'})
    },
    getWelcomePage: function () {
      this.see(' Welcome to BARS')
      this.see('hello every body')
    },
  })
}
