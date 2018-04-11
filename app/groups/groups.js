'use strict'

angular.module('groups', ['ngRoute', 'myApp']).config([
  '$routeProvider', function ($routeProvider) {
    $routeProvider.when('/groups', {
      templateUrl: './groups/groups.html',
      controller: 'groupsController',
    });
  }]).controller('groupsController', ['groupsFactory', function (groupsFactory) {
    this.groups = []
    groupsFactory.getGroups.success((data) => {
      this.groups = data
    });
  }]);