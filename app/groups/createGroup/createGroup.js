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
    this.createGroup = () => {
      let group = formToJSON(document.getElementsByName('groupForm')[0].elements);
      groupsService.createGroup(group).success(() => $location.path('groups'));
    };

  }]);

