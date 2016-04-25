import { BlogNgPage } from './app.po';

describe('blog-ng App', function() {
  let page: BlogNgPage;

  beforeEach(() => {
    page = new BlogNgPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('blog-ng Works!');
  });
});
