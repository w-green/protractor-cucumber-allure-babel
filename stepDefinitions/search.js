/*jslint node: true*/
// var SearchPage = require('../pages/searchPage');
import SearchPage from '../pages/searchPage';

var searchText = function () {
    "use strict";
    var search = new SearchPage();

    this.When(/^I type "(.*?)"$/, function (text) {
        return search.searchTextBox.sendKeys(text);
    });

    this.Then(/^I click search button$/, function () {
        return search.searchButton.click();
    });

};

module.exports = searchText;