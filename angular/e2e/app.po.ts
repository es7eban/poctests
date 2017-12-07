import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(url);
  }

  /*getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }*/

  countPosts() {
    return element.all(by.css('tbody tr')).count();
  }

  countButtonByText(text: string) {
    return element.all(by.buttonText(text)).count();
  }

  getEditByIndex(ind: number) {
    return element.all(by.buttonText('edit')).get(ind);
  }

  getDeleteByIndex(ind: number) {
    return element.all(by.buttonText('delete')).get(ind);
  }

  log(arg:any) {
    browser.call(function() {
      console.log(arg);
    });
  }
}
