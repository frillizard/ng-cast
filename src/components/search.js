angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    result: '<'
  },
  controller: function(youTube) {
    this.text = '';
    this.clicked = function() {
      let toSend = {
        query: this.text,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY
      };
      youTube.search(toSend, this.result);
    };
  }
});
