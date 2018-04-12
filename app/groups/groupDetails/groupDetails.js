angular.module('groupDetails', ['ngRoute', 'myApp']).config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/groups/:id', {
      templateUrl: './groups/groupDetails/groupDetails.html',
      controller: 'detailsGroupController',
    });
  }]).controller('detailsGroupController', [
  'groupsService', '$location', '$routeParams', function(groupsService, $location, $routeParams) {
    groupsService.getGroupById($routeParams.id).success(data => this.group = data);
  }]);