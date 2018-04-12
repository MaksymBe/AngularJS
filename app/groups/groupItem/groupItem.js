angular.module('groups').component('groupItem', {
  templateUrl: './groups/groupItem/groupItem.html',
  bindings: {
    group: '=',
    deleteGroup: '&',
    redirectTo: '&'
  },

});