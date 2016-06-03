describe('NewsItemFactory', function(){

  beforeEach(module('newsSummaryApp'));

  var newsItem;

  beforeEach(inject(function(NewsItemFactory){
    newsItem = new NewsItemFactory('headline');
  }));

  it('creates a news item with a headline', function(){
    expect(newsItem.headline).toEqual('headline');
  });


});
