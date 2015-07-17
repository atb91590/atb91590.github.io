(function(){
	var myJobs = [
		{
			title:'Software Engineer',
			logo:'img/jobs/veritone-media-logo.gif',
			employer:'Veritone Media',
			city:'Newport Beach',
			state:'California',
			startDate:'July 2015',
			endDate:'Present',
			duties:[
				'Develop frontend and backend components with AGILE methodology while '+
				'coordinating with CTO, designers, product management, and other engineers.'
			]
		{
			title:'Fiscal Systems Intern',
			logo:'img/jobs/bss_logo_transparent.png',
			employer:'City of Los Angeles',
			city:'Los Angeles',
			state:'California',
			startDate:'June 2013',
			endDate:'June 2015',
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

	var app = angular.module("workDirective", [])

	.directive("work", function(){
		return {
			restrict: 'E',
			templateUrl: 'work.html',
			controller: workController,
			controllerAs: 'work'
		};
	});

	var workController = function(){
		this.jobs = myJobs;
		this.getJobs = function() {
			return this.jobs;
		}
	}
})();