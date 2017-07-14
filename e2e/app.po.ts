import { browser, by, element } from 'protractor';

export class NytimesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ny-root h1')).getText();
  }
}
