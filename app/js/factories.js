newsSummaryApp.factory('NewsItemFactory', function() {

  var NewsItem = function(headline, webUrl){
    this.headline = headline;
    this.webUrl = webUrl;
  };

  return NewsItem;

});
