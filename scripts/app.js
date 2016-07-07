var app=angular.module("MyApp", []);
app.controller("GameController", function ($scope) {
	$scope.msg="Hi This is My Game";
	$scope.verify=function(){
		$scope.deviation=$scope.origional-$scope.guess;
		$scope.trails=$scope.trails+1;
	}
	$scope.initGame=function(){
		$scope.trails=0;
		$scope.origional=Math.floor(Math.random()*1000+1);
		$scope.deviation=null;
		$scope.guess=null;
	}
	$scope.initGame();
});
