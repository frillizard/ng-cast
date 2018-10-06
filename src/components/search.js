angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    searchResults: '<'
  },
  controller: function() {
    this.text = '';
    this.report = function() {
      console.log(this.text);
    };
  }
});
