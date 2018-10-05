angular.module('video-player')
.component('videoList', {
  templateUrl: '/src/templates/videoList.html',
  controller: function() {
    this.videoList = exampleVideoData;
  }
});
