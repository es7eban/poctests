import { AppPage } from './app.po';
import {browser, element, by} from "protractor";

/*describe('angular-poc-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});*/
describe('poc Test e2e front end', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

  it('Should display list of posts', () => {
    expect(page.countPosts()).toBeGreaterThan(0);
    //browser.pause();
  });

  it('should display button edit for every row', () => {
    expect(page.countButtonByText('edit')).toEqual(page.countPosts());
  });

  it('should display button delete for every row', () => {
    expect(page.countButtonByText('delete')).toEqual(page.countPosts());
  });

  it('should display form edit', () => {
    page.getEditByIndex(0).click().then(() => {
      let title = element(by.css('#title'));
      let text = element(by.css('#text'));

      expect(title.getAttribute('value')).not.toBe('');
      expect(text.getAttribute('value')).not.toBe('');
      expect(page.countButtonByText('Update')).toEqual(1);
    });
  });

  it('should delete the first row', () => {
    let postsBeforeDelete = page.countPosts();
    let btnDelete = page.getDeleteByIndex(0);

    btnDelete.click();

    browser.wait(() => {
      page.navigateTo('/');
      return btnDelete.isPresent();
    },
      2000,
      'it was not possible to list posts after deleted'
      );
    expect(page.countPosts()).not.toEqual(postsBeforeDelete);
  });

  it('should save edit form', () => {
    let newTitle = 'title test1';
    let newText = 'text test1 text test1';

    page.getEditByIndex(0).click().then(() => {
      let tdTitle = element.all(by.css('tbody tr')).get(0).all(by.css('td')).get(1);
      let tdText = element.all(by.css('tbody tr')).get(0).all(by.css('td')).get(2);
      let title = element(by.css('#title'));
      let text = element(by.css('#text'));
      let btnUpdate = element(by.buttonText('Update'));

      title.clear();
      title.sendKeys(newTitle);

      text.clear();
      text.sendKeys(newText);

      btnUpdate.click();

      browser.wait(() => {
        return tdTitle.isPresent();
      },
        2000,
        'it was not possible to list posts'
      );

      expect(tdTitle.getText()).toContain(newTitle);
      expect(tdText.getText()).toContain(newText);
    });
  });

});
