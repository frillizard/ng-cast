angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(params, callback) {
    if (params.maxResults === undefined) {
      params.maxResults = 5;
    }
    let sentData = {
      part: 'snippet',
      q: params.query,
      maxResults: params.maxResults,
      key: params.key,
      videoEmbeddable: 'true',
      type: 'video'
    }; 
    console.log('Sending ', sentData);
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: sentData
    }).then(function successCallback(response) {
      console.log('Data recieved:', response.data.items);
      callback(response.data.items);
    }, function errorCallback(response) {
      console.log('Server error: ', response);
    });
  };
});
