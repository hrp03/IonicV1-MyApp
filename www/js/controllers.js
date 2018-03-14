var myapp = angular.module('myapp.controllers', []);

myapp.controller('ctrlLogin', function($scope, $state, $ionicViewSwitcher, ServiceLoader) 
{	
	$scope.login = function()
	{
		if($scope.login.username === 'hp' && $scope.login.password === 'hp')
		{
			$state.go('dashboard');
		}
		else
		{
			ServiceLoader.showDialog("Enter credentials");			
		}
	};
	
	$scope.forgot = function()
	{
		ServiceLoader.showDialog("Username: hp<br/>Password : hp")
	};
	
	$scope.default = function()
	{
		scope.login.username = "";
		$scope.login.password = "";
	};
});

myapp.controller('ctrlDashboard', function($scope,$state) 
{		
	$scope.logout = function()
	{
		$state.go('login');
	};
  
	$scope.page = function(page)
	{
		$state.go(page);
	};
});

myapp.controller('ctrlProfile', function($scope,$state,$ionicHistory) 
{		
	$scope.back = function(){$ionicHistory.goBack();}
});

myapp.controller('ctrlPerformance', function($scope,$state,$ionicHistory) 
{		
	showChart('88');
	showPerformanceChart();
	$scope.back = function(){$ionicHistory.goBack();}
});

myapp.controller('ctrlProjects', function($scope,$state,$ionicHistory) 
{		
	$scope.back = function(){$ionicHistory.goBack();}
	
	$scope.shouldShowDelete = false;
	$scope.shouldShowReorder = false;
	$scope.listCanSwipe = true;
	
	$scope.share = function(){};
	
	$scope.edit = function(){};
	
	$scope.delete = function(item)
	{
		$scope.items.splice($scope.items.indexOf(item),1);
	};
	
	$scope.project = function(item)
	{
		$state.go('project_details',item);
		console.log(item);
	};
	
	$scope.items = 
	[
		{ title : "Step",platform : "Android, Tizen",description : "", img : "img/myapps/Step.png", company : "USV", client : "hp" },
		{ title : "My Camp",platform : "Android",description : "Application Description", img : "img/myapps/mycamp.png", company : "USV", client : "hp" },
		{ title : "ERoots",platform : "Android,iOS, Windows",description : "Application Description", img : "img/myapps/eroots.png", company : "USV", client : "hp" },
		{ title : "GT Survey",platform : "Android",description : "Application Description", img : "img/myapps/GTSurvey.png", company : "USV", client : "hp" },
		{ title : "Doctor's Day",platform : "Android",description : "Application Description", img : "img/myapps/Doctors Day.png", company : "USV", client : "hp" },
		{ title : "Arogya Connect",platform : "Android, iOS",description : "Application Description", img : "img/myapps/Arogya Connect.png", company : "USV", client : "hp" },
		{ title : "Fermentation",platform : "Android",description : "Application Description", img : "img/myapps/Fermentation.jpg", company : "USV", client : "hp" },
		{ title : "DSApp",platform : "Android",description : "Application Description", img : "img/myapps/DSApp.png", company : "USV", client : "hp" },
		{ title : "Riax",platform : "Android",description : "Riax Field Connect", img : "img/myapps/Riax Field Connect.png", company : "USV", client : "hp" },
		{ title : "Enable",platform : "iOS",description : "Application Description", img : "img/myapps/Enable.png", company : "USV", client : "hp" },
		{ title : "Team Crest",platform : "Android",description : "Application Description", img : "img/myapps/teamcrest.png", company : "USV", client : "hp" },
		{ title : "SpeakUp",platform : "Android",description : "Application Description", img : "img/myapps/speakup.png", company : "USV", client : "hp" },
		{ title : "Spedo",platform : "Android, iOS, Windows",description : "Application Description", img : "img/myapps/spedo.png", company : "USV", client : "hp" }
		
	];
	
});


myapp.controller('ctrlEducation',function($scope,$state,$ionicHistory)
{
	
	$scope.back = function(){ $ionicHistory.goBack(); }
});


myapp.controller('ctrlProjectsDetails', function($scope,$state,$stateParams,$ionicHistory) 
{
	
	//$state.params = { title : "Application 1",description : "Application Description", img : "img/user.jpg", company : "USV", client : "hp" };
	console.log($stateParams);
	console.log($state);
	$scope.title = $state.params.title;
	$scope.image = $state.params.img;
	$scope.platform = $state.params.platform;
	
	$scope.back = function(){$ionicHistory.goBack();}
});