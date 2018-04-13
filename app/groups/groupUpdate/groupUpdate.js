'use strict';

angular.module('groupUpdate', ['ngRoute', 'myApp']).config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/groupUpdate/:id', {
      templateUrl: './groups/groupUpdate/groupUpdate.html',
      controller: 'updateGroupController',
    });
  }]).controller('updateGroupController', [
  'groupsService',
  '$location',
  '$routeParams',
  function(groupsService, $location, $routeParams) {
    groupsService.getGroupById($routeParams.id).success(data => {
      this.group = data;
      this.group.periodStart = new Date(this.group.periodStart);
      this.group.periodFinish = new Date(this.group.periodFinish);
    });

    this.updateGroup = () => {
      let group = this.group;
      group.periodStart = dateConverter(group.periodStart);
      group.periodFinish = dateConverter(group.periodFinish);
      groupsService.updateGroup(group).
          success(() => $location.path('groups'));
    };

  }]);

function dateConverter(dateAsShit) {
  return dateAsShit.getFullYear() + '-' +
      (((dateAsShit.getMonth() + 1).toString().length === 2)
          ? (dateAsShit.getMonth() + 1)
          : '0' + (dateAsShit.getMonth() + 1)) + '-' +
      dateAsShit.getDate();
}