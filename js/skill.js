(function(){
	var mySkills = {
		statements:[
			'Experience in AGILE project workflow',
			'GIT version control',
			'Strong verbal/written skills',
			'Familiar with Bayesian Classification',
			'Familiar with NP-Complete Problems'
		],
		libraries:[
			'jQuery/jQueryUI/jQuery Mobile',
			'Google Maps (Android)'
		],
		frameworks:[
			'AngularJS',
			'IonicFramework',
			'Android'
		],
		languages:[
			{name:'Java', 			rating:8},
			{name:'C/C++', 			rating:5},
			{name:'HTML', 			rating:8},
			{name:'CSS', 			rating:8},
			{name:'Javascript', 	rating:7},
			{name:'Cold Fusion', 	rating:8},
			{name:'SQL', 			rating:8},
			{name:'Objective-C', 	rating:'Exposed'},
			{name:'Python', 		rating:'Beginner'},
			{name:'Ruby', 			rating:'Exposed'},
			{name:'MatLab', 		rating:'Okay'}
		]
	};

	var app = angular.module("skillDirective",[])

	.directive("skill",function(){
		return {
			restrict: 'E',
			templateUrl: 'skill.html',
			controller: skillController,
			controllerAs: 'skill'
		};
	});

	var skillController = function(){
		this.skills = mySkills;
		this.getStatements = function(){
			return this.skills.statements;
		}
		this.getLibraries = function(){
			return this.skills.libraries;
		}
		this.getFrameworks = function(){
			return this.skills.frameworks;
		}
		this.getLanguages = function(){
			return this.skills.languages;
		}
	};
})();