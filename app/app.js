var app = angular.module("myApp",[]);
app.controller('myController', ['$scope',function($scope) {
	$scope.init = function() {
		$scope.items = [{"number":"1", "src":"images/balloon.jpeg"},{"number":"2", "src":"images/balloon.jpeg"},{"number":"3", "src":"images/balloon.jpeg"},{"number":"4", "src":"images/balloon.jpeg"},{"number":"5", "src":"images/balloon.jpeg"},{"number":"6", "src":"images/balloon.jpeg"},{"number":"7", "src":"images/balloon.jpeg"},{"number":"8", "src":"images/balloon.jpeg"},{"number":"9", "src":"images/balloon.jpeg"},{"number":"10", "src":"images/balloon.jpeg"},{"number":"11", "src":"images/balloon.jpeg"},{"number":"12", "src":"images/balloon.jpeg"},{"number":"13", "src":"images/balloon.jpeg"},{"number":"14", "src":"images/balloon.jpeg"},{"number":"15", "src":"images/balloon.jpeg"},{"number":"16", "src":"images/balloon.jpeg"},{"number":"17", "src":"images/balloon.jpeg"},{"number":"18", "src":"images/balloon.jpeg"},{"number":"19", "src":"images/balloon.jpeg"},{"number":"20", "src":"images/balloon.jpeg"}];
    $scope.noOfClicks = 0;
		angular.element('.modal').modal('hide');
		$scope.correctIndex = Math.ceil(Math.random()*20);
	};

	$scope.balloonClicked = function(index) {
		$scope.noOfClicks++;
		if(index !== $scope.correctIndex) {
			$scope.items[index].src = "images/troll.jpg";
		} else {
			$scope.items[index].src = "images/winner.png";
			angular.element('.modal').modal('show');
		}
	};
}]);
