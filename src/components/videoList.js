angular.module('video-player')
.component('videoList', {
  templateUrl: '/src/templates/videoList.html',
  //template: '<ul class="video-list">\n' + 
  //  '<video-list-entry ng-repeat="video in $ctrl.videos" video="video"></video-list-entry>\n' +
  //'</ul>',
  bindings: {
    videos: '<',
  }
});
