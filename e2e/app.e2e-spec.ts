import { AngularCliInitPage } from './app.po';

describe('angular-cli-init App', () => {
  let page: AngularCliInitPage;

  beforeEach(() => {
    page = new AngularCliInitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
