'use strict'

// Declare app level module which depends on views, and components
let app = angular.module('myApp', [
  'ngRoute',
  'nav-bar',
  'home',
  'groups',
]).
  config([
    '$locationProvider',
    '$routeProvider',
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.otherwise({redirectTo: '/home'});
    }]).factory('groupsFactory', function ($http) {
    return {
      getGroups: $http.get('http://localhost:3000/groups')
    }
  })





