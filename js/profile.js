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
		websites: [
			{
				type: 'LinkedIn',
				icon: 'img/profile/websites/linkedin_icon.gif',
				link: 'https://www.linkedin.com/pub/alex-bu/6b/67b/713'
			},
			{
				type: 'Angel List',
				icon: 'img/profile/websites/angelist_icon.gif',
				link: 'https://angel.co/alex-bu'
			}
		],
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

	var app = angular.module("profileDirective",[])

	.directive("profile",function(){
		return {
			restrict: 'E',
			templateUrl: 'profile.html',
			controller: profileController,
			controllerAs: 'profile'
		};
	});

	var profileController = function(){
		this.myself = self;
		this.getAge = function(){
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();
			var age = yyyy-this.myself.birthday.year;
			if (mm<this.myself.birthday.month && dd<this.myself.birthday.day)
				age--;
			return age;
		}
		this.getFullName = function(){
			return this.myself.name.firstName+' '+this.myself.name.middleName+' '+this.myself.name.lastName;
		}
		this.getHomeTown = function(){
			return this.myself.hometown;
		}
		this.getHomeTownUrlFormat = function(){
			return this.myself.hometown.replace(" ","+");
		}
		this.getPhoneNumber = function(){
			return this.myself.contact.phone;
		}
		this.getEmail = function(){
			return this.myself.contact.email;
		}
		this.getDegree = function(){
			return this.myself.misc.degree;
		}
		this.getCSULBGPA = function(){
			return this.myself.misc.csulbGPA;
		}
		this.getOverallGPA = function(){
			return this.myself.misc.overallGPA;
		}
		this.getObjective = function(){
			return this.myself.misc.objective;
		}
		this.getWebsites = function(){
			return this.myself.websites;
		}
	};
})();