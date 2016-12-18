var app = angular.module('locadora', [
  'ui.bootstrap',
  'ngAnimate',
  'ngRoute',
  'locadora.services',
  'locadora.diretivas'
]);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $routeProvider.when('/veiculo', {
    templateUrl: 'views/veiculo/consulta.html',
    controller: 'VeiculoConsultaController'
  })
  .when('/veiculo/novo/', {
    templateUrl: 'views/veiculo/cadastro.html',
    controller: 'VeiculoCadastroController'
  })
  .when('/veiculo/editar/:id', {
    templateUrl: 'views/veiculo/cadastro.html',
    controller: 'VeiculoCadastroController'
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
