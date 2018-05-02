import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('bootcamp-protractor App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(element(by.id("welcomeMsg")).isDisplayed()).toBe(true);
  });

  all(require('../testData/loginInfo.json'), (data, iteration) => {
    fit(`iteration #${iteration}: login attempt for ${data.description}`, () => {
      element(by.id('inputUsername')).sendKeys(data.username);
      element(by.id('inputPassword')).sendKeys(data.password);
      element(by.id('loginSubmit')).click();
      
      expect(element(by.id("login-alert-message")).getText()).toBe(data.output);
      //expect(element(by.id("login-alert-message")).isDisplayed()).toBe(true);
      
      element(by.id('inputUsername')).clear();
      element(by.id('inputPassword')).clear();
      })
})
});
