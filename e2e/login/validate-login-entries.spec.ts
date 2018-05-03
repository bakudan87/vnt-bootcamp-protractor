
import { browser, by, element } from 'protractor';

describe('Login attempts', () => {

    var login =  require('./login-page');
    var home = require('../home/home-page')
    
    beforeEach(() => {
      login.getLoginPage();
    });

    it('should successfully login', () => {
        login.performSucessfullLogin('admin@venturus.org.br','admin')
        expect(home.linkLogout().isDisplayed())
        home.linkLogout().click()
    });

    it('should not login with invalid username', () => {
        login.verifyInvalidLoginData('admin','admin')
        expect(element(by.id("login-alert-message")).getText()).toBe('Invalid username and/or password');
        expect(element(by.id("login-alert-message")).isDisplayed()).toBe(true);
    });

    it('should not login with invalid password', () => {
        login.verifyInvalidLoginData('admin@venturus.org.br', 'blablabla')
        expect(element(by.id("login-alert-message")).getText()).toBe('Invalid username and/or password');
        expect(element(by.id("login-alert-message")).isDisplayed()).toBe(true);
    });

    it('should not login with both invalid username and password', () => {
        login.verifyInvalidLoginData('admin','bla123')
        expect(element(by.id("login-alert-message")).getText()).toBe('Invalid username and/or password');
        expect(element(by.id("login-alert-message")).isDisplayed()).toBe(true);
    });

    it ('verify register link', () => {
        login.linkRegister.click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:4200/#/register');
      });  
});