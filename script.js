var app = angular.module('app',[]);

app.controller('mainCtrl', function($scope){
	$scope.user1 = {
		name: "eran ovadia",
		age: "28",
		city: "tlv",
		friends : ["orie", "koski", "ron"]
	}
	$scope.user2 = {
		name: "Daniel Kalderon",
		age: "27",
		city: "tlv",
		friends : ["shani", "bar", "nor"]
	}
});

app.directive('userInfoCard', function(){
	return {
		templateUrl: "userInfoCard.html",
		restrict: "E",
		scope: {
			user: "="
		},
		controller: function($scope){
			$scope.collapsed = false;
			$scope.collapse = function(){
				$scope.collapsed = !$scope.collapsed;
			}
		}
	}
})

app.directive('removeFriend', function(){
	return {
		restrict: 'E',
		templateUrl: 'removeFriend.html',
		controller: function($scope){

			$scope.removing = false;
			$scope.startRemove = function(){
				$scope.removing = true;
			}
			$scope.cancelRemove = function(){
				$scope.removing = false;
			}
			$scope.removeFriend =function(friend){
				var idx = $scope.user.friends.indexOf(friend);
				if(idx > -1){
					$scope.user.friends.splice(idx, 1);
				}
			}
		}
	}	
})
