angular.module('video-player')

.component('app', {
  templateUrl: '/src/templates/app.html',
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    console.log('app', this);
  }
});
