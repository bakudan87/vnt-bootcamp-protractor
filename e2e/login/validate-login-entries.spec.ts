
import { browser, by, element } from 'protractor';

describe('Login attempts', () => {

  beforeEach(() => {
    browser.get(browser.baseUrl);
  });

  it('should successfully login', () => {
    element(by.id("inputUsername")).sendKeys(browser.params.login.username);
    element(by.id("inputPassword")).sendKeys(browser.params.login.password);
    element(by.id("buttonSignIn")).click();
    expect(element(by.id("buttonLeave")).isDisplayed()).toBe(true);
    element(by.id("logout")).click();
  });
});