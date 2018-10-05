angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
  bindings: {
    video: '<'
  },
  controller: function() {
    this.runClickRoutine = function() {
      app.setCurrentVideo(this.video);
    };
  }
});
