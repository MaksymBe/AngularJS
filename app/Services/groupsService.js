class GroupService {

  constructor($http) {
    this.$http = $http;
    this.host = 'http://localhost:3000/groups/';
  }

  getGroups() {
    return this.$http.get(this.host);
  }

  getGroupById(id) {
    return this.$http.get(this.host + id);
  }

  updateGroup(group){
    return this.$http.patch(this.host + group.id, group);
  }

  deleteGroup(id) {
    return this.$http.delete(this.host + id);
  }

  createGroup(group) {
    return this.$http.post(this.host, group);
  }
}

angular.module('myApp').service('groupsService', GroupService);