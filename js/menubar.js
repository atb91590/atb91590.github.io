(function(){
	var app = angular.module("menubarDirective",[])

	.directive("menubar",function(){
		return {
			restrict: 'E',
			templateUrl: 'menubar.html',
			controller: menubarController
			controllerAs: 'menu'
		};
	});

	var menubarController = function(){
		this.gotoElement = function (eID){
	      $location.hash('bottom');
	      anchorSmoothScroll.scrollTo(eID);
	    };
		this.closeDropDown = function(){
			var bar = angular.element(document.getElementById('menubar'));
			bar.collapse('hide');
		}
	}
})();