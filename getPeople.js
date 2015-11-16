var app=angular.module("myApp",[]);

app.controller("myAppCtl",function People($scope,$http){
	$http.get('http://localhost:8088/people')
	.success(function(data){
		console.log("data: ",data);
		$scope.people = data;
	})
	.error(function(error){
		alert(error);
	});
})