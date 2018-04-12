'use strict';

/*let formToJSON = elements => [].reduce.call(elements, (data, element) => {
  data[element.name] = element.value;
  return data;
}, {});*/

angular.module('groupUpdate', ['ngRoute', 'myApp']).config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/groupUpdate/:id', {
      templateUrl: './groups/groupUpdate/groupUpdate.html',
      controller: 'updateGroupController',
    });
  }]).controller('updateGroupController', [
  'groupsService', '$location','$routeParams', function(groupsService, $location, $routeParams) {
    groupsService.getGroupById($routeParams.id).success(data => this.group = data);
    this.updateGroup = () => {
      let group = formToJSON(document.getElementsByName('groupForm')[0].elements);
      group.id = this.group.id;
      groupsService.updateGroup(group).success(() => $location.path('groups'));
    };

  }]);
