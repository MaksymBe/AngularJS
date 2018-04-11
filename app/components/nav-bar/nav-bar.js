angular.module('nav-bar', []).directive('navbar', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './components/nav-bar/nav-bar.html',
  }
});