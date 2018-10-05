angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function() {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];

    this.onClick = function(video) {
      console.log('Click noticed: ', video);
      this.currentVideo = video;
    };
    console.log('app', this);
  }
});
