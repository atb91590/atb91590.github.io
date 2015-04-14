(function(){
	var app = angular.module('mainModule',['profileDirective']);

	var metaItems = {
		description: "Alex Taing Bu Software Engineer",
		author: "Alex Bu"
	}

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

	var myJobs = [
		{
			title:'Fiscal Systems Intern',
			logo:'img/jobs/bss_logo_transparent.png',
			employer:'City of Los Angeles',
			city:'Los Angeles',
			state:'California',
			startDate:'June 2013',
			endDate:'Present',
			duties:[
				'Sole Full Stack Developer of intranet applications',
				'Collaborate with interns to enhance LABSS Android App'
			]
		},
		{
			title:'Technology College Aide',
			logo:'img/jobs/lbusd.png',
			employer:'Long Beach Unified School District',
			city:'Long Beach',
			state:'California',
			startDate:'February 2012',
			endDate:'June 2013',
			duties:[
				'Customer Service + Software & Hardware Installation/Troubleshooting'
			]
		},
	];
	var phoneImage = 'img/projects/galaxys6shell.gif';
	var myProjects = [
		{
			title:'Corral',
			type:'mobile',
			purpose:'Senior Project',
			stack:{
				backend: ['PHP (Laravel)', 'mySQL'],
				frontend: ['HTML', 'CSS', 'Javascript (AngularJS, IonicFramework, jQuery)']
			},
			description:'Information today is so easily accessible via the internet, but the people in your life are not. '+
						'Corral solves this problem by giving you access to your friends at the tip of your finger tips by '+
						'only informing you who is available at a specified time (while maintaining user privacy)',
			images:[
				'img/projects/corral/start.jpg',
				'img/projects/corral/middle1.jpg',
				'img/projects/corral/middle2.jpg',
				'img/projects/corral/middle3.jpg',
				'img/projects/corral/middle4.jpg',
				'img/projects/corral/middle5.jpg',
				'img/projects/corral/middle6.jpg'
			]
		},
		{
			title:'Bureau of Street Services Android App',
			type:'mobile',
			purpose:'Internship',
			stack:{
				backend: ['Microsoft SQL Server', 'Ruby (to extract/insert geospatial data)', 'Cold Fusion (web service)'],
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
				backend: ['N/A'],
				frontend: ['Microsoft Touch Develop']
			},
			description:'This game educates the player on proper recycling habits ranging from unsalvageable items to electronic waste.',
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
				backend: ['N/A'],
				frontend: ['Microsoft Touch Develop']
			},
			description:'A simple 2D scroller game where the player must reach the finish line to deliver a pizza.',
			images:[
				'img/projects/pizzaRushHour/start.png',
				'img/projects/pizzaRushHour/middle1.png',
				'img/projects/pizzaRushHour/middle2.png',
				'img/projects/pizzaRushHour/middle3.png',
			]
		},
		{
			title:'Various LA Intranet Web Apps',
			type:'web',
			purpose:'Internship',
			stack:{
				backend: ['Microsoft SQL Server'],
				frontend: ['Cold Fusion', 'HTML', 'CSS', 'Javascript', 'jQuery']
			},
			description:'This entry covers a wide selection of applications which handle data-entry for city employees and equipment. '+
						'Also, the programs provide reports and information references for auditors.',
			images:[]
		}
	];

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

	app.controller('MainController', function($scope, $location, anchorSmoothScroll){
		this.metaTags = metaItems;
		this.getMetaDescription = function(){
			return this.metaTags.description;
		}
		this.getMetaAuthor = function(){
			return this.metaTags.author;
		}
		// Start: Activate Draggable Content------------------------------------------------
		interact('.draggable').draggable({
		    inertia: true,
		    restrict: {
		      restriction: "parent",
		      endOnly: true,
		      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
		    },
		    onmove: function(event){
			    var target = event.target;
			    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
			    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
			    target.style.webkitTransform = target.style.transform = 'translate('+x+'px,'+y+'px)';
			    target.setAttribute('data-x', x);
			    target.setAttribute('data-y', y);
		    },
		    onend: function (event) {
		      var textEl = event.target.querySelector('p');
		      textEl && (textEl.textContent =
		        'moved a distance of '
		        + (Math.sqrt(event.dx * event.dx +
		                     event.dy * event.dy)|0) + 'px');
		    }
		});
		// End: Activate Draggable Content------------------------------------------------

	    // Hash Function used to generate unique ids for DOM elements
	    this.hashString = function(str) {
			var hash = 0, i, chr, len;
			if (str.length == 0) return hash;
			for (i = 0, len = str.length; i < len; i++) {
				chr   = str.charCodeAt(i);
				hash  = ((hash << 5) - hash) + chr;
				hash |= 0; // Convert to 32bit integer
			}
			return hash;
	    }

		this.closeDropDown = function(){
			var bar = angular.element(document.getElementById('menubar'));
			bar.collapse('hide');
		}
		this.isNumeric = function(num){
			return !isNaN(num) && isFinite(num);
		}
		this.gotoElement = function (eID){
	      $location.hash('bottom');
	      anchorSmoothScroll.scrollTo(eID);
	    };
	    this.closeAlert = function(){
	    	$('#alert').fadeTo(300, 0.5).slideUp(500, function () {
                $('#alert').alert('close');
            });
	    }
	})
	.controller('ProfileController', function($scope){
	})
	.controller('SkillController', function($scope){
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
	})
	.controller('WorkController', function($scope){
		this.jobs = myJobs;
		this.getJobs = function() {
			return this.jobs;
		}
	})
	.controller('ProjectController', function($scope){
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
	})
	.controller('EducationController', function($scope){
		this.schools = mySchools;
	})
	.controller('AwardController', function($scope){
	    //Activate Tooltip Popups
	    $(function(){
	    	$('.awardPops').tooltip();
	    });
		this.awards = myAwards;
	})

	.service('anchorSmoothScroll', function(){
	    this.scrollTo = function(eID) {
	        var startY = currentYPosition();
	        var stopY = elmYPosition(eID);
	        var distance = stopY > startY ? stopY - startY : startY - stopY;
	        if (distance < 100) {
	            scrollTo(0, stopY); return;
	        }
	        var speed = Math.round(distance / 100);
	        if (speed >= 20) speed = 20;
	        var step = Math.round(distance / 25);
	        var leapY = stopY > startY ? startY + step : startY - step;
	        var timer = 0;
	        if (stopY > startY) {
	            for ( var i=startY; i<stopY; i+=step ) {
	                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
	            } return;
	        }
	        for ( var i=startY; i>stopY; i-=step ) {
	            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
	        }
	        
	        function currentYPosition() {
	            // Firefox, Chrome, Opera, Safari
	            if (self.pageYOffset) return self.pageYOffset;
	            // Internet Explorer 6 - standards mode
	            if (document.documentElement && document.documentElement.scrollTop)
	                return document.documentElement.scrollTop;
	            // Internet Explorer 6, 7 and 8
	            if (document.body.scrollTop) return document.body.scrollTop;
	            return 0;
	        }
	        
	        function elmYPosition(eID) {
	            var elm = document.getElementById(eID);
	            var y = elm.offsetTop;
	            var node = elm;
	            while (node.offsetParent && node.offsetParent != document.body) {
	                node = node.offsetParent;
	                y += node.offsetTop;
	            } return y;
	        }

	    };
	    
	});
})();