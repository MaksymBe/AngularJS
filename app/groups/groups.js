'use strict';

angular.module('groups', ['ngRoute', 'myApp']).config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/groups', {
      templateUrl: './groups/groups.html',
      controller: 'groupsController',
    });
  }]).controller('groupsController', [
  'groupsService', '$location', function(groupsService, $location) {
    this.groups = [];
    groupsService.getGroups().success((data) => {
      this.groups = data;
    });

    this.deleteGroup = (group) => {
      groupsService.deleteGroup(group.id).success(() => {
        this.groups.splice(this.groups.indexOf(group), 1);
      });
    };

    this.redirectTo = (path) => {
      $location.path(path);
    }

  }]);