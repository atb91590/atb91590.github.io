(function(){
	var mySchools = [
		{
			name:'California State University, Long Beach',
			major:'Computer Science',
			graduated:'Graduated December 2014',
			startDate:'September 2012',
			endDate:'December 2014'
		},
		{
			name:'Long Beach City College',
			major:'Computer Science',
			startDate:'January 2010',
			endDate:'June 2012'
		},
		{
			name:'California Polytechnic State University, San Luis Obispo',
			major:'Computer Science',
			startDate:'September 2008',
			endDate:'January 2010'
		}
	];

	var app = angular.module("educationDirective",[])

	.directive("education",function(){
		return {
			restrict: 'E',
			templateUrl: 'education.html',
			controller: educationController,
			controllerAs: 'education'
		};
	});

	var educationController = function(){
		this.schools = mySchools;
	}
})();