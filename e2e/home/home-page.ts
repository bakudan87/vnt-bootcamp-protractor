import { browser, element, by } from "protractor";

var HomePage = function () {
    
    this.getLoginPage = function() {
        browser.get('http://localhost:4200/#/');
    }

    this.linkLogout = function(){
        return element(by.id('linkLogout'));
    }
};

module.exports = new HomePage();