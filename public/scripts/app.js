angular
  .module('univjam', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/playlist',
      controllerAs: 'playlistsIndexCtrl',
      controller: 'PlaylistsIndexController'
    })
    .when('/playlist', {
      templateUrl: '/templates/playlist',
      controllerAs: 'playlistsIndexCtrl',
      controller: 'PlaylistsIndexController'
    })
    .when('/playlists/:id', {
      templateUrl: '/templates/playlists-show',
      controllerAs: 'playlistsShowCtrl',
      controller: 'PlaylistsShowController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}


function onYouTubeIframeAPIReadyx() {
  var ctrlq = document.getElementById("youtube-audio")

  var icon = document.createElement("img");
  icon.setAttribute("id", "youtube-icon");
  icon.style.cssText = "cursor:pointer;cursor:hand";
  ctrlq.appendChild(icon);

  var div = document.createElement("div");
  div.setAttribute("id", "youtube-player");
  ctrlq.appendChild(div);

  var toggleButton = function (play) {
    var img = play ? "IDzX9gl.png" : "quyUPXN.png";
    icon.setAttribute("src", "https://i.imgur.com/" + img);
  }

  ctrlq.onClick = function () {
    if (player.getPlayerState() === YT.PlayerState.PLAYING || player.getPlayerState() === YT.PlayerState.BUFFERING ) {
      player.pauseVideio();
      toggleButton(false);
    } else {
      player.playVideo();
      toggleButton(true);
    }
  };

  var player = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    videoId: ctrlq.dataset.video,
    playerVars: {
      autoplay: ctrlq.dataset.autoplay,
      loop: ctrlq.dataset.loop,
    },
    events: {
      'onReady': function(e) {
        player.setPlaybackQuality("small");
        toggleButton(player.getPlayerState() !== YT.PlayerState.CUED);
      },
      'onStateChange': function(e) {
        if (e.data === YT.PlayerState.ENDED) {
          toggleButton(false);
        }
      }
    }
  });
}
