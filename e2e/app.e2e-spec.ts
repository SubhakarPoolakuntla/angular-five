import { AngularFivePage } from './app.po';

describe('angular-five App', function() {
  let page: AngularFivePage;

  beforeEach(() => {
    page = new AngularFivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
