var myapp = angular.module('myapp', ['ionic','myapp.controllers', 'myapp.services']);

myapp.config(function($stateProvider, $urlRouterProvider) 
{
	$stateProvider
    .state
	(
		'login', 
		{
			url: '/',
			templateUrl: 'pages/login.html',
			controller : 'ctrlLogin'
		}
	)
	.state
	(
		'dashboard', 
		{
			url: '/dashboard',
			templateUrl: 'pages/dashboard.html',
			controller : 'ctrlDashboard'
		}
	)
	.state
	(
		'profile', 
		{
			url: '/profile',
			templateUrl: 'pages/profile.html',
			controller : 'ctrlProfile'
		}
	)
	.state
	(
		'performance', 
		{
			url: '/performance',
			templateUrl: 'pages/performance.html',
			controller : 'ctrlPerformance'
		}
	)
	.state
	(
		'education',
		{
			url : '/education',
			templateUrl : 'pages/education.html',
			controller : 'ctrlEducation'
		}
	)
	.state
	(
		'projects', 
		{
			url: '/projects',
			templateUrl: 'pages/projects.html',
			controller : 'ctrlProjects'
		}
	)
	.state
	(
		'project_details', 
		{
			url: '/project_details',
			templateUrl: 'pages/project_details.html',
			controller : 'ctrlProjectsDetails',
			params : { title : "",platform : "",description : "", img : "", company : "", client : "" }
		}
	)
	;
  
	$urlRouterProvider.otherwise('/');
});
