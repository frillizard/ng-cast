angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = function(video) {
      this.currentVideo = video;
    };
    this.onClick = this.selectVideo
      .bind(this);
    this.unboundSearchResults = function(data) {
      this.videos = data;
      this.currentVideo = data[0];
    };
    this.searchResults = this.unboundSearchResults.bind(this);
    let testObject = {query:'cats', key: window.YOUTUBE_API_KEY};
    youTube.search(testObject, this.searchResults);
  }
});