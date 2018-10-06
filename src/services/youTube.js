angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(params, callback) {
    if (params.maxResults === undefined) {
      params.maxResults = 5;
    }
    let sentData = {
      //part: 'snippet',
      q: params.query,
      maxResults: params.maxResults,
      //key: params.key,
      videoEmbeddable: 'true'
    }; 
    console.log('Sending ', sentData);
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + params.key,
      data: sentData
    }).then(function successCallback(response) {
      console.log('Data recieved:', response);
    }, function errorCallback(response) {
      console.log('Server error: ', response);
    });
  };
});
