describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("News Summary");
  });

  it("finds first headline", function() {
    browser.get('/');
    expect($$('p.headline').first().getText()).toMatch('awesome newz story');
  });
});
