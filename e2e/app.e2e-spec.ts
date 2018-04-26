import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';
import { Script } from 'vm';

var user = require('../testData/testData.module.js');
var using = require('jasmine-data-provider');

describe('bootcamp-protractor App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(element(by.id("welcomeMsg")).isDisplayed()).toBe(true);
  });

  using(user.loginInfo, function(data, description) {
  it('login attempt for ' + description, function() {
    element(by.id('inputUsername')).sendKeys(data.username);
    element(by.id('inputPassword')).sendKeys(data.password);
    element(by.id('loginSubmit')).click();

    expect(element(by.id("login-alert-message")).getText()).toBe('Invalid username and/or password');
    expect(element(by.id("login-alert-message")).isDisplayed()).toBe(true);

    element(by.id('inputUsername')).clear();
    element(by.id('inputPassword')).clear();

    })
  });

  using(user.registerData, function(data, description) {
  it('performing register for ' + description, function() {
    element(by.id('registerLink')).click();
    element(by.id('firstName')).sendKeys(data.firstname);
    element(by.id('lastName')).sendKeys(data.lastname);
    element(by.id('username')).sendKeys(data.username);
    element(by.id('password')).sendKeys(data.password);
    //element(by.id('loginSubmit')).click();
    })
  });


});
