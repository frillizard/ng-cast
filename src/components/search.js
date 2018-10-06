angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    result: '<',
    service: '<',
    apiKey: '<'
  },
  controller: function() {
    this.text = '';
    this.clicked = function() {
      let toSend = {
        query: this.text,
        maxResults: 5,
        key: this.apiKey 
      };
      this.service.search(toSend, this.result);
    };
  }
});
