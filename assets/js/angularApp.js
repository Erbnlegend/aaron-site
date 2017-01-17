var app = angular.module('tabs', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$locationProvider.html5Mode(true);
  $routeProvider.
    when('/about', {
      templateUrl: 'assets/js/views/about.html',
      controller: 'SkillsController',
      controllerAs: 'skillCtrl',
      activetab: 1
    }).
    when('/work', {
      templateUrl: 'assets/js/views/work.html',
      controller: 'GalleryController',
      controllerAs: 'galCtrl',
      activetab: 2
    }).
    when('/contact', {
      templateUrl: 'assets/js/views/contact.html',
      controller: 'TabController',
      controllerAs: 'tabCtrl',
      activetab: 3
    }).
    otherwise({
      redirectTo:'/about'
    });

}]);

app.controller('TabController', ['$scope', '$route', function($scope, $route){
  $scope.$route = $route;

$(window).load(function(){
  $('#pageLoader').fadeOut(1000);
});

$('.navClick').click(function(){
  $('#pageLoader').fadeIn(1000, function() {
    setTimeout(function() {
    $(document).ready(function() {
    $('#pageLoader').fadeOut(500);
    });
  }, 1000);
  });
});

}]);

app.controller('GalleryController', ['$scope', function($scope){
  var gallery = this;

	gallery.images = [
    {
        'name': 'Encounter Tool',
    		'site': 'encountertool.aaron-sites.com',
    		'imgsrc': 'assets/img/encounter.png',
        'direction': 'right',
        'description': 'This game master tool was built with AngularJS to provide an encounter builder for a Dungeon Master for Dungeons and Dragons 5e to make planning an encounter easy and keep the game going.  It has cached data in the browser so that when you come back, your selected items are still there. '
    },
{
    'name': 'Lucy Erb',
		'site': 'www.lucyerb.com',
		'imgsrc': 'assets/img/lucyhome.png',
    'direction': 'Left',
    'description': 'Lucy Erb is Aaron\'s wife and his first client that he worked with. The site is designed as a showcase for her sculpture art, but has a light, bubbly style to contrast some of her more mysterious style of art.'
},
{
    'name': 'Tile Gallery',
		'site': 'gallery.aaron-sites.com',
		'imgsrc': 'assets/img/gallery.jpg',
    'direction': 'Right',
    'description': 'Tile Gallery is a nice clean template that can be used for any artist or even somebody that wants to show lots of work in one place. It features a tile gallery that is mobile responsive for any viewer.'
},
{
    'name': 'The Parallax',
		'site': 'parallax.aaron-sites.com',
		'imgsrc': 'assets/img/parallax.jpg',
    'direction': 'Up',
    'description': 'The Parallax is a simple showcase of how a background image can create a smooth scroll or parallax effect without JS. Chrome wont show this on Mobile.'
},
{
    'name': 'SCSS',
		'site': 'scss.aaron-sites.com',
		'imgsrc': 'assets/img/scss.png',
    'direction': 'Down',
    'description': 'SCSS is a template I bult using SCSS to style. Credit goes to Shaun JP AKA The Net Ninja for the tutorial. This just showcases SCSS being used.'
}
];

}]);

app.controller('SkillsController', ['$scope', function($scope){
  var skills = this;

  skills.langs = [
  {
    'lang': 'HTML5',
    'mastery': '99'
  },
  {
    'lang': 'CSS3',
    'mastery': '99'
  },
  {
    'lang': 'Javascript',
    'mastery': '90'
  },
  {
    'lang': 'AngularJS',
    'mastery': '85'
  },
  {
    'lang': 'Jquery',
    'mastery': '80'
  },
  {
    'lang': 'NodeJS',
    'mastery': '70'
  },
  {
    'lang': 'Express',
    'mastery': '70'
  },
  {
    'lang': 'MongoDB',
    'mastery': '60'
  },
  {
    'lang': 'MySQL',
    'mastery': '50'
  }
];

}]);
