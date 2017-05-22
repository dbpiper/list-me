import { ListMeFrontendPage } from './app.po';

describe('list-me-frontend App', () => {
  let page: ListMeFrontendPage;

  beforeEach(() => {
    page = new ListMeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
