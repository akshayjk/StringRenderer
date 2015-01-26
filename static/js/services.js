var FileRendererAppService = angular.module('FileRendererApp.Service', ['ngResource','ui.bootstrap', 'jsonFormatter']);

FileRendererAppService.factory('SendCode', ['$http', '$q', '$timeout', '$location', '$log', function ($http, $q, $timeout, $location, $log) {
	return {
		SendCodeResponse : function (data) {
			var SendCodeReq = {method: 'POST', url: 'http://localhost:8080/restjson'};
			return $http(SendCodeReq);
		}
	}
}]);


