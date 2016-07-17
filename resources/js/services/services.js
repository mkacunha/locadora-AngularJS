var app = angular.module('locadora.services', ['ngResource']);

var baseUrl = 'http://localhost:8080';

app.config(['$resourceProvider', function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.factory('veiculoFactory', function($resource){
  return $resource(baseUrl + '/v1/veiculos/:id', null, {
    update : {
      method:'PUT'
    },
    save : {
      method: 'POST'
    },
    delete : {
      method:'DELETE'
    }
  });
});
