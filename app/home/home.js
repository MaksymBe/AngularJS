'use strict'

angular.module('home', ['ngRoute']).config([
  '$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: './home/home.html',
      controller: 'home',
    })
  }]).controller('home', [function () {}])