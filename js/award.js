(function(){
	var myAwards = [
		{
			title:"Presidents' List",
			school:"CSULB",
			period:'Fall 2014'
		},
		{
			title:"Deans' List",
			school:"CSULB",
			period:'Spring 2014'
		},
		{
			title:"Deans' List",
			school:"CSULB",
			period:'Fall 2013'
		},
		{
			title:"Presidents' List",
			school:"CSULB",
			period:'Spring 2013'
		},
		{
			title:"Presidents' List",
			school:"CSULB",
			period:'Fall 2012'
		},
		{
			title:"Deans' List",
			school:"LBCC",
			period:'Spring 2012'
		}
	];

	var app = angular.module("awardDirective",[])

	.directive("award",function(){
		return {
			restrict: 'E',
			templateUrl: 'award.html',
			controller: awardController,
			controllerAs: 'award'
		};
	});

	var awardController = function(){
	    //Activate Tooltip Popups
	    $(function(){
	    	$('.awardPops').tooltip();
	    });
		this.awards = myAwards;
	}
})();