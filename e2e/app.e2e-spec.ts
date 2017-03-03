import { NengajoukanriPage } from './app.po';

describe('nengajoukanri App', () => {
  let page: NengajoukanriPage;

  beforeEach(() => {
    page = new NengajoukanriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
