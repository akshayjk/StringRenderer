var FileRendererApp = angular.module('FileRendererApp', ['jsonFormatter']);

FileRendererApp.config(['$routeProvider', '$locationProvider', '$httpProvider',function ($routeProvider) {
	$routeProvider.when('/login', {templateUrl: '../views/login.html', controller: 'LoginCtrl'})
			.otherwise({redirectTo: '/login'});
}]);


FileRendererApp.controller('SendCodeCtrl', ['$scope', '$location', 'SendCode', function ($scope, $location, SendCode) {

    $scope.CodeResponse = SendCode.SendCodeResponse();

}]);

FileRendererApp.controller('JsonViewer', ['$scope', function ($scope) {

    $scope.data={
        "akshay":"kulkarni",
        "demo":"app"
    };

}]);

FileRendererApp.factory('SendCode', ['$http', '$q', '$timeout', '$location', '$log', function ($http, $q, $timeout, $location, $log) {
    return {
        SendCodeResponse : function (data) {
            var SendCodeReq = {method: 'POST', url: 'http://localhost:8080/restjson'};
            return $http(SendCodeReq);
        }
    }
}]);


FileRendererApp.directive('sidebarToggle', function() {
    return {
        link: function(scope, element, attrs) {
            $('[data-toggle=offcanvas]').click(function() {
                $('.row-offcanvas').toggleClass('active');
            });
        }
    }
});
