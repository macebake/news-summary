newsSummaryApp.factory('NewsItemFactory', function() {

  var NewsItem = function(headline){
    this.headline = headline;
  };

  return NewsItem;

});
