angular.module('video-player')
.component('videoListEntry', {
  templateUrl: '/src/templates/videoListEntry.html',
  bindings: {
    video: '<'
  },
  controller: function() {
    // this.title = video.snippet.title;
    console.log(this);
  }
});
