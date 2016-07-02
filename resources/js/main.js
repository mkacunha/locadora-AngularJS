angular.module('locadora', ['ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider.when('/veiculo', {
    templateUrl: 'views/veiculo/consulta.html',
    controller: 'VeiculoController'
  })
  .when('/veiculo/novo', {
    templateUrl: 'views/veiculo/cadastro.html',
    controller: 'ClienteController'
  })
  .when('/cliente', {
    templateUrl: 'views/cliente/consulta.html',
    controller: 'ClienteController'
  })
  .when('/locacao/simular', {
    templateUrl: 'views/locacao/simular.html',
    controller: 'LocacaoController'
  })
  .when('/locacao', {
    templateUrl: 'views/locacao/consulta.html',
    controller: 'LocacaoController'
  })
  .when('/locacao/detalhe', {
    templateUrl: 'views/locacao/detalhe.html',
    controller: 'LocacaoController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
