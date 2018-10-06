angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube) {
    this.service = youTube;
    this.videos = [];
    this.currentVideo = {kind:'dummy', id:{videoId:''}, snippet:{title:'No Video', description:'Please Wait...'}};
    this.serviceKey = YOUTUBE_API_KEY;
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
    let testObject = {query:'dogs', key: this.serviceKey};
    
    this.service.search(testObject, this.searchResults);
    
  }
});