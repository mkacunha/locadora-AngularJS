var app = angular.module('locadora');

app.controller('VeiculoConsultaController', function($scope, veiculoFactory){
  $scope.veiculos = [];

  $scope.remover = function(veiculo){
    veiculoFactory.delete({id :veiculo.id},
      function(){
        var indice = $scope.veiculos.indexOf(veiculo);
        $scope.veiculos.splice(indice, 1);
      },
      function(erro){
        console.log(erro);
      }
    );
  }

  buscarTodos = function(){
    veiculoFactory.query(function(veiculos){
      $scope.veiculos = veiculos;
    },
    function(erro){
      console.log(erro);
    });
  }

  buscarTodos();
});

app.controller('VeiculoCadastroController',function($scope, veiculoFactory, $routeParams){
  $scope.veiculo = {};

  $scope.veiculo.marca = 'FIAT';
  $scope.veiculo.modelo = 'UNO';
  $scope.veiculo.ano = 2015;
  $scope.veiculo.cor = 'AMARELO';
  $scope.veiculo.placa = 'AXX-6570';
  $scope.veiculo.valorDiaria = 1;
  $scope.veiculo.valorKM = 1;

  if ($routeParams.id){
    veiculoFactory.get({id : $routeParams.id},
      function(veiculo){
        $scope.veiculo = veiculo;
      },
      function(erro){
        console.log(erro);
      }
    );
  }

  $scope.salvar = function(){
    sucesso = function(veiculo){
      console.log('Salvou com sucesso');
    }

    erro = function(erro){
      console.log(erro);
    }

    if ($scope.veiculo.id){
      veiculoFactory.update({id : $scope.veiculo.id}, $scope.veiculo, sucesso, erro);
    } else {
      veiculoFactory.save($scope.veiculo,sucesso, erro);
    }
  }
});
