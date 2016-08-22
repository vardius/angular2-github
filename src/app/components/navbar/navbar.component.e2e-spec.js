describe('Navbar', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have <nav>', () => {
    let navbar = element(by.css('nav'));
    expect(home.isPresent()).toEqual(true);
  });
});
