var AppCtrl = angular.module('Controller.AppCtrl',['ngResource','ui.bootstrap', 'jsonFormatter']);

AppCtrl.controller('SendCodeCtrl', ['$scope', '$location', 'SendCode', function ($scope, $location, SendCode) {

    $scope.CodeResponse = SendCode.SendCodeResponse();

}]);


