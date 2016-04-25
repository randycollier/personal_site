export class BlogNgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('blog-ng-app p')).getText();
  }
}
