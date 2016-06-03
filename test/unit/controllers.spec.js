describe("NewsSummaryController", function() {

  var controller, newsitem;

  beforeEach(module("newsSummaryApp"));

  beforeEach(inject(function($controller, _NewsItemFactory_) {
    controller = $controller("NewsSummaryController");
    NewsItemFactory = _NewsItemFactory_;
  }));

  it('is initialized with news items', function(){
    expect(controller.newsItems[0].headline).toEqual('awesome newz story');
  });

});
