'use strict';

angular.module('createGroup', ['ngRoute', 'myApp']).config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/groups/new', {
      templateUrl: './groups/createGroup/createGroup.html',
      controller: 'createGroupController',
    });
  }]).controller('createGroupController', [
  'groupsService', '$location', function(groupsService, $location) {
    this.group = {};
    this.createGroup = () => {
      let group = this.group;
      group.periodStart = dateConverter(group.periodStart);
      group.periodFinish = dateConverter(group.periodFinish);
      groupsService.createGroup(this.group).
          success(() => $location.path('groups'));
    };

  }]);

