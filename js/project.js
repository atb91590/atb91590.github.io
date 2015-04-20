(function(){
	var phoneImage = 'img/projects/galaxys6shell.gif';
	var myProjects = [
		{
			title:'Corral',
			type:'mobile',
			purpose:'Senior Project',
			stack:{
				backend: ['PHP (Laravel)', 'mySQL', 'Javascript', 'AngularJS', 'jQuery'],
				frontend: ['HTML', 'CSS', 'IonicFramework']
			},
			description:'Information today is so easily accessible via the internet, but the people in your life are not. '+
						'Corral solves this problem by giving you access to your friends at the tip of your fingers by '+
						'only informing you who is available at a user specified time (while maintaining user privacy)',
			images:[
				'img/projects/corral/logo.jpg',
				'img/projects/corral/start.jpg',
				'img/projects/corral/middle1.jpg',
				'img/projects/corral/middle2.jpg',
				'img/projects/corral/middle3.jpg',
				'img/projects/corral/middle4.jpg',
				'img/projects/corral/middle5.jpg',
				'img/projects/corral/middle6.jpg',
				'img/projects/corral/middle7.jpg',
				'img/projects/corral/middle8.jpg',
				'img/projects/corral/middle9.jpg',
				'img/projects/corral/middle10.jpg',
				'img/projects/corral/middle11.jpg',
				'img/projects/corral/middle12.jpg',
				'img/projects/corral/middle13.jpg'
			],
			credit: {
				text: 'Graphics created by Chrisonna Ny',
				link: 'http://sleepynoodledoodles.deviantart.com/'
			}
		},
		{
			title:'LABSS Android App',
			type:'mobile',
			purpose:'Internship',
			stack:{
				backend: ['Java', 'Microsoft SQL Server', 'Ruby (extract geospatial data)', 'Cold Fusion (WSDL)'],
				frontend: ['Java', 'Google Maps API', 'Mapquest']
			},
			description:'With concern for public knowledge, Mayor Eric Garcetti wanted city spending to be transparent and '+
						'requested road conditions for LA County to be mapped. This was paired with his initiative to repair streets.',
			images:[
				'img/projects/labss/start.jpg',
				'img/projects/labss/middle.jpg',
				'img/projects/labss/end.jpg'
			]
		},
		{
			title:'Planet Recycle',
			type:'web',
			purpose:'Nickelodeon Game+Hack',
			stack:{
				backend: ['Microsoft Touch Develop'],
				frontend: ['Microsoft Touch Develop']
			},
			description:'This game educates the player on proper recycling habits by creating a reflex when encountering a type of trash. '+
						'The waste ranges from unsalvageable items to electronic waste.',
			images:[
				'img/projects/planetRecycle/start.png',
				'img/projects/planetRecycle/middle.png',
				'img/projects/planetRecycle/end.png'
			]
		},
		{
			title:'Pizza Rush Hour',
			type:'web',
			purpose:'Course Project',
			stack:{
				backend: ['Microsoft Touch Develop'],
				frontend: ['Microsoft Touch Develop']
			},
			description:'A simple 2D scroller game where the player must reach the finish line to deliver a pizza while dodging pedestrians'
						+' and speeding vehicles.',
			images:[
				'img/projects/pizzaRushHour/start.png',
				'img/projects/pizzaRushHour/middle1.png',
				'img/projects/pizzaRushHour/middle2.png',
				'img/projects/pizzaRushHour/middle3.png',
			],
			credit: {
				text: 'Conecpt by Sokha Ny',
				link: 'https://www.linkedin.com/pub/sokha-ny/70/863/354'
			}
		},
		{
			title:'Various LA Intranet Web Apps',
			type:'web',
			purpose:'Internship',
			stack:{
				backend: ['Cold Fusion','Javascript', 'Microsoft SQL Server', 'jQuery'],
				frontend: ['HTML', 'CSS']
			},
			description:'This entry covers a wide selection of applications which handle data-entry for city employees and equipment. '+
						'Also, the programs provide reports and information references for auditors.',
			images:[]
		}
	];

	var app = angular.module("projectDirective",[])

	.directive("project",function(){
		return {
			restrict: 'E',
			templateUrl: 'project.html',
			controller: projectController,
			controllerAs: 'project'
		};
	});

	var projectController = function(){
		this.phoneShell = phoneImage;
		this.projects = myProjects;
		this.currentProject = this.projects[0];
		this.descTab = 'overview';
		this.setCurrentProject = function(project){
			this.currentProject = project;
		}
		this.setDescTab = function(tab){
			this.descTab=tab;
		}
		this.isDescTab = function(tab){
			return this.descTab==tab;
		}
		this.isMobile = function(project){
			return project.type=='mobile';
		}
		this.isWeb = function(project){
			return project.type=='web';
		}
		this.toggleDropMenu = function(){
			var menu = $('#projMenu');
	    	if (menu.is(':visible')){
		    	menu.fadeTo(1, 0.5).slideUp(200, function () {
	                menu.hide();
	            });
	    	}
	    	else {
	    		menu.slideDown(200).fadeTo(1, 1, function(){
	    			menu.show();
	    		});
	    	}
		}
	}
})();