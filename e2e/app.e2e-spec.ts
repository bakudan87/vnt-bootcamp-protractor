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
});
