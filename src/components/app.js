angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.changeVideoOnClick = function(video) {
      this.currentVideo = video;
    };
    this.onClick = this.changeVideoOnClick.bind(this);
  }
});