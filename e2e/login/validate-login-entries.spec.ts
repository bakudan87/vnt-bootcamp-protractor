
import { browser, by, element } from 'protractor';

describe('Login attempts', () => {

    var login =  require('./login-page');
    var home = require('../home/home-page')
    var loginInfo = require('../../testData/loginInfo.json'); 
    
    beforeEach(() => {
      login.getLoginPage();
    });

    all(loginInfo.valid , (data) => {
        it('should successfully login', () => {
            login.performSucessfullLogin(data.username,data.password)
            expect(home.linkLogout().isDisplayed())
            home.linkLogout().click()
        })
    });    

    all(loginInfo.invalid , (data, iteration) => {
        it(`iteration #${iteration}: login attempt for ${data.description}`, () => {
            login.verifyInvalidLoginData(data.username,data.password)
            expect(element(by.id("login-alert-message")).getText()).toBe(data.output);
            expect(element(by.id("login-alert-message")).isDisplayed()).toBe(true);
        })
    });

    it ('verify register link', () => {
        login.linkRegister.click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:4200/#/register');
      });  
});