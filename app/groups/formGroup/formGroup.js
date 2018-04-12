angular.module('groupForm', []).component('formGroup', {
  templateUrl: './groups/formGroup/formGroup.html',
  bindings: {
    group: '=',
    deleteGroup: '&',
  },
});