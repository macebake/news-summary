angular.module("newsSummaryApp")
  .controller("NewsSummaryController", ["NewsSummaryService", "NewsItemFactory", function(NewsSummaryService, NewsItemFactory) {
    var self = this;

    self.newsItems = NewsSummaryService.getTitles();

  }]);
