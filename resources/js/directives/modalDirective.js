var app = angular.module('locadora.diretivas', []);

app.directive('modalMsg', function($uibModal){
  var ddo = {};

  ddo.transclude = true;
  ddo.restrict = 'E';
  ddo.template = '<a ng-click="open()" ng-transclude>{{name}}</a>';
  ddo.scope = {
    title: "@",
    message: "@",
    size:"@",
    context:"@",
    functionOk:"&",
    functionCancel:"&"
  };

  ddo.link = function(scope, element, attrs){
    scope.open = function(){
      var modalInstance = $uibModal.open({
        templateUrl: 'views/modal/modalmsg.html',
        controller:  'ModalMsgController',
        size: scope.size,
        windowClass: 'app-modal-window',
        backdrop: true,
        resolve: {
          scopeModal: function(){
            return {
              title: scope.title,
              message: scope.message,
              context:scope.context
            };
          }
        }
      });

      modalInstance.result.then(
        function(){
          scope.functionOk();
        }, function(){
          scope.functionCancel();
        });
      };
    }

    return ddo;
  });

  app.controller('ModalMsgController', function($scope, $uibModalInstance, scopeModal, veiculoFactory){
    $scope.scopeModal = scopeModal;

    $scope.ok = function(){
      $uibModalInstance.close();
    }

    $scope.cancel = function(){
      $uibModalInstance.dismiss();
    }
  });
