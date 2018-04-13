'use strict';

let formToJSON = elements => [].reduce.call(elements, (data, element) => {
  data[element.name] = element.value;
  return data;
}, {});

angular.module('createGroup', ['ngRoute', 'myApp']).config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/createGroup', {
      templateUrl: './groups/createGroup/createGroup.html',
      controller: 'createGroupController',
    });
  }]).controller('createGroupController', [
  'groupsService', '$location', function(groupsService, $location) {
    this.group = {};
    this.createGroup = () => {
      //let group = formToJSON(document.getElementsByName('groupForm')[0].elements);
      let group = this.group;
      group.periodStart = dateConverter(group.periodStart);
      group.periodFinish = dateConverter(group.periodFinish);
      groupsService.createGroup(this.group).
          success(() => $location.path('groups'));
    };

  }]);

