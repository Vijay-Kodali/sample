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
app.controller("EmpCtrl", function($scope) {
            $scope.emps = [

                {
                    name: "kodali",
                    job: "Manager",
                    salary: 1000,
                    pic: "male.jpg"
                }, {
                    name: "vijay",
                    job: "Team Lead",
                    salary: 9000,
                    pic: "male.jpg"
                }, {
                    name: "radha",
                    job: "Manager",
                    salary: 2000,
                    pic: "female.jpg"
                }, {
                    name: "ravi",
                    job: "SSE",
                    salary: 3000,
                    pic: "male.jpg"
                }, {
                    name: "venky",
                    job: "SE",
                    salary: 5000,
                    pic: "male.jpg"
                }, {
                    name: "rama",
                    job: "Manager",
                    salary: 2500,
                    pic: "female.jpg"
                }, {
                    name: "vinod",
                    job: "DBA",
                    salary: 6200,
                    pic: "male.jpg"
                }, {
                    name: "satish",
                    job: "SSE",
                    salary: 4200,
                    pic: "male.jpg"
                }, {
                    name: "raji",
                    job: "Manager",
                    salary: 7000,
                    pic: "female.jpg"
                }, {
                    name: "samba",
                    job: "SE",
                    salary: 3200,
                    pic: "male.jpg"
                }, {
                    name: "bhanu",
                    job: "DBA",
                    salary: 4050,
                    pic: "male.jpg"
                }, {
                    name: "bujji",
                    job: "Manager",
                    salary: 1000,
                    pic: "male.jpg"
                }
            ];
            $scope.mode = "List";
            $scope.isRev = false;
            $scope.sorttext = "name";
            $scope.obj = {
                name: "",
                job: "",
                salary: ""
            };
        });