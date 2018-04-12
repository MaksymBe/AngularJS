'use strict';

// Declare app level module which depends on views, and components
let app = angular.module('myApp', [
  'ngRoute',
  'nav-bar',
  'home',
  'groups',
  'createGroup',
  'groupForm',
  'groupUpdate',
  'groupDetails',
]).
    config([
      '$locationProvider',
      '$routeProvider',
      function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/home'});
      }]);