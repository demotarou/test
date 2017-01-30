// This is a JavaScript file

var app = angular.module('app', ['ngRoute'])
  // .config(['$routeProvider', function($routeProvider){
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    // $locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    // });
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/top', {
         controller: 'RouteController',
         templateUrl: '/www/template/top.html'
      })
      .when('/page1', {
         controller: 'RouteController',
         templateUrl: '/www/template/page1.html'
      })
      .when('/page2', {
         controller: 'RouteController',
         templateUrl: '/www/template/page2.html'
      })
      .when('/page3', {
         controller: 'RouteController',
         templateUrl: '/www/template/page3.html'
      })
      // .when('/page2', {
      //    controller: 'RouteController1',
      //    templateUrl: 'template/page2.html'
      // })
      // .when('/spa/page2', {
      //    controller: 'RouteController2',
      //    templateUrl: 'www/template/page2.html'
      // })
      // .when('/page2', {
      //    controller: 'RouteController3',
      //    templateUrl: '/www/template/page2.html'
      // })
      .otherwise({
        redirectTo: '/top'
      });
  }]);
  
  
// angular.module('myApp', [])
app
  .controller('MyController', ['$scope', '$log',  function($scope, $log) {
    // ボタンクリック時にログを出力
    $scope.onclick = function() {
      $log.debug('デバッグ');
      $log.error('エラー');
      $log.info('情報');
      $log.log('一般ログ');
      $log.warn('警告');
    };
  }]);

    
// angular.module('myApp')
app
  .controller('RouteController1', ['$scope', function($scope) {
    // $scope.msg = 'AngularJS TIPS のページへようこそ';
  }])
  .controller('RouteController2', ['$scope', function($scope) {
  }])
  .controller('RouteController3', ['$scope', function($scope) {
  }]);


var app = angular.module('testApp', ['ngRoute'])
  // .config(['$routeProvider', function($routeProvider){
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
    });
    $routeProvider
      .when('/angular', {
        controller: 'AngularController',
        templateUrl: '/www/partials/angular.html'
      })
      .when('/angular/:apiType', {
        controller: 'AngularController',
        templateUrl: '/www/partials/angular-api.html'
      })
      .when('/angular/:apiType/method/:method*', {
        controller: 'AngularController',
        templateUrl: '/www/partials/angular-api-method.html'
      })
      .otherwise({
        redirectTo: '/angular'
      });
  }]);
app.controller('AngularController', ["$scope", function($scope){
  $scope.apiType = "routing";
  $scope.method = "method";
  alert('url = '+window.location.href);
}]);
