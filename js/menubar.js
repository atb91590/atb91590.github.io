(function(){
	var app = angular.module("menubarDirective",[])

	.directive("menubar",['$location','anchorSmoothScroll',function($location,anchorSmoothScroll){
		return {
			restrict: 'E',
			templateUrl: 'menubar.html'
		};
	}]);
})();