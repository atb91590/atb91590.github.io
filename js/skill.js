(function(){
	var mySkills = {
		general:[
			{
				type: 'AGILE',
				rate: 6
			},
			{
				type: 'Team Cooperation',
				rate: 8
			},
			{
				type: 'Bayesian Probability',
				rate: 5
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
				type: 'Google Maps',
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
		databases:[
			{
				type: 'NodeJS',
				rate: 4
			},
			{
				type: 'mySQL',
				rate: 4
			},
			{
				type: 'MS SQL Server',
				rate: 6
			}
		],
		tools:[
			{
				type: 'Photoshop',
				rate: 8
			},
			{
				type: 'GIT',
				rate: 8
			},
			{
				type: 'Illustrator',
				rate: 4
			},
			{
				type: 'Sublime Text',
				rate: 8
			},
			{
				type: 'Eclipse',
				rate: 8
			},
			{
				type: 'MS Excel',
				rate: 8
			},
			{
				type: 'MS Word',
				rate: 9
			},
			{
				type: 'MS Powerpoint',
				rate: 8
			},
			{
				type: 'Chrome Dev Tools',
				rate: 8
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
			{name:'MatLab', 		rate:5},
			{name:'PHP',			rate:4}
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
		this.sortBy = 'type';
		this.getSortBy = function(){
			return this.sortBy;
		}
		this.getGeneral = function(){
			return this.skills.general;
		}
		this.getLibraries = function(){
			return this.skills.libraries;
		}
		this.getDatabases = function(){
			return this.skills.databases;
		}
		this.getFrameworks = function(){
			return this.skills.frameworks;
		}
		this.getLanguages = function(){
			return this.skills.languages;
		}
		this.getTools = function(){
			return this.skills.tools;
		}
		this.getLanguageRate = function(rate){
			if (!numCheck(rate))
				return 'label-primary';
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

	function isNumeric(num){
		return !isNaN(num) && isFinite(num);
	}
	var numCheck = isNumeric;
})();