
import { browser, by, element } from 'protractor';

describe('Login attempts', () => {

  beforeEach(() => {
    browser.get('http://localhost:4200/');
  });

  it('should successfully login', () => {
    element(by.id("inputUsername")).sendKeys("admin@venturus.org.br");
    element(by.id("inputPassword")).sendKeys("admin");
    element(by.id("buttonSignIn")).click();
    expect(element(by.id("buttonLeave")).isDisplayed()).toBe(true);
    element(by.id("logout")).click();
  });

  it('should not login with invalid username', () => {
    element(by.id("inputUsername")).sendKeys("admin@vnt.com.br");
    element(by.id("inputPassword")).sendKeys("admin");
    element(by.id("buttonSignIn")).click();
    expect(element(by.id("login-alert-message")).getText()).toBe("Invalid username and/or password");
  });

  it('should not login with invalid password', () => {
    element(by.id("inputUsername")).sendKeys("admin@venturus.org.br");
    element(by.id("inputPassword")).sendKeys("blabla");
    element(by.id("buttonSignIn")).click();
    expect(element(by.id("login-alert-message")).getText()).toBe("Invalid username and/or password");
  });

  it('should not login with both invalid username and password', () => {
    element(by.id("inputUsername")).sendKeys("admin@vnt.com");
    element(by.id("inputPassword")).sendKeys("blabla");
    element(by.id("buttonSignIn")).click();
    expect(element(by.id("login-alert-message")).getText()).toBe("Invalid username and/or password");
  });
});