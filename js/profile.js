(function(){
	var self = {
		name:{
			firstName:'Alex',
			middleName:'Taing',
			lastName:'Bu'
		},
		hometown:'Long Beach, California',
		birthday:{
			year:1990,
			month:9,
			day:15
		},
		contact:{
			phone:'562-881-9291',
			email:'atb91590@yahoo.com'
		},
		misc:{
			degree:'Bachelors of Science in Computer Science',
			csulbGPA:3.667,
			overallGPA:3.075,
			objective:'Gain a strong foundation in Software Development by obtaining an entry level position and continue learning through career experiences to become a Full-Stack Engineer.'
		}
	};

	var app = angular.module("ProfileDirective",[])

	.directive("profile",function(){
		return {
			restrict: 'E',
			templateUrl: 'profile.html'
		};
	})
})();