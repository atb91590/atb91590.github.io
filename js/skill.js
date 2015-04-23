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
			{type:'Java', 			rate:8},
			{type:'C/C++', 			rate:5},
			{type:'HTML', 			rate:8},
			{type:'CSS', 			rate:8},
			{type:'Javascript', 	rate:7},
			{type:'Cold Fusion', 	rate:8},
			{type:'SQL', 			rate:8},
			{type:'Python', 		rate:5},
			{type:'Ruby', 			rate:5},
			{type:'MatLab', 		rate:5},
			{type:'PHP',			rate:4}
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
		this.sortBy = {text:'Alphabetical', val:'type'};
		this.getSortBy = function(){
			return this.sortBy;
		}
		this.setSortBy = function(sort){
			this.sortBy = sort;
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