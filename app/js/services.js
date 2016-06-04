newsSummaryApp.service('NewsSummaryService', ['$http', 'NewsItemFactory', function($http,
NewsItemFactory) {
  this.getTitles = function() {

    var newsItems = [];

    $http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=body.json')
      .then(getNewsStories)
      .then(getSummaries)
      .then(createNewsItems);

    function getNewsStories(response) {
      return response.data.response.results;
    }

    function getSummaries(newsStories) {
      // console.log(newsStories);
      // var test = [];
      newsStories.forEach(function(story){
        url = story.webUrl;
        $http.get('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url)

          .then(addSummary);
      });

      // return test;
      // return [1,2,3,4];
      // $http.get('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='+newsStory.webUrl);
    }

    function createNewsItems(newsStoriesAndSummaries){
      // console.log(newsStoriesAndSummaries);

      return 1;
    // newsStoriesAndSummaries.forEach(function(item){
    //   newsItems.push(new NewsItemFactory(item.headline, item.webUrl, item.Summary));
    // });
    }

    function addSummary(summary){
      console.log(summary)
      // console.log(summary.data.sentences);
      return summary.data.sentences;
    }

  };
}]);
