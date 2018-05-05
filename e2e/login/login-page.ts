import { browser, element, by } from "protractor";

//var access = require('../common/access-methods');

var LoginPage = function () {

    var inputUser = element(by.id('inputUsername'));
    var inputPassword = element(by.id('inputPassword'));
    this.loginSubmit = element(by.id('buttonSignIn'));
    this.linkRegister = element(by.id('linkRegister'));
    

    this.getLoginPage = function() {
        browser.get('http://localhost:4200/#/login');
    }

    this.performLogin = function(user: string, password: string) {
        inputUser.sendKeys(user);
        inputPassword.sendKeys(password);
        this.loginSubmit.click();
    }

};

module.exports = new LoginPage();