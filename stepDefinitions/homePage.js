/*jslint node: true*/
// var SearchPage = require('../pages/searchPage');
import SearchPage from '../pages/searchPage';

var homePage = function () {
    "use strict";
    var search = new SearchPage();

    this.Given(/^I am on google page$/, function () {

        return expect(browser.getTitle()).to.eventually.equal('Google');

    });
};

module.exports = homePage;