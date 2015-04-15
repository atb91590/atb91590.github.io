(function(){
	var mySkills = {
		general:[
			{
				type: 'AGILE',
				rate: 6
			},
			{
				type: 'GIT',
				rate: 8
			},
			{
				type: 'Team Cooperation',
				rate: 8
			},
			{
				type: 'Bayesian Probability',
				rate: 6
			},
			{
				type: 'NP-Complete',
				rate: 7
			}
		],
		libraries:[
			{
				type: 'jQuery/jQueryUI',
				rate: 8
			},
			{
				type: 'Google Maps - Android',
				rate: 6
			},
			{
				type: 'InteractJS',
				rate: 4
			}
		],
		frameworks:[
			{
				type: 'AngularJS',
				rate: 7
			},
			{
				type: 'IonicFramework',
				rate: 6
			},
			{
				type: 'BootStrap',
				rate: 7
			},
			{
				type: 'Android',
				rate: 7
			}
		],
		languages:[
			{name:'Java', 			rate:8},
			{name:'C/C++', 			rate:5},
			{name:'HTML', 			rate:8},
			{name:'CSS', 			rate:8},
			{name:'Javascript', 	rate:7},
			{name:'Cold Fusion', 	rate:8},
			{name:'SQL', 			rate:8},
			{name:'Objective-C', 	rate:'Exposed'},
			{name:'Python', 		rate:'Beginner'},
			{name:'Ruby', 			rate:'Exposed'},
			{name:'MatLab', 		rate:'Okay'}
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
		this.isNumeric = numCheck;
		this.getGeneral = function(){
			return this.skills.general;
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
		this.getLanguageRate = function(rate){
			if (rate<=5)
				return 'label-danger';
			else if (rate<=7)
				return 'label-warning';
			else
				return 'label-success';
		}
		this.getSkillRate = function(rate){
			if (rate<=5)
				return 'low';
			else if (rate<=7)
				return 'med';
			else
				return 'high';			
		}
	};

	var numCheck = function isNumeric(num){
		return !isNaN(num) && isFinite(num);
	}
})();