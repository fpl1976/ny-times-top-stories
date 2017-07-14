import { NytimesPage } from './app.po';

describe('nytimes App', () => {
  let page: NytimesPage;

  beforeEach(() => {
    page = new NytimesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ny!!');
  });
});
