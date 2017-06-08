import { Untitled1Page } from './app.po';

describe('untitled1 App', () => {
  let page: Untitled1Page;

  beforeEach(() => {
    page = new Untitled1Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
